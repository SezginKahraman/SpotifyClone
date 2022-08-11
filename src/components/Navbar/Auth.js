import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

export default function Auth() {
  const user = {
    name: "Sezgin Kahraman",
    avatar:
      "https://img1.pnghut.com/21/9/10/6djm5vQVAc/youtube-iconfinder-user-world-wide-web-google-account.jpg",
  };

  return (
    <nav>
      <Menu as="nav" className="relative">
        {({ open }) => (
          <>
            <Menu.Button
              className={`flex hover:bg-active items-center h-8 pr-2 rounded-3xl ${
                open ? "bg-active" : "bg-black"
              }`}
            >
              <img
                className="w-9 h-9 rounded-full p-px mr-2"
                src={user.avatar}
                alt=""
              />
              <span className="text-sm font-semibold mr-2">{user.name}</span>
              <span className={open === true && "rotate-180"}>
                <Icon name="downdiv" size={16}></Icon>
              </span>
            </Menu.Button>
            <Menu.Items
              className={
                "absolute z-10 p-1 top-full right-0 w-48 bg-active rounded-md translate-y-1"
              }
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-10"
                    }`}
                    href="#"
                  >
                    <span>Account settings</span>
                    <Icon size={16} name="external"></Icon>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-10"
                    }`}
                    href="#"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-10"
                    }`}
                    href="#"
                  >
                    Log Out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </nav>
  );
}
