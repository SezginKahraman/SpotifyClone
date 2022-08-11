import React, { useEffect, useRef, useState } from "react";
import categories from "../data/categories";
import Title from "../components/Title";
import favoriteCategories from "../data/favorite-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import { Icon } from "../Icons";

function Category({ category }) {
  return (
    <div
      style={{ "background-color": category.color }}
      className="bg-[var(--color)] relative rounded-md before:pt-[100%] before:block"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg]
          translate-y-[-2%] absolute bottom-0 right-0
          translate-x-[18%] "
          alt=""
        />
      </div>
    </div>
  );
}
function WideCategory({ category }) {
  return (
    <div
      style={{ "background-color": category.color }}
      className="flex-shrink-0 w-[27.475rem] h-[13.75rem] relative rounded-lg "
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-32 h-32 rotate-[25deg]
          translate-y-[-2%] absolute bottom-0 right-0
          translate-x-[18%] "
          alt=""
        />
      </div>
    </div>
  );
}

export default function Search() {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const scrollHandle = () => {
    console.log(favoritesRef.current.scrollLeft);
    const isBegin =
      favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
      favoritesRef.current.scrollWidth;
    const isEnd = favoritesRef.current.scrollLeft === 0;
    setPrev(!isBegin);
    setNext(!isEnd);
  };

  useEffect(() => {
    if (favoritesRef.current) {
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      console.log(favoritesRef.current.scrollWidth);
      // return () => {
      //   favoritesRef.current.removeEventListener("scroll", scrollHandle);
      // };
    }
  }, [favoritesRef]);

  const slideFavoriteNext = () => {
    favoritesRef.current.scrollLeft -= 400;
    // favoritesRef.current.offsetWidth - 200;
  };
  const slideFavoritePrev = () => {
    favoritesRef.current.scrollLeft += 400;
  };
  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediklerin"></Title>
        <div className="relative">
          {next && (
            <button
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
              onClick={slideFavoriteNext}
            >
              <Icon name="PreviousPlay" size={24}></Icon>
            </button>
          )}
          {prev && (
            <button
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10  w-12 h-12 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
              onClick={slideFavoritePrev}
            >
              <Icon name="NextPlay" size={24}></Icon>
            </button>
          )}

          <ScrollContainer
            innerRef={favoritesRef}
            className="flex gap-x-6 scrollable"
          >
            {favoriteCategories.map((category, index) => (
              <WideCategory key={index} category={category}></WideCategory>
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine Göz At"></Title>
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category) => (
            <Category category={category}></Category>
          ))}
        </div>
      </section>
    </>
  );
}
