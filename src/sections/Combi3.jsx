import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, } from "framer-motion";

import MiniPlaylist from "../components/MiniPlaylist/MiniPlaylist";
import TextBlock from "../components/TextBlock/TextBlock";

import './Shuffle.css'
import getPermutations from "../services/math";


export default function Combi2( {mPs, slide} ) {
    console.log(mPs)
    const [mPi, setMPi] = useState(0);
    const [permus, setPermus] = useState(getPermutations(mPs[mPi]));
    
    useEffect(() => {
        if (slide == 24) {
            console.log("mPs length: ", mPs.length)
            setTimeout(() => {
                setMPi(mPi > (mPs.length - 3) ? 0 : mPi + 1)
                console.log("mPi: ", mPi)
                setPermus(getPermutations(mPs[mPi]));
            }, 2000);
        }
    }, [slide, mPi, mPs]);

    return (
        <>
        {permus && (
            <div className="shuffle">
                <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>
                    <AnimatePresence mode="popLayout">
                        <motion.aside className="shuffle-content-1"
                            initial={{ opacity: 1, y: "75vh" }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: "-75vh" }}
                        >
                            <TextBlock>
                            ¿Qué tal si queremos tres canciones? ¿Cuántas veces se repetiría cada combinación? ¿Dos veces? ¿Tres?
                            </TextBlock>


                            <TextBlock>
                            En el caso anterior, cada combinación se repitía dos veces porque solo existen dos formas de ordenar sus dos elementos. Según vimos, existen r! formas de ordenar r elementos distintos, por lo que en este caso, cada combinación se repetirá 3! = 6 veces.
                            </TextBlock>

                            <TextBlock>
                            Así, tenemos 50P3 / 6 = 19600 formas de combinar 50 canciones tomadas de tres en tres.
                            </TextBlock>
                        </motion.aside>
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        {
                            <motion.div style={{ display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "10px" }}
                                initial={{ y: "100vh" }} 
                                animate={{ y: 0 }}
                            >
                                <MiniPlaylist 
                                    songs={permus[0]}
                                    title="Primer ordenamiento"
                                />
                                <MiniPlaylist 
                                    songs={permus[1]}
                                    title="Segundo ordenamiento"
                                />
                                <MiniPlaylist 
                                    songs={permus[2]}
                                    title="Tercer ordenamiento"
                                />
                                <MiniPlaylist
                                    songs={permus[3]}
                                    title="Cuarto ordenamiento"
                                />
                                <MiniPlaylist
                                    songs={permus[4]}
                                    title="Quinto ordenamiento"
                                />
                                <MiniPlaylist
                                    songs={permus[5]}
                                    title="Sexto ordenamiento"
                                />
                            </motion.div> 
                        }
                    </AnimatePresence>
                </MotionConfig>
            </div>
        )}
        </>
    );

    
}