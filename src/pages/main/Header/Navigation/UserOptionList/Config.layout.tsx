import { PencilIcon } from "@heroicons/react/20/solid"

const Config = ({ active }: { active: boolean }) => {
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
        <div className="hover:bg-grey flex transform items-center rounded-3xl px-[0.5rem] py-[1rem] transition-all duration-300"></div>
        <hr className="bg-lightgrey text-lightgrey mt-1.5 mb-1.5 h-1 rounded-2xl" />
        <button
          type="button"
          className="hover:bg-grey flex w-full transform items-center justify-center rounded-xl py-[0.25rem] transition-all duration-300"
        >
          <PencilIcon width="2rem" />
          <span>Chỉnh sửa trang cá nhân</span>
        </button>
      </div>
    </div>
  )
}

export default Config
