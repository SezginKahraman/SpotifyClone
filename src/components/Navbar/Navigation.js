import React from "react";
import { Icon } from "../../Icons";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  const history = useHistory();
  return (
    <nav className="flex gap-x-4">
      <button
        onClick={() => history.goBack()}
        className="w-8 bg-black bg-opacity-70 rounded-full h-8 flex items-center justify-center"
      >
        <Icon size={22} name="back"></Icon>
      </button>
      <button
        onClick={() => history.goForward()}
        className="w-8 bg-black bg-opacity-70 rounded-full h-8 flex items-center justify-center"
      >
        <Icon size={22} name="next"></Icon>
      </button>
    </nav>
  );
}
