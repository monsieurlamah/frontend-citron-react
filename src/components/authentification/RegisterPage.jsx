import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo_.png";

const RegisterPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen justify-center items-center bg-gray-100 p-4 mt-16">
      {/* Video Section */}
      <div className="relative w-full max-w-md lg:w-[500px] h-[650px] rounded-lg overflow-hidden shadow-lg flex-col justify-between hidden md:block">
        <video className="w-full h-full object-cover" src={video} autoPlay muted loop></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
          <h2 className="text-3xl font-bold text-center">Bienvenue chez Citron Guinée</h2>
          <p className="mt-3 text-lg">Votre nouvelle vie commence ici!</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-4 flex justify-between items-center px-4 rounded-b-lg">
          <p className="text-gray-600 text-sm">Vous avez déjà un compte ?</p>
          <Link to="/connexion" className="text-green-600 font-semibold text-sm">Connectez-vous</Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-[500px] h-[650px] bg-white shadow-lg rounded-lg p-6 lg:p-10 flex flex-col justify-between">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-20 max-w-full mb-3" />
          <h3 className="text-2xl font-semibold text-gray-700">Inscrivez-vous !</h3>
        </div>

        <form className="w-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-gray-600">Prénom et Nom</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <span className="px-4 bg-gray-100 text-gray-500"><FaUser /></span>
                <input type="text" className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Votre Nom" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-600">E-mail</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <span className="px-4 bg-gray-100 text-gray-500"><FaEnvelope /></span>
                <input type="email" className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Votre E-mail" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Mot de passe</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-4 bg-gray-100 text-gray-500"><FaLock /></span>
              <input type="password" className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Mot de passe" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Confirmation</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-4 bg-gray-100 text-gray-500"><FaLock /></span>
              <input type="password" className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Confirmer" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Vous êtes :</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <select className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="proprietaire">Propriétaire</option>
                <option value="locataire">Locataire</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-primary w-full py-3 text-white font-semibold rounded-lg">
              S'inscrire →
            </button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-4">
            Vous avez déjà un compte ?{" "}
            <Link to="/connexion" className="text-green-500">
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
