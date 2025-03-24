import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { useState } from "react"

const SearchBox = () => {
  const [searchItem, setSearchItem] = useState("")
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    console.log(searchValue)
    setSearchItem(searchValue)
  }
  return (
    <div className="flex h-10 items-center gap-[1rem] rounded-2xl border-1 px-[1.25rem] py-[0.5rem]">
      <button>
        <MagnifyingGlassIcon width="1.5rem" />
      </button>
      <input
        type="text"
        onChange={handleSearchInputChange}
        placeholder="Type to search..."
        className="h-8 w-[15rem] outline-none"
      />
    </div>
  )
}

export default SearchBox
