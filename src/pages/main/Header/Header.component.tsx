import Logo from "../../../components/Logo.component"
import SearchBox from "../../../components/Searchbox.component"
import { NavigationList, NotificationList, UserOptionList } from "./Navigation"

const Header = () => {
  const user = {
    avatar: "https://picsum.photos/200",
    fullName: "Phạm Thiên Long",
  }
  return (
    <nav className="fixed z-10 flex w-full items-center justify-between bg-[#fff] px-[2rem] py-[0.25rem] shadow-sm">
      <div className="flex w-[35rem] items-center justify-start gap-5">
        <Logo width="3.5rem" />
        <SearchBox />
      </div>
      <NavigationList />
      <div className="flex w-[35rem] items-center justify-end gap-[1rem]">
        <NotificationList width="2rem" />
        <UserOptionList avatar={user.avatar} fullname={user.fullName} />
      </div>
    </nav>
  )
}

export default Header
