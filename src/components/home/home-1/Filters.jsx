import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  return (
    <div className="md:max-max-w-7xl px-4 w-full mx-auto relative -mt-8 sm:-mt-20">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Emplacement</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Entrez l'emplacement..."
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Type de propriété</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="villa">Villa</option>
                <option value="office-building">Immeuble de bureaux</option>
                <option value="apartment">Appartement</option>
                <option value="mansion">Maison de luxe</option>
                <option value="real-estate">Bien immobilier</option>
                <option value="penthouse">Penthouse</option>
                <option value="studio">Studio</option>
                <option value="duplex">Duplex</option>
                <option value="terrain">Terrain</option>
                <option value="entrepot">Entrepôt</option>
                <option value="local-commercial">Local commercial</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Tranche de prix (GNF)</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name="price_range"
                id="price_range"
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="100000000-200000000">100M - 200M GNF</option>
                <option value="200000000-400000000">200M - 400M GNF</option>
                <option value="400000000-600000000">400M - 600M GNF</option>
                <option value="600000000-1000000000">
                  600M - 1 Milliard GNF
                </option>
                <option value="1000000000-2000000000">
                  1 - 2 Milliards GNF
                </option>
                <option value="2000000000-plus">Plus de 2 Milliards GNF</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">Type d'offre</h1>
            <div className="flex-align-center gap-x-2">
              <BiBriefcase />
              <select
                name="offer_type"
                id="offer_type"
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark"
              >
                <option value="sell">À vendre</option>
                <option value="rent">À louer</option>
              </select>
            </div>
          </div>
        </div>
        <button className="w-full btn btn-primary md:w-fit">recherche</button>
      </div>
    </div>
  );
};

export default Filters;
