import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-bold capitalize md:text-5xl"
        >
          Votre nouvelle vie <br /> commence ici !
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="pl-3 mt-5 border-l-4 border-primary"
        >
          <p>
            Trouvez rapidement un professionnel qualifié pour vos projets grâce
            à notre service de mise en relation client-prestataire.
          </p>
        </motion.div>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 btn btn-primary"
        >
          <Link to="mise-en-relation">Mise en relation</Link>
        </motion.button>

        <div className="mt-6 text-center flex-align-center gap-x-6">
          <div>
            <h1 className="text-2xl font-bold">
              12k <span className="text-sm text-primary">+</span>
            </h1>
            <p>Projets demandés</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              15k <span className="text-sm text-primary">+</span>
            </h1>
            <p>Projets réalisés</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              100K <span className="text-sm text-primary">+</span>
            </h1>
            <p>Clients satisfaits</p>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem]">
        <img src="/images/hero-4.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
