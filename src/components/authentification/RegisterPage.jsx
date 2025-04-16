import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo_.png";

const RegisterPage = () => {
  return (
    <div className="pt-20 pb-20 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        
        {/* Video Section */}
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
            <h2 className="text-3xl font-bold text-center">Bienvenue chez Citron Guinée</h2>
            <p className="mt-3 text-lg text-center">Votre nouvelle vie commence ici !</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-4 flex justify-between items-center px-4">
            <p className="text-gray-700 text-sm">Vous avez déjà un compte ?</p>
            <Link to="/connexion" className="text-green-600 font-semibold text-sm">Connectez-vous</Link>
          </div>
        </div>

        {/* Form Section - fond blanc */}
        <div className="bg-white text-gray-800 p-8 lg:p-10">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-20 mb-4" />
            <h3 className="text-2xl font-bold">Inscrivez-vous</h3>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Prénom et Nom</label>
                <div className="flex items-center border rounded-md px-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
                <div className="flex items-center border rounded-md px-3">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Votre e-mail"
                    className="w-full py-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mot de passe</label>
              <div className="flex items-center border rounded-md px-3">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirmation</label>
              <div className="flex items-center border rounded-md px-3">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Vous êtes :</label>
              <select className="w-full border rounded-md py-2 px-3 focus:outline-none">
                <option value="proprietaire">Propriétaire</option>
                <option value="locataire">Locataire</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary text-white font-semibold rounded-lg"
            >
              S'inscrire →
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Vous avez déjà un compte ?{" "}
              <Link to="/connexion" className="text-green-600 font-semibold">Connectez-vous</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
