import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Playlist from "../components/Playlist/Playlist";
import TextBlock from "../components/TextBlock/TextBlock";

import "./Select.css";

export default function Select( { songs } ) {
    const [playlistColor, setPlaylistColor] = useState(0);
    const [playlistIndex, setPlaylistIndex] = useState(0);
    const [playlistSelected, setPlaylistSelected] = useState([false, false, false, false]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let newSelected = Array(4).fill(true);
            newSelected[Math.floor(Math.random() * 4)] = false;
            while (JSON.stringify(newSelected) === JSON.stringify(playlistSelected)) {
                newSelected = Array(4).fill(true);
                newSelected[Math.floor(Math.random() * 4)] = false;
            }
            setPlaylistSelected(newSelected);
            setPlaylistColor(Math.floor(Math.random() * 360));
            setPlaylistIndex(prevIndex => {
                let newIndex = prevIndex;
                while (newIndex === prevIndex) {
                    newIndex = Math.floor(Math.random() * 24);
                }
                return newIndex;
            });
            console.log("newSelected: ", newSelected)
        }, 1500);
      
        return () => clearInterval(intervalId);
    }, [playlistSelected]);

    return (
    <div className="select">
        <motion.div className="select-playlist-container">
            <Playlist 
                songs={songs[playlistIndex]}
                selected={playlistSelected}
                title="Favoritas"
                desc="3 seleccionadas"
                width="450px"
                color={playlistColor}
            />    
        </motion.div> 
        <TextBlock title="Permutando solo algunas">
        Si eres como yo, es probable que tu colección de favoritas ascienda a las cientas de canciones. Idealmente, uno quisiera considerar todas como opciones para la fiesta, pero en ningún lugar de la tierra la noche es lo suficientemente larga para dar abasto a 637 canciones. Esto es un problema recurrente en la combinatoria, a veces uno desea saber cuántas formas hay de ordenar NO todo un conjunto, sino <strong>una selección de sus elementos</strong>.
        </TextBlock>
    </div>
    );

    
}