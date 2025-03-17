import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { useState } from "react";

const PropertyDetailPage = ({
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  images, // Liste des images de la propriété
  basis,
  videoUrl, // URL de la vidéo
  latitude, // Latitude pour la carte
  longitude, // Longitude pour la carte
}) => {
  const [currentImage, setCurrentImage] = useState([images]); // L'image principale est la première de la liste

  return (
    <div className="container mx-auto p-6">
      {/* Image Carrousel */}
      <div className="relative">
        {/* Image principale */}
        <img
          src={currentImage}
          alt={name}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-4 left-4 text-white bg-black/60 p-3 rounded-lg">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">{location}</p>
        </div>
      </div>

      {/* Miniatures des images */}
      <div className="mt-4 flex gap-x-4 overflow-x-auto py-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setCurrentImage(image)} // Changer l'image principale en cliquant sur la miniature
          >
            <img
              src={image}
              alt={`Property Image ${index + 1}`}
              className="w-[100px] h-[70px] object-cover rounded-lg transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Visite vidéo</h2>
        <div className="relative">
          <iframe
            width="100%"
            height="500"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Property Video"
          ></iframe>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Détails de la Propriété</h2>
          <div className="flex mb-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className="text-sm">{number_of_beds} lits</p>
            </div>
            <div className="flex-align-center gap-x-2 ml-6">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className="text-sm">{number_of_bathrooms} salles de bains</p>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiMapAlt />
              </div>
              <p className="text-sm">{dimensions} m²</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold">Prix:</p>
            <h2 className="text-3xl font-bold text-primary">${price}</h2>
          </div>
        </div>

        {/* Right Section: Google Map */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Emplacement</h2>
          <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAP_API_KEY&q=${latitude},${longitude}`}
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Property Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section: Additional Information */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">À propos de cette propriété</h2>
        <p className="text-gray-600">
          Cette propriété est idéale pour les personnes cherchant à investir dans un bien
          immobilier de qualité. Située dans un quartier calme et bien desservi, elle est proche
          des commodités locales, telles que des écoles, des magasins et des restaurants. Elle
          bénéficie d'une excellente luminosité et offre de vastes espaces intérieurs et extérieurs.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <button className="btn btn-primary">Contactez le propriétaire</button>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
