import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import Playlist from "../components/Playlist/Playlist";
import MiniPlaylist from "../components/MiniPlaylist/MiniPlaylist";
import TextBlock from "../components/TextBlock/TextBlock";
import getPermutations from "../services/math";

import './TwoPlaylists.css';

export default function TwoPlaylists( {songs, slide} ) {
    const permutations = getPermutations(songs);

    return(
        <main className="two-playlists">
            <MotionConfig transition={{ duration: 1, type: "spring", bounce: 0 }}>
            <AnimatePresence mode="popLayout">
            {
                slide == 4 &&
                <motion.section className="two-playlists-frame-1"
                    exit={{ y: "500px", opacity: 0}}
                >
                    <Playlist title="Playlist 1" color="250" width="400px" desc="Una sola canción" songs={[songs[0]]}></Playlist>
                    <TextBlock>Para visualizar este fenómeno, empecemos considerando una playlist con una sola canción. Lógicamente, dicha playlist puede ordenarse de una sola manera: dejándola como está.</TextBlock>
                </motion.section>
            }
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
            {
                slide == 5 &&
                <motion.section className="two-playlists-frame-2"
                    initial={{ y: "-750px", opacity: 0}}
                    animate={{ y: 0, opacity: 1}}   
                    exit={{ y: "750px", opacity: 0}}
                >
                    <div className="two-playlists-for-real">
                        <Playlist title="Playlist 1" color="250" width="400px" desc="Dos canciones" songs={[songs[0], songs[1]]}></Playlist>
                        <Playlist title="Playlist 2" color="300" width="400px"  desc="Dos canciones" songs={[songs[1], songs[0]]}></Playlist>
                    </div>
                    <TextBlock maxWidth="300">Añade una segunda canción y ya tienes dos permutaciones. Primero <i>{songs[0].name}</i> y luego <i>{songs[1].name}</i>, o viceversa.</TextBlock>
                </motion.section>
            }
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
            {
                slide == 6 &&
                <motion.section className="two-playlists-frame-3"
                    initial={{ y: "-500px", opacity: 0}}
                    animate={{ y: 0, opacity: 1}}   
                    exit={{ y: "500px", opacity: 0}}
                >
                    {/* map each permutation to a miniplaylist */}
                    <div className="six-permutations">
                        {permutations.map((permutation, index) => (
                            <MiniPlaylist key={index} title={"Playlist " + (index + 1)} songs={permutation} />
                        ))}
                    </div>
                    <TextBlock>Una canción: una permutación. Dos canciones: dos permutaciones. Con tres canciones, las cosas empiezan a descontrolarse un poco. Tenemos dos permutaciones que empiezan con <i>{songs[0].name}</i>, dos con <i>{songs[1].name}</i> y dos con <i>{songs[2].name}</i>.</TextBlock>
                </motion.section>
            }
            </AnimatePresence>
            </MotionConfig>
        </main>
    )
}