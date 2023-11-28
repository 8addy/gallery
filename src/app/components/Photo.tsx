import Image from "next/image";
import React from "react";
import { Image as ImgType } from "../helpers/types";

const Photo = ({ photo }: { photo: ImgType }) => {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        className="object-cover hover:opacity-60 cursor-pointer"
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
      />
    </div>
  );
};

export default Photo;
