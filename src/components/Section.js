import React from "react";
import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";
import Title from "./Title";

export default function Section({ title, more, items }) {
  return (
    <section>
      <Title title={title} more={more}></Title>
      <div className="grid gap-x-6 grid-cols-5">
        {items.map((item) => (
          <SongItem item={item} key={item.id}></SongItem>
        ))}
      </div>
    </section>
  );
}
