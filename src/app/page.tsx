import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-white mt-3 mb-5 underline underline-offset-8 text-center">
        Images Gallery
      </h1>
      <Gallery />
    </div>
  );
}
