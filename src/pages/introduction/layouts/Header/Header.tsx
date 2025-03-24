import { Logo } from "../../../../components"
import { Link } from "react-router"
import { loginRoute } from "../../../../routes/auth.route"
function Header() {
  return (
    <ul className="font-monserrat fixed right-0 bottom-[0.5rem] left-0 z-[1] m-auto flex w-[45rem] list-none items-center justify-between gap-[1rem] rounded-2xl bg-white px-[0.75rem] py-0 shadow-[1.2px_3.5px_5.5px_rgba(0,0,0,0.25)]">
      <li>
        <Link to="/" className="flex flex-row items-center gap-[1rem]">
          <Logo width="4rem"></Logo>
          <p className="text-[2rem]">Stack</p>
        </Link>
      </li>
      <li>
        <a href="#" target="_blank">
          About us
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          Blog
        </a>
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
  )
}
export default Header
