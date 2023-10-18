import { useState, useEffect } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import getSongsArrays from "./services/spotify";
import getPermutations from "./services/math";

import Shuffle from "./sections/Shuffle";
import Possibles from "./sections/Possibles";
import TwoPlaylists from "./sections/TwoPlaylists";
import Trees from "./sections/Trees";
import Multi from "./sections/Multi";

import './Journey.css';

export default function Journey( {params} ) {
    const [mainPlaylist, setMainPlaylist] = useState(null);
    const [mP1, setMP1] = useState(null); // mP = mini playlist
    const [mP2, setMP2] = useState(null);
    const [mP3, setMP3] = useState(null);
    const [mP4, setMP4] = useState(null);
    const [slide, setSlide] = useState(0);

    const SLIDES = 27;
    
    useEffect(() => {
        (async function fetchSongs() {
            const topSongs = await getSongsArrays(params.access_token);
            setMainPlaylist(getPermutations(topSongs[0]));
            setMP1(topSongs[1]);
            setMP2(topSongs[2]);
            setMP3(topSongs[3]);
            setMP4(topSongs[4]);
        })();

        const handleKeyPress = (event) => {
            if (event.key === 'd') {
                addSlide();
            } else if (event.key === 'a') {
                subtractSlide();
            }
        };

        const addSlide = () => {
            setSlide(prevIndex => {
                const newIndex = prevIndex + 1;
                return newIndex > (SLIDES - 1) ? (SLIDES - 1) : newIndex;
            });
        };
        
        const subtractSlide = () => {
            setSlide(prevIndex => {
                const newIndex = prevIndex - 1;
                return newIndex < 0 ? 0 : newIndex;
            });
        };

        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [params.access_token]);

    return (
        <main className="journey">
            <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>
                <AnimatePresence mode="popLayout">
                    {
                        slide >= 0 && slide <=2 &&
                        <motion.div initial={{ y: "900px" }} animate={{ y: 0 }} exit={{ x: "-1600px" }} >
                            <Shuffle songsArray={mainPlaylist} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide == 3 &&
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ x: "-1600px" }} >
                            <Possibles songsArray={mainPlaylist} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide >= 4 && slide <= 6 &&
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ x: "-1600px" }} >
                            <TwoPlaylists songs={mP2} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide >= 7 && slide <= 9 &&
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ x: "-1600px" }} >
                            <Trees songs={mP2} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide == 10 &&
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ x: "-1600px" }} >
                            <Multi />
                        </motion.div>
                    }
                </AnimatePresence>
{/*
                {slide >= 11 && slide <= 13 && (
                    <Factorial slide={slide} />
                )}
                {slide === 14 && (
                    <Select songs={mainPlaylist[0]} slide={slide} />
                )}
                {slide >= 15 && select <= 21 && (
                    <Npr slide={slide} />
                )}
                {slide >= 22 && slide <= 24 && (
                    <Combi songs={[mP1, mP2, mP3, mP4]} slide={slide} />
                )}
                {slide === 25 && (
                    <Ncr slide={slide} />
                )}
                {slide === 26 (
                    <End slide={slide} />
                )} 
                */}
            </MotionConfig>
            {/* <p className="slide-counter">{slide + 1} / {SLIDES}</p> */}
        </main>
    );
}