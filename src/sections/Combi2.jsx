import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, } from "framer-motion";

import Playlist from "../components/Playlist/Playlist";
import TextBlock from "../components/TextBlock/TextBlock";

import './Shuffle.css'
import getPermutations from "../services/math";


export default function Combi2( {mPs, slide} ) {
    console.log(mPs)
    const [mPi, setMPi] = useState(0);
    const [permus, setPermus] = useState(getPermutations(mPs[mPi].slice(0, 2)   ));
    
    useEffect(() => {
        if (slide == 23) {
            console.log("mPs length: ", mPs.length)
            setTimeout(() => {
                setMPi(mPi > (mPs.length - 3) ? 0 : mPi + 1)
                console.log("mPi: ", mPi)
                setPermus(getPermutations(mPs[mPi].slice(0, 2)));
            }, 2000);
        }
    }, [slide, mPi]);

    return (
        <>
        {permus && (
            <div className="shuffle">
                <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>
                    <AnimatePresence mode="popLayout">
                        { slide === 22 && <motion.aside className="shuffle-content-1"
                            initial={{ opacity: 1, y: "75vh" }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: "-75vh" }}
                        >
                            <TextBlock>
                            He dejado para el final una pregunta que, en un principio, parecía más sencilla de lo que es ¿Qué hacemos cuando no nos importa el orden de los elementos? En otras palabras ¿Cómo contamos <strong>combinaciones</strong>?
                            </TextBlock>


                            <TextBlock>
                            Hace un momento vimos que existen 2450 formas de permutar 50 canciones tomadas de dos en dos (50P2).
                            Si analizamos detenidamente cada una de estas formas, notaremos que algunas son esencialmente <strong>la misma combinación de elementos, pero en distinto orden</strong>.
                            </TextBlock>

                            <TextBlock>
                            Considera, por ejemplo, estos dos ordenamientos ¿No son acaso la misma combinación?
                            </TextBlock>
                        </motion.aside> }
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        { slide === 23 && <motion.aside className="shuffle-content-2"
                            initial={{ opacity: 1, y: "75vh" }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: "-75vh" }}
                        >
                            <TextBlock>
                            Ocurre lo mismo con cada par de canciones.
                            </TextBlock>

                            <TextBlock>
                            Efecivamente, al contar todas las permutaciones tomadas de dos en dos, estamos contando cada combinación dos veces. Si queremos contar el total de combinaciones, <strong>debemos descartar estas redundancias</strong>, para lo cual, en este caso, basta con dividir entre dos.
                            </TextBlock>

                            <TextBlock>
                            Tenemos entonces 2450 / 2 = 1225 formas de combinar 10 canciones tomadas de dos en dos.
                            </TextBlock>
                        </motion.aside> }
                    </AnimatePresence>
                    <AnimatePresence mode="popLayout">
                        {
                            <motion.div style={{ display: "flex", gap: "20px", flexDirection: "column", alignItems: "center", justifyContent: "center", }}
                                initial={{ y: "100vh" }} 
                                animate={{ y: 0 }}
                            >
                                <Playlist 
                                    songs={permus[0]}
                                    title="Primer ordenamiento"
                                    color="220"
                                />
                                <Playlist 
                                    songs={permus[1]}
                                    title="Segundo ordenamiento"
                                    color="220"
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