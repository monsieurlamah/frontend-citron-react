import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { Helmet } from "react-helmet-async";
import {
  HomeTwo,
  HomeThree,
  About,
  AboutTwo,
  Services,
  ServicesTwo,
  Property,
  PropertyTwo,
  PropertyThree,
  PropertyFour,
  PropertyFive,
  PropertySix,
  Blog,
  BlogTwo,
  BlogThree,
  BlogFour,
  Contact,
  Portifolio,
  PortifolioTwo,
  Team,
  Faqs,
  PageNotFound,
  Home,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import PropertyDetailPage from "./pages/PropertyDetailPage";
function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div>
     <Helmet>
      {/* Titre de la page */}
        <title>Citronguinée | Promotion immobilière, Gestion, Construction & BTP</title>

        {/* Description de la page */}
        <meta
          name="description"
          content="Citronguinée est votre partenaire de confiance en promotion immobilière, construction, BTP, vente de terrains, maisons, appartements et gestion locative en République de Guinée."
        />

        {/* Meta pour Open Graph */}
        <meta property="og:title" content="Accueil - Citronguinée | Immobilier, Construction & BTP" />
        <meta
          property="og:description"
          content="Découvrez Citronguinée, plateforme de référence en promotion immobilière, construction, BTP, gestion locative et vente de biens en Guinée. Votre nouvelle vie commence ici !"
        />
        <meta property="og:image" content="https://example.com/image.png" />
        <meta property="og:url" content="https://www.citronguinee.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* Meta pour Twitter */}
        <meta name="twitter:title" content="Citronguinée | Promotion immobilière, Construction & BTP" />
        <meta
          name="twitter:description"
          content="Citronguinée vous accompagne dans vos projets immobiliers : terrains, maisons, Hôtel, appartements, gestion locative, BTP et plus encore."
        />
        <meta name="twitter:image" content="https://example.com/image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Meta pour l'application mobile */}
        <meta name="apple-mobile-web-app-title" content="Citronguinée" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#000000" />

        {/* Références supplémentaires pour le SEO */}
        <link rel="canonical" href="https://www.citronguinee.com" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Citronguinée, immobilier Guinée, promotion immobilière, vente de terrains, maison à vendre Guinée, construction bâtiment, BTP Guinée, appartements, gestion locative, logement social, résidence, projets immobiliers, immobilier Conakry, Réservation d'hôtels"
        />
      </Helmet>
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<HomeTwo />} />
          <Route path="/home-3" element={<HomeThree />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-2" element={<AboutTwo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-2" element={<ServicesTwo />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property-2" element={<PropertyTwo />} />
          <Route path="/property-3" element={<PropertyThree />} />
          <Route path="/property-4" element={<PropertyFour />} />
          <Route path="/property-5" element={<PropertyFive />} />
          <Route path="/property-6" element={<PropertySix />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-2" element={<BlogTwo />} />
          <Route path="/blog-3" element={<BlogThree />} />
          <Route path="/blog-4" element={<BlogFour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/portifolio-2" element={<PortifolioTwo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<PropertyDetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <NewsLetter />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
