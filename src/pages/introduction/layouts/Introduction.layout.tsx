import { Link } from "react-router"
import { Logo } from "../../../components"
import { loginRoute } from "../../../routes/auth.route"
import Footer from "./Footer/Footer.layout"
function Introduction() {
  return (
    <>
      <ul className="font-monserrat fixed right-0 bottom-[0.5rem] left-0 z-[1] m-auto flex w-[45rem] list-none items-center justify-between gap-[1rem] rounded-2xl bg-white px-[0.75rem] py-0 shadow-[1.2px_3.5px_5.5px_rgba(0,0,0,0.25)]">
        <li>
          <Link to="/" className="flex flex-row items-center gap-[1rem]">
            <Logo width="4rem"></Logo>
            <p className="text-[2rem]">Stack</p>
          </Link>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <Link
            className="rounded-[0.5rem] bg-black px-[1.75rem] py-[0.75rem] text-white"
            to={loginRoute}
          >
            Start study
          </Link>
        </li>
      </ul>
      <main className="font-lora flex h-full justify-center bg-white">
        <div className="p-[0 1rem] flex h-screen w-[48rem] flex-col items-center justify-center border-x-1 border-black/15 text-center leading-[5rem]">
          <Logo width="10rem"></Logo>
          <>
            <h1 className="text-[4rem]">
              Platform for studying <br />& finding future.
            </h1>
            <h2 className="text-[2rem] font-normal">
              Plan. Write. Share. Find your opportunities.
            </h2>
          </>
          <Link
            to={loginRoute}
            className="rounded-2xl bg-black px-[3.25rem] py-[0.25rem] text-[1.5rem] text-white"
          >
            Join us now
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Introduction
