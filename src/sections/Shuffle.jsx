import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, } from "framer-motion";

import Playlist from "../components/Playlist/Playlist";
import TextBlock from "../components/TextBlock/TextBlock";
import cursor_default from "../assets/cursor_default.svg";
import cursor_press from "../assets/cursor_press.svg";
import shuffle_default from "../assets/shuffle_default.svg";
import shuffle_press from "../assets/shuffle_press.svg";

import './Shuffle.css'


export default function Shuffle( { songsArray, slide } ) {
    const [cursor, setCursor] = useState(cursor_default);
    const [shuffle, setShuffle] = useState(shuffle_default);
    const [playlistIndex, setPlaylistIndex] = useState(0);
    const [playlistColor, setPlaylistColor] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCursor(cursor_press);
            setShuffle(shuffle_press);
            setTimeout(() => {
                setCursor(cursor_default);
                setShuffle(shuffle_default);
            }, 300);
            setPlaylistIndex(prevIndex => {
                let newIndex = prevIndex;
                while (newIndex === prevIndex) {
                    newIndex = Math.floor(Math.random() * 24);
                }
                return newIndex;
            });
            if (slide == 2) {
                setPlaylistColor(playlistIndex * 15);
            }
        }, 1500);
      
        return () => clearInterval(intervalId);
    }, [slide, playlistIndex]);

    return (
        <>
        {songsArray && (
            <div className="shuffle">
                <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>
                    <AnimatePresence mode="popLayout">
                        {
                            slide >= 0 && slide <=2 && 
                            <motion.div className="shuffle-playlist-container" 
                                initial={{ y: "100vh" }} 
                                animate={{ y: 0 }}
                            >
                                <Playlist 
                                    songs={songsArray[playlistIndex]} 
                                    title="Siguiente en cola"
                                    shuffle={shuffle} 
                                    cursor={cursor} 
                                    color={playlistColor} 
                                />    
                            </motion.div> 
                        }
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        { slide === 0 && <motion.aside className="shuffle-content-1"
                            initial={{ opacity: 1, y: "75vh" }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: "-75vh" }}
                        >
                            <TextBlock title="Es probable que reconozcas este botón">
                                Reproducir una playlist “en aleatorio” resulta muy conveniente al cocinar, lavar los platos o realizar cualquier labor rutinaria: tienes una idea de qué quieres escuchar, <strong>pero no te interesa mucho en qué orden</strong>. Simplemente quieres dejar algo sonando en el fondo.
                            </TextBlock>
                        </motion.aside> }
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        { slide === 1 && <motion.aside className="shuffle-content-2"
                            initial={{ opacity: 1, y: "75vh" }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: "-75vh" }}
                        >
                            <TextBlock>
                                En combinatoria, llamamos <strong>combinación</strong> a una colección cuyo orden de elementos no determina su identidad. Cada vez que escuchas una misma playlist en aleatorio, estás escuchando la misma combinación de canciones, no importa que estén en distinto orden.
                            </TextBlock>
                        </motion.aside> }
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        { slide === 2 && <motion.aside className="shuffle-content-3"
                            initial={{ y: "100vh" }}
                            animate={{ y: 0 }}
                        >
                            <TextBlock title= "A veces, el orden sí importa">
                                Imagina que terminaste de lavar platos y te diriges a una fiesta de la cual eres anfitrión. Para animar el ambiente, decides poner la misma playlist que estabas escuchando hace un rato. 
                                
                                Ya no puedes dejar nada al azar. Comenzar con una balada lenta puede no ser la mejor idea para encender una fiesta, pero tampoco quieres gastar todas tus canciones más energéticas apenas empezando. Una playlist de fiesta no solo debe tener buenas canciones, también debe fluir a la perfección.
                            </TextBlock>
                        </motion.aside> }
                    </AnimatePresence>
                </MotionConfig>
            </div>
        )}
        </>
    );

    
}