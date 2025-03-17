import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { motion } from "framer-motion";
import RegisterModal from "./RegisterModal"; // Importation de RegisterModal

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Nouveau state pour gérer l'affichage du RegisterModal

  useEffect(() => {
    if (isOpen || showRegisterModal) {
      document.body.classList.add("blurred");
    } else {
      document.body.classList.remove("blurred");
    }
  }, [isOpen, showRegisterModal]);

  const openRegisterModal = () => {
    setShowRegisterModal(true); // Ouvre le modal d'inscription
    setIsOpen(false); // Masque le modal de connexion
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false); // Ferme le modal d'inscription
    setIsOpen(true); // Rouvre le modal de connexion
  };

  const closeLoginModal = () => {
    setIsOpen(false); // Ferme le modal de connexion
    setShowRegisterModal(false); // Ferme également le modal d'inscription
  };


  return (
    <>
      {/* Bouton d'ouverture du modal */}
      <div className="text-primary font-semibold btn btn-primary text-center" onClick={() => setIsOpen(true)}>
          Se connecter
      </div>
      

      {isOpen && !showRegisterModal && (
        <div className="fixed inset-0 z-40">
          {/* Arrière-plan flou */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div> */}

          {/* Contenu du modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 mt-80">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg w-96 max-w-full relative"
            >
              <h2 className="text-xl font-semibold text-center mb-6 dark:text-white">
                Connexion
              </h2>
              <div className="mb-4">
                <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full input mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-dark-light dark:border-gray-600 dark:text-white"
                  placeholder="Email..."
                />
              </div>
              <div className="mb-6">
                <label className="text-sm text-gray-600 dark:text-gray-300">Mot de passe</label>
                <input
                  type="password"
                  className="w-full input mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-dark-light dark:border-gray-600 dark:text-white"
                  placeholder="Mot de passe..."
                />
              </div>

              {/* Lien Mot de passe oublié */}
              <div className="mb-6 text-center">
                <div className="text-sm mb-2">
                  <a
                    href="#"
                    className="text-green-600 hover:underline dark:text-green-400"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>

              {/* Liens sous le formulaire */}
              <div className="mb-6 text-center">
                <div className="text-sm mb-2">
                  <a
                    onClick={openRegisterModal} // Ouvre le modal d'inscription
                    className="text-green-600 hover:underline dark:text-green-400 cursor-pointer"
                  >
                    Vous n'avez pas de compte ? Inscrivez-vous ici.
                  </a>
                </div>
              </div>

              {/* Bouton de connexion */}
              <div className="mt-6 flex justify-center">
                <button className="btn btn-primary w-full py-2 px-4 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                  Se connecter
                </button>
              </div>

              {/* Bouton de fermeture du modal */}
              <button
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                onClick={closeLoginModal} // Ferme les deux modals
              >
                &times;
              </button>
            </motion.div>
          </div>
        </div>
      )}

      {/* Affichage du RegisterModal si showRegisterModal est vrai */}
      {showRegisterModal && <RegisterModal closeModal={closeRegisterModal} />}
    </>
  );
};

export default LoginModal;
