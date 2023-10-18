import { motion } from "framer-motion";

import Playlist from "../components/Playlist/Playlist";
import TextBlock from "../components/TextBlock/TextBlock";

import "./Possibles.css";

const marqueeVariants = {
  animate: {
    y: ["-10000px", "600px"],
    transition: {
      y: {
        duration: "3.5",
        ease: "easeInOut",
      },
    },
  },
};

function Possibles ( {songsArray} ) {
  return (
    <div className="marquee">
    <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
    >   

      <div className="marquee-content">
          <div className="carousel-songs">
              {songsArray.map((songs, i) => (
                <Playlist key={i} songs={songs} width="400px" color={250 + i*15} title={"Playlist " + (i + 1)} />
                ))}
          </div>
          <TextBlock className="marquee-desc" maxWidth="600" title="¿De cuántas formas puedo ordenar mi playlist?"> Esta pregunta es importante, pues de esto dependerá cuánto tiempo te tome encontrar el orden perfecto entre todos aquellos posibles. A estos posibles ordenamientos los llamamos <strong>permutaciones</strong>. El número de permutaciones que puedes obtener de una sola combinación crece más y más rápido con cada nuevo elemento a tomar en cuenta. </TextBlock>
      </div>

    </motion.div>
    </div>
  );
}

export default Possibles;