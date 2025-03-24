import MenuHeader from "./MenuHeader.component"

const Logout = ({
  active,
  setActiveTab,
}: {
  active: boolean
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
      <MenuHeader setActiveTab={setActiveTab} title="Đăng xuất" />
    </div>
  )
}

export default Logout
