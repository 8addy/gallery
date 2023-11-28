export type Image = {
  id: number;
  alt: string;
  src: {
    large: string;
  };
};

export type DataImage = {
  page: number;
  per_page: number;
  photos: Image[];
};
