/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios"
import { Form, useNavigate } from "react-router"
import Logo from "../../../components/Logo.component"
import Input from "../components/Input.component"
import { EyeIcon, UsersIcon } from "@heroicons/react/20/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setLoginState } from "../slices/login.slice"
type LoginValidateType = {
  username: string
  password: string
}

const login = async (data: LoginValidateType) => {
  const response = await axios.post("http://localhost:3000/auth/signin", data, {
    withCredentials: true,
  })
  return response.data
}
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidateType>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      if (!response.success) {
        // hiện một modal
        console.log(response.message)
      } else {
        const payload = {
          success: response.success,
          id: response.data.id,
          username: response.data.username,
          error: response.data.message,
        }
        dispatch(setLoginState(payload))
        navigate("/")
      }
    },
    onError: (response) => {
      //Hiện modal
      console.error(response)
    },
  })

  const onSubmit: SubmitHandler<LoginValidateType> = (data) => {
    mutation.mutate(data)
  }
  return (
    <div className="flex w-full flex-col items-center">
      <Logo width="10rem" />
      <div className="flex w-[32rem] flex-col items-center rounded-4xl shadow-2xl">
        <h1 className="font-monserrat font-bold text-blue-500 uppercase">
          Welcome
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="mb-5 flex flex-col gap-[1rem]"
        >
          <Input
            icon={<UsersIcon className="w-[2rem]" />}
            name="username"
            placeholder="Username"
            type="text"
            id="username"
            register={register}
            registerName="username"
            registerOptions={{ required: "Username is required" }}
          />
          {errors.username && <span>Username is required</span>}
          <Input
            icon={<EyeIcon className="w-[2rem]" />}
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            register={register}
            registerName="password"
            registerOptions={{ required: "Password is required" }}
          />
          {errors.password && <span>Password is required</span>}
          <button
            type="submit"
            className="font-monserrat h-[2.5rem] rounded-2xl bg-blue-500 leading-none text-white transition-all hover:text-black"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Login
