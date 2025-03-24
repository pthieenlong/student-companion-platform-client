import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/20/solid"
// import { UsersIcon } from '@heroicons/react/24/outline'
import { JSX } from "react"
import { Link } from "react-router"

const NavigationItem = ({
  icon,
  href,
  active = false,
}: {
  icon: JSX.Element
  href: string
  active?: boolean
}) => {
  return (
    <Link
      className={
        "hover:text-blue hover:border-blue flex w-[4rem] justify-center duration-[0.1s] hover:rounded-b-sm hover:border-b-4 " +
        (active ? "border-blue rounded-b-sm border-b-4" : "")
      }
      to={href}
    >
      <div className={"py-[0.25rem] " + (active ? "text-blue" : "")}>
        {icon}
      </div>
    </Link>
  )
}

const NavigationList = () => {
  return (
    <nav className="flex w-[48rem] justify-center gap-[12rem]">
      <NavigationItem
        icon={<HomeIcon width="2rem" to="" />}
        href=""
        active={true}
      />
      <NavigationItem icon={<UserIcon width="2rem" to="" />} href="" />
      <NavigationItem
        icon={<CalendarDaysIcon width="2rem" />}
        href="/schedule"
      />
    </nav>
  )
}

export default NavigationList
