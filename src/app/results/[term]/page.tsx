import Gallery from "../../components/Gallery";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetadata({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

const Results = ({ params: { term } }: Props) => {
  return (
    <div>
      <Gallery searchTerm={term} />
    </div>
  );
};

export default Results;
