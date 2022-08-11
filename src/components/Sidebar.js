import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "../Icons";
import logo from "../img/logo.svg";
import DownloadApp from "./Sidebar/DownloadApp";
import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";
import SidebarCover from "./Sidebar/SidebarCover";

export default function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu></Menu>
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href=""
              className="py-1 px-3 flex items-center group  font-semibold  text-sm text-link hover:text-white  "
            >
              <span className="w-6 h-6 flex justify-center group-hover:bg-opacity-100 items-center mr-4 bg-white rounded-sm text-black">
                <Icon size={12} name="plusIcon"></Icon>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-1 px-3 flex items-center group  font-semibold text-sm text-link hover:text-white"
            >
              <span className="w-6 h-6 flex justify-center items-center mr-4 bg-gradient-to-br text-white rounded-sm from-blue-300 to-indigo-100">
                <Icon size={12} name="heartIcon"></Icon>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist></Playlist>
      <DownloadApp></DownloadApp>
      {console.log(sidebar)}
      {sidebar && <SidebarCover></SidebarCover>}
    </aside>
  );
}
