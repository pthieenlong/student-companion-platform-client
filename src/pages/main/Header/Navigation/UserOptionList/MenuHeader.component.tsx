import { ArrowLeftIcon } from "@heroicons/react/20/solid"

const MenuHeader = ({
  setActiveTab,
  title,
}: {
  setActiveTab: (tab: string) => void
  title: string
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="hover:bg-grey flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full px-[0.25rem] py-[0.25rem]"
        type="button"
        onClick={() => {
          setActiveTab("menu")
        }}
      >
        <ArrowLeftIcon width="1.5rem" />
      </button>
      <h3 className="h-[3rem] text-xl leading-[3rem] font-bold">{title}</h3>
    </div>
  )
}

export default MenuHeader
