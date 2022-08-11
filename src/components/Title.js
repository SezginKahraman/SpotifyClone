import { NavLink } from "react-router-dom";

function Title({ title, more = false }) {
  return (
    <header className="flex mb-4 items-center justify-between">
      <NavLink to={more ?? "#"}>
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
      </NavLink>

      {more && (
        <NavLink
          className={
            "text-xs font-semibold uppercase tracking-wider text-link hover:underline"
          }
          to={more}
        >
          See all
        </NavLink>
      )}
    </header>
  );
}
export default Title;
