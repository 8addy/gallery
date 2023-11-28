import { DataImage } from "../helpers/types";

export const fetchImages = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: process.env.PEXELS_API_KEY || "",
    },
  });
  const result = await response.json();
  const photos =
    result?.photos?.map((item: any) => ({
      id: item.id,
      alt: item.alt,
      src: {
        large: item.src.large,
      },
    })) || [];
  const data = {
    ...result,
    photos,
  } as DataImage;
  return data;
};
