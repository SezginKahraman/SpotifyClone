import React from "react";
import { Icon } from "../../Icons";

export default function NavSearch() {
  return (
    <div className="mr-auto ml-4 relative ">
      <label
        htmlFor="search-input"
        className=" w-12 h-10 absolute text-black/50 top-0 left-0 flex items-center justify-center  "
      >
        <Icon size={24} name="search"></Icon>
      </label>
      <input
        autoFocus={true}
        placeholder="Sanatçılar ve şarkılar"
        type="text"
        className="h-10 bg-white text-sm font-medium
         placeholder-black/50 pl-12 rounded-3xl text-black outline-none max-w-full w-[22.75rem]
         
         "
        id="search-input"
      />
    </div>
  );
}
