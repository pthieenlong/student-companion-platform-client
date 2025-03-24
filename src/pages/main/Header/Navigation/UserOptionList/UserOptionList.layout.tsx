import { useState } from "react"
import Config from "./Config.layout.tsx"
import MainMenu from "./MainMenu.layout.tsx"
import Logout from "./Logout.layout.tsx"

const UserOptionList = ({
  avatar,
  fullname,
}: {
  avatar: string | object
  fullname: string
}) => {
  const [active, setActive] = useState(false)
  const [activeTab, setActiveTab] = useState("menu")

  const renderMenu = () => {
    switch (activeTab) {
      case "menu":
        return (
          <MainMenu
            active={active}
            avatar={avatar}
            fullname={fullname}
            setActiveTab={setActiveTab}
          />
        )
      case "config":
        return <Config active={active} />
      case "logout":
        return <Logout active={active} setActiveTab={setActiveTab} />
      default:
        return (
          <MainMenu
            active={active}
            avatar={avatar}
            fullname={fullname}
            setActiveTab={setActiveTab}
          />
        )
    }
  }

  return (
    <div className="relative w-[3rem] hover:cursor-pointer">
      <button
        type="button"
        onClick={() => {
          setActive(!active)
        }}
      >
        <img
          src={typeof avatar === "string" ? avatar : ""}
          alt="user_avatar"
          className="block w-full rounded-full"
        />
      </button>
      {renderMenu()}
    </div>
  )
}

export default UserOptionList
