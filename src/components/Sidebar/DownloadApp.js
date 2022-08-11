import React from "react";
import { Icon } from "../../Icons";

export default function DownloadApp() {
  return (
    <a
      href="/"
      className="h-10 flex text-sm gap-x-4 font-semibold hover:text-white flex-shrink-0 items-center px-6"
    >
      <div className="mt-2">
        <Icon name="download" size={24}></Icon>
      </div>
      Uygulamayı Yükle
    </a>
  );
}
