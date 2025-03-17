import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";

const Featured = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">Nos coups de cœur</h1>
        <h1 className="heading">
          Explorez nos biens immobiliers les plus récents et attractifs
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
