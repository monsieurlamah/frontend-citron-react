import { brands } from "../../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
  <h1 className="mx-auto sub-heading">Nos marques</h1>
  <h1 className="heading">Les marques avec lesquelles nous collaborons</h1>
  <p>
    Nous travaillons avec des marques de renom pour garantir la qualité et l'excellence de chaque projet. Leur confiance en nous est le reflet de notre engagement et de notre expertise.
  </p>
</div>

      <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
        {brands.map((image, i) => (
          <div className="group" key={i}>
            <img
              src={image}
              alt=""
              className="w-20 group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
