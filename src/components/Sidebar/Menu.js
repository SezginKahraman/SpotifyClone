import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-col">
        <li>
          <NavLink
            exact
            to={"/"}
            activeClassName="bg-active text-white"
            className="h-10 flex gap-x-4 items-center text-link font-semibold text-sm px-4 rounded hover:text-white "
            href=""
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/search"}
            activeClassName=" bg-active text-white"
            className="h-10 flex gap-x-4 items-center text-link font-semibold text-sm px-4 rounded hover:text-white "
            href=""
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/collection"}
            activeClassName=" bg-active text-white"
            className="h-10 flex gap-x-4 items-center text-link font-semibold text-sm px-4 rounded hover:text-white "
            href=""
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
