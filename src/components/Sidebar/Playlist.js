import React from "react";
import { Icon } from "../../Icons";

export default function Playlist() {
  return (
    <nav className="mx-6 mt-2 py-2 border-t border-white border-opacity-20 flex-auto overflow-auto">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href=""
              className="text-s flex h-8 items-center text-link hover:text-white"
            >
              22.Çalma listesi
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
