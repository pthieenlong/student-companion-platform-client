import {
  ArrowLeftEndOnRectangleIcon,
  ChevronRightIcon,
  PencilIcon,
} from "@heroicons/react/20/solid"
import { JSX } from "react"

const MenuItem = ({
  mainIcon,
  title,
  onClick,
}: {
  mainIcon: JSX.Element
  title: string
  onClick: () => void
}) => {
  return (
    <div className="hover:bg-grey mt-[1rem] transform rounded-2xl px-[0.5rem] py-[0.25rem] transition-all duration-200 hover:cursor-pointer">
      <button
        className="flex w-full items-center hover:cursor-pointer"
        type="button"
        onClick={onClick}
      >
        <div className="bg-blue mr-[1rem] h-[2.5rem] w-[3rem] rounded-full p-1.5 text-white">
          {mainIcon}
        </div>
        <p className="w-full text-left text-lg">{title}</p>
        <ChevronRightIcon className="h-[2.5rem] w-[2.5rem]" />
      </button>
    </div>
  )
}

const MainMenu = ({
  active,
  avatar,
  fullname,
  setActiveTab,
}: {
  active: boolean
  avatar: string | object
  fullname: string
  setActiveTab: (tab: string) => void
}) => {
  return (
    <div
      className={
        "absolute top-[3.25rem] right-[-1.5rem] w-[24rem] transform rounded-xl bg-[#fff] px-[1rem] py-3 shadow-[1.2px_3.5px_5.5px_rgba(0,0,0,0.25)] transition-all duration-300" +
        (active
          ? " scale-100 opacity-100"
          : " pointer-events-none scale-95 opacity-0")
      }
    >
      <div className="rounded-3xl px-[1.5rem] py-[0.75rem] shadow-[1.2px_3.5px_5.5px_rgba(0,0,0,0.25)]">
        <div className="hover:bg-grey flex transform items-center rounded-3xl px-[0.5rem] py-[1rem] transition-all duration-300">
          <img
            src={typeof avatar === "string" ? avatar : ""}
            alt="user_avatar"
            className="mr-2 block w-[3rem] rounded-full"
          />
          <p className="font-monserrat text-xl">{fullname}</p>
        </div>
        <hr className="bg-lightgrey text-lightgrey mt-1.5 mb-1.5 h-1 rounded-2xl" />
        <button
          type="button"
          className="hover:bg-grey flex w-full transform items-center justify-center rounded-xl py-[0.25rem] transition-all duration-300"
        >
          <PencilIcon width="2rem" />
          <span>Chỉnh sửa trang cá nhân</span>
        </button>
      </div>
      {/* <MenuItem mainIcon={<Cog8ToothIcon />} title="Cài đặt" onClick={() => setActiveTab("config")}/> */}
      {/* <MenuItem mainIcon={<QuestionMarkCircleIcon />} title="Trợ giúp và hỗ trợ" onClick={() => setActiveTab("help")}/> */}
      <MenuItem
        mainIcon={<ArrowLeftEndOnRectangleIcon />}
        title="Đăng xuất"
        onClick={() => setActiveTab("logout")}
      />
    </div>
  )
}

export default MainMenu
