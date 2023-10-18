import { useEffect } from "react";
import { motion, MotionConfig, AnimatePresence, useAnimate } from "framer-motion";

import './Trees.css'

import TextBlock from "../components/TextBlock/TextBlock";

export default function Trees ( {songs, slide} ) {
    const [firstRow, animateFirstRow] = useAnimate();


    useEffect(() => {   
        if (slide == 8) {
            animateFirstRow(firstRow.current, { gap: ["50px;", "300px"]}, { duration: 1.5, ease: "easeInOut" });
        }
    });

    return (
        <main className="trees">

            <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>            
            <AnimatePresence mode="popLayout">
            {
                slide == 8 &&
                <motion.div className="trees-text-frame-2" key={"trees-text-frame-2"}
                    initial={{ y: "-1080px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: "-960px", opacity: 0 }}
                >
                    <div className="second-row-captions">
                        <TextBlock maxWidth="300">Si la primera canción fue <i>{songs[2].name}</i>, la segunda puede ser o bien <i>{songs[0].name}</i> o <i>{songs[1].name}</i>.</TextBlock>
                        <TextBlock maxWidth="300">Si la primera canción fue <i>{songs[0].name}</i>, la segunda puede ser o bien <i>{songs[1].name}</i> o <i>{songs[2].name}</i>.</TextBlock> 
                        <TextBlock maxWidth="300">Si la primera canción fue <i>{songs[1].name}</i>, la segunda puede ser o bien <i>{songs[0].name}</i> o <i>{songs[2].name}</i>.</TextBlock>
                    </div>
                </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence mode="popLayout">                
                {
                    slide == 9 &&
                    <motion.div className="trees-text-frame-3" key={"trees-text-frame-3"}
                        initial={{ x: "960px", opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                    >
                        <TextBlock> 
                        Habiendo llegado al acto final de esta (muy corta) noche, el único candidato a canción final es, en cada caso, la que aún no hemos elegido. Tenemos un total de seis posibles playlists. ¿Te preguntas de donde viene este número?
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            </MotionConfig>

            <div className="rows">  
                {
                    slide >= 9 &&
                    <motion.div key={"third-row"} className="third-row" 
                        initial={{ x: "960px", opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        layout
                    >
                        <div className="third-row-child">
                            <img key="third-row-song-1" src={songs[1].cover} alt={"cover art of " + songs[1].name} />
                            <img key="third-row-song-2" src={songs[2].cover} alt={"cover art of " + songs[2].name} />
                        </div>
                        <div className="third-row-child">
                            <img key="third-row-song-0" src={songs[0].cover} alt={"cover art of " + songs[0].name} />
                            <img key="third-row-song-2" src={songs[2].cover} alt={"cover art of " + songs[2].name} />
                        </div>
                        <div className="third-row-child">
                            <img key="third-row-song-0" src={songs[0].cover} alt={"cover art of " + songs[0].name} />
                            <img key="third-row-song-1" src={songs[1].cover} alt={"cover art of " + songs[1].name} />
                        </div>
                    </motion.div>
                }

                {
                    slide >= 8 &&
                    <motion.div key={"sec-row"} className="sec-row" 
                        initial={{ y: "-960px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        layout
                    >
                        <div className="sec-row-child">
                            <img key="sec-row-song-2" src={songs[2].cover} alt={"cover art of " + songs[2].name} />
                            <img key="sec-row-song-1" src={songs[1].cover} alt={"cover art of " + songs[1].name} />
                        </div>
                        <div className="sec-row-child">
                            <img key="sec-row-song-2" src={songs[2].cover} alt={"cover art of " + songs[2].name} />
                            <img key="sec-row-song-0" src={songs[0].cover} alt={"cover art of " + songs[0].name} />
                        </div>
                        <div className="sec-row-child">
                            <img key="sec-row-song-1" src={songs[1].cover} alt={"cover art of " + songs[1].name} />
                            <img key="sec-row-song-0" src={songs[0].cover} alt={"cover art of " + songs[0].name} />
                        </div>
                    </motion.div>
                }

                {
                    slide >= 7 &&
                    <motion.div ref={firstRow} key={"main-row"} className="main-row" 
                        initial={{ y: "-960px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        layout
                    >
                        <img key="main-row-song-0" src={songs[0].cover} alt={"cover art of " + songs[0].name} />
                        <img key="main-row-song-1" src={songs[1].cover} alt={"cover art of " + songs[1].name} />
                        <img key="main-row-song-2" src={songs[2].cover} alt={"cover art of " + songs[2].name} />
                    </motion.div>
                }
            </div>

            <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>
                <AnimatePresence mode="popLayout">                
                {
                    slide == 7 &&
                    <motion.div className="trees-text-frame-1" key={"trees-text-frame-1"}
                        initial={{ y: "-1080px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "1080px", opacity: 0 }}
                    >
                        <TextBlock> Una mejor forma de visualizar el conteo de playlists es abordarla como una decisión paso a paso. Empezemos con la primera canción de la noche. Tenemos la libertad de elegir cualquiera de nuestra colección de favoritos, pero lo cierto es que ya no podremos elegirla como segunda canción. Por practicidad, asumiremos que nuestra colección consta de solo tres canciones. </TextBlock>
                    </motion.div>
                }
                </AnimatePresence>
            </MotionConfig>

        </main>
    )
}
