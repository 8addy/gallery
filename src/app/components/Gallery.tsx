import React from "react";
import { fetchImages } from "../service/service";
import Photo from "./Photo";
import { Image } from "../helpers/types";

const Gallery = async ({ searchTerm }: { searchTerm?: string }) => {
  let link = searchTerm ? `search?query=${searchTerm}` : "curated";
  const data = await fetchImages(`https://api.pexels.com/v1/${link}`);

  if (data.photos.length === 0)
    return <div className="m-4 font-bold text-2xl">No Images found..</div>;

  return (
    <section className="px-2 py-3 grid gap-2 grid-cols-gallery">
      {data.photos.map((item: Image) => {
        return <Photo key={item.id} photo={item} />;
      })}
    </section>
  );
};

export default Gallery;
