import { useState, useEffect } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import getSongsArrays from "./services/spotify";
import getPermutations from "./services/math";

import Shuffle from "./sections/Shuffle";
import TwoPlaylists from "./sections/TwoPlaylists";
import Trees from "./sections/Trees";
import Multi from "./sections/Multi";
import Factorial from "./sections/Factorial";
import Select from "./sections/Select";
import Npr from "./sections/Npr";
import ActualNpr from "./sections/ActualNpr";
import ActualNpr2 from "./sections/ActualNpr2";

import './Journey.css';
import Felicidades from "./sections/Felicidades";
import PlaylistCarousel from "./sections/PlaylistCarousel";

export default function Journey( {params} ) {
    const [mainPlaylist, setMainPlaylist] = useState(null);
    // const [mP1, setMP1] = useState(null); // mP = mini playlist
    const [mP2, setMP2] = useState(null);
    // const [mP3, setMP3] = useState(null);
    // const [mP4, setMP4] = useState(null);
    const [slide, setSlide] = useState(0);

    const SLIDES = 27;
    
    useEffect(() => {
        (async function fetchSongs() {
            const topSongs = await getSongsArrays(params.access_token);
            setMainPlaylist(getPermutations(topSongs[0]));
            // setMP1(topSongs[1]);
            setMP2(topSongs[2]);
            // setMP3(topSongs[3]);
            // setMP4(topSongs[4]);
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
                        <motion.div initial={{ y: "900px" }} animate={{ y: 0 }} exit={{ y: "1600px" }} >
                            <Shuffle songsArray={mainPlaylist} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                {/* <AnimatePresence mode="popLayout">
                    {
                        slide == 3 &&
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ y: "1000px" }} >
                            <Possibles songsArray={mainPlaylist} slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence> */}
                <AnimatePresence mode="popLayout">
                {
                    slide == 3 &&
                    <motion.div initial={{ y: "-1080px" }} animate={{ y: 0 }} exit={{ y: "1080px" }} >
                        <PlaylistCarousel songsArray={mainPlaylist} />
                    </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide >= 4 && slide <= 6 &&
                        <motion.div initial={{ y: "-1000px" }} animate={{ y: 0 }} exit={{ y: "1600px" }} >
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
                        <motion.div initial={{ x: "1600px" }} animate={{ x: 0 }} exit={{ y: "-1080px" }} >
                            <Multi />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide >= 11 && slide <= 13 && 
                        <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                            <Factorial slide={slide} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                    {
                        slide == 14 &&
                        <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                            <Select songs={mainPlaylist} />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                {
                    slide >= 15 && slide <= 19 &&
                    <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                        <Npr slide={slide} />
                    </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                {
                    slide == 20 &&
                    <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                        <ActualNpr />
                    </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                {
                    slide == 21 &&
                    <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                        <ActualNpr2 />
                    </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                {
                    slide == 22 &&
                    <motion.div initial={{ y: "1080px" }} animate={{ y: 0 }} exit={{ y: "-1080px" }} >
                        <Felicidades />
                    </motion.div>
                }
                </AnimatePresence>
{/*
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
            {/* <p >{slide + 1} / {SLIDES}</p> */}
        </main>
    );
}