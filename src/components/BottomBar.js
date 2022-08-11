import React from "react";
import Player from "./Bottombar/Player";

export default function BottomBar() {
  return (
    <div className="h-24 bg-footer border-t border-white border-opacity-5">
      <Player></Player>
    </div>
  );
}
