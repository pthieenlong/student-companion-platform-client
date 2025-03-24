import { BellIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const NotificationItem = ({
  thumbnail,
  text,
  date,
  isSeen = false,
}: {
  thumbnail: string | undefined
  text: string | undefined
  date: string | undefined
  isSeen?: boolean
}) => {
  return (
    <li className="hover:bg-grey flex w-[calc(24rem-1.5rem)] items-center rounded-2xl px-[0.5rem] py-[0.15rem] transition-all hover:cursor-pointer">
      <img
        src={thumbnail}
        alt="notification_thumbnail"
        className="block w-[4rem] rounded-full"
      />
      <div className="mr-[0.25rem] ml-[0.75rem]">
        <p className="line-clamp-2 text-left text-[1rem]">{text}</p>
        <p className="text-blue text-[0.75rem]">{date}</p>
      </div>
      <div
        className={
          "bg-blue h-[12px] w-[16px] rounded-full" +
          (isSeen ? " hidden" : " block")
        }
      ></div>
    </li>
  )
}

const NotificationList = ({ width }: { width: string }) => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`relative flex h-[3rem] w-[3rem] transform items-center justify-center rounded-full transition-all duration-150 ${active ? "bg-white" : "bg-transparent"}`}
    >
      <button
        title="active_notification_tab"
        type="button"
        className="hover:cursor-pointer"
        onClick={() => {
          setActive(!active)
        }}
      >
        <BellIcon
          width={width}
          className={`transform transition-all duration-150 ${active ? "text-blue" : "text-black"}`}
        />
      </button>
      <div
        className={
          "absolute top-[3.25rem] right-[-3rem] w-[24rem] transform rounded-xl bg-white px-[1rem] py-3 shadow-[1.2px_3.5px_5.5px_rgba(0,0,0,0.25)] transition-all duration-300" +
          (active
            ? " scale-100 opacity-100"
            : " pointer-events-none scale-95 opacity-0")
        }
      >
        <h3 className="text-blue font-monserrat mb-1.5 text-2xl font-semibold">
          Thông báo
        </h3>
        <ul className="flex flex-col gap-[0.75rem]">
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 1 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 2 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 3 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 4 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 5 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 6 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 7 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
          <NotificationItem
            thumbnail="https://picsum.photos/200"
            text="Đây là thông báo 8 của bạn, xin vui lòng kiểm tra"
            date="3 ngày"
          />
        </ul>
      </div>
    </div>
  )
}

export default NotificationList
