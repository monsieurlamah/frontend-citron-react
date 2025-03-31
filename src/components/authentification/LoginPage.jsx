import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo_.png";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen justify-center items-center bg-gray-100 p-4">
      {/* Video Section */}
      <div className="relative w-full lg:w-[400px] h-[500px] rounded-lg overflow-hidden shadow-lg mt-8 lg:mt-0">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
          <h2 className="text-2xl font-bold text-center">
            Bienvenu chez Citron Guinée
          </h2>
          <p className="mt-2 text-sm">Votre nouvelle vie commence ici!</p>
        </div>
        {/* Sign-up link */}
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-3 flex justify-between items-center px-4 rounded-b-lg">
          <p className="text-gray-600 text-sm">Vous n'avez pas de compte ?</p>
          <Link to="/inscription" className="text-green-600 font-semibold">
            S'inscrire
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-[400px] h-auto lg:h-[500px] flex flex-col justify-center items-center p-6 lg:p-10 bg-white shadow-lg rounded-lg mt-6 lg:mt-0">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 mb-2" />
          <h3 className="text-xl font-semibold text-gray-700">
            Connectez-vous !
          </h3>
        </div>

        <form className="w-full space-y-4">
          <div className="relative">
            <label className="block text-gray-600">E-mail</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 bg-gray-100 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Entrer votre E-mail..."
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Mot de passe</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 bg-gray-100 text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Entrer votre mot de passe"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 btn btn-primary text-white font-semibold rounded-lg w-full"
            >
              Connexion →
            </button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-4">
            Mot de passe oublié ?{" "}
            <Link to="/reset-password" className="text-green-500">
              Cliquez ici
            </Link>
          </p>
          <p className="text-sm text-center text-gray-500 mt-4">
            Vous n'avez pas de compte ?{" "}
            <Link to="/inscription" className="text-green-500">
              S'inscrire
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
