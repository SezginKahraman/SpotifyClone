import React from "react";
import Section from "../components/Section";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Felsefenin Kısa Tarihi",
      description: "Utku",
      image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
      type: "album",
      artist: "ben",

      src: "	https://cdn.freesound.org/previews/646/646395_12295155-lq.mp3",
    },
    {
      id: 2,
      title: "Felsefenin Kısa Tarihi",
      description: "Utku",
      image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
      type: "album",
      artist: "ben",

      src: "	https://cdn.freesound.org/previews/645/645984_12677269-lq.mp3",
    },
    {
      id: 3,
      title: "Felsefenin Kısa Tarihi",
      description: "Utku",
      image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
      type: "artist",
      artist: "ben",
      src: "https://cdn.freesound.org/previews/645/645680_14178795-lq.mp3",
    },
    {
      id: 4,
      title: "Felsefenin Kısa Tarihi",
      description: "Utku",
      image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
      type: "album",
      artist: "ben",

      src: "	https://cdn.freesound.org/previews/646/646395_12295155-lq.mp3",
    },
    {
      id: 5,
      title: "Felsefenin Kısa Tarihi",
      description: "Utku",
      image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
      type: "podcast",
      artist: "ben",

      src: "	https://cdn.freesound.org/previews/646/646395_12295155-lq.mp3",
    },
  ];
  return (
    <div className="grid gap-y-6">
      <Section items={items} title="Recently played" more="/blabla"></Section>
      <Section items={items} title="For you.." more="/blabla"></Section>
      <Section items={items} title="For you.." more="/blabla"></Section>
      <Section items={items} title="For you.." more="/blabla"></Section>
      <Section items={items} title="For you.." more="/blabla"></Section>
      <Section items={items} title="For you.." more="/blabla"></Section>
    </div>
  );
}
