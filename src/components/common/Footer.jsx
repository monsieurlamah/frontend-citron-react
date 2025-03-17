/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <img
                src="/logo.png"
                alt="Logo Citron Guinée"
                className="h-10 w-auto object-contain"
              />
              <h1 className="hidden md:hidden">Citron Guinée</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Citron Guinée, votre partenaire en promotion immobilière,
                construction, vente et gestion locative. Votre nouvelle vie
                commence ici !
              </p>
              <div className="gap-5 my-6 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Nos Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">Promotion immobilière</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Construction BTP</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Vente et location</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Gestion locative</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Conseils et accompagnement</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Liens rapides</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> À propos de nous</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Conditions d'utilisation</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Liste de souhaits</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Portifolio</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Support client</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Informations</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">Notre Histoire</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Nos Valeurs</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Notre Mission</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Conditions Générales</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Politique de Confidentialité</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="text-sm text-muted">
              Abonnez-vous pour être le premier informé des mises à jour. Entrez
              votre e-mail
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">S'abonner</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Créé par <span className="text-primary">Citron</span> | Tous droits
          réservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
