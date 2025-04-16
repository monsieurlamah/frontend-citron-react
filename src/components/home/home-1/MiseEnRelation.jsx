const GetInTouch = () => {
  return (
    <div className="pt-20 pb-20 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        <div className="w-full h-full">
          <img
            src="/images/property (39).jpg"
            alt="Mise en relation diaspora"
            className="w-full h-full object-cover rounded-xl md:rounded-r-none"
          />
        </div>
        <div className="bg-[#0a5076] text-white rounded-xl md:rounded-l-none p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Mise en relation avec Citron Guinée</h1>
          <p className="text-sm mb-6">
            Vous êtes de la diaspora ? Remplissez ce formulaire pour nous confier votre projet :
            construction, achat de parcelle ou matériaux.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary placeholder-white"
              placeholder="Nom et prénom"
            />
            <input
              type="email"
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary placeholder-white"
              placeholder="Adresse e-mail"
            />
            <input
              type="tel"
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary placeholder-white"
              placeholder="Numéro WhatsApp"
            />
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary placeholder-white"
              placeholder="Pays de résidence"
            />
            <select
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary text-white"
              defaultValue=""
            >
              <option value="" disabled>
                Type de service souhaité
              </option>
              <option value="construction">Construction</option>
              <option value="achat-parcelle">Achat de parcelle</option>
              <option value="materiaux">Achat de matériaux</option>
              <option value="autre">Autre</option>
            </select>
            <textarea
              className="w-full px-3 py-2 rounded-md outline-none bg-secondary placeholder-white"
              rows={4}
              placeholder="Votre message ou détails du projet"
            />
            <button
              type="submit"
              className="w-full btn btn-primary text-white font-semibold py-2 rounded-m transition"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
