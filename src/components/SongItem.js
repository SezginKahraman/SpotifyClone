import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";
import { setCurrent } from "../stores/player";

function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };
  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };
  const isCurrentItem = current.id === item.id && playing;
  return (
    <NavLink
      key={item.id}
      className={"bg-footer group p-4 rounded hover:bg-active"}
      to="/"
    >
      <div className="relative mb-4">
        <img
          className={`object-cover absoulte inset-0 w-full h-full ${imageStyle(
            item
          )}`}
          src={item.image}
          alt=""
        />
        <button
          onClick={updateCurrent}
          className={`justify-center items-center w-10 h-10 group-hover:flex group-focus:flex rounded-full ${
            !isCurrentItem ? "hidden" : "flex"
          } bg-primary absolute right-2 bottom-2`}
        >
          <Icon name={isCurrentItem ? "pauseIcon" : "playIcon"}></Icon>
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 mt-1 text-link text-sm">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
