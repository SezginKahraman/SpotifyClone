import React from "react";
import { Icon } from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../stores/player";

export default function SidebarCover() {
  const { current, sidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  return (
    <div className="pt-[100%] bg-black relative group">
      <img
        src={current.image}
        className="w-full absolute top-0 left-0 h-full object-cover"
        alt=""
      />
      <button
        onClick={() => {
          dispatch(setSidebar(false));
          console.log("sidebar is : ", sidebar);
        }}
        className="w-6 h-6 bg-black rounded-full flex justify-center rotate-180 items-center hover:!opacity-100 group-hover:opacity-80 hover:scale-[1.06] absolute top-1 right-1 opacity-0"
      >
        <Icon size={16} name="arrowLeft"></Icon>
      </button>
    </div>
  );
}
