import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import TextBlock from "../components/TextBlock/TextBlock";

export default function Factorial( {slide} ) {
    return (
        <main className="factorial"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
        <MotionConfig transition={{ duration: 1.5, type: "spring", bounce: 0 }}>            
            <AnimatePresence mode="popLayout">                
                {
                    slide == 11 &&
                    <motion.div className="factorial-texto-1" key={"factorial-texto-1"}
                        exit={ {opacity: 0} }
                    >
                        <TextBlock> 
                            En nuestro caso, nuestras opciones empiezan siendo nuestra colección entera, disminuyendo de uno en uno con cada canción tomada, hasta llegar a la unidad.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="popLayout">                
                {
                    slide == 11 &&
                    <motion.div className="factorial-texto-1" key={"factorial-texto-1"}
                        exit={ {opacity: 0} }
                    >
                        <div style={{display: "flex", gap: "8px"}}>
                            <h2 className="black" style={{color: "#00B2FF"}}>(3)</h2>
                            <h2 className="black" style={{color: "#00D1FF"}}>(2)</h2>
                            <h2 className="black" style={{color: "#00FFC2"}}>(1)</h2>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="popLayout">                
                {
                    slide >= 12 &&
                    <motion.div className="factorial-texto-1" key={"factorial-texto-1"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layout
                    >
                        <TextBlock> 
                            Si bien, al inicio planteamos una colección de tan solo tres canciones, este razonamiento puede generalizarse a colecciones de cualquier tamaño n.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="popLayout">                
                {
                    slide >= 12 &&
                    <motion.div className="factorial-texto-1" key={"factorial-texto-1"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layout
                    >
                        <div style={{display: "flex", gap: "8px"}}>
                            <h2 className="black">(<i>n</i>)</h2>
                            <h2 className="black">(<i>n</i>-1)</h2>
                            <h2 className="black">(<i>n</i>-2)</h2>
                            <h2 className="black">...</h2>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="popLayout">                
                {
                    slide >= 13 &&
                    <motion.div className="factorial-texto-2" key={"factorial-texto-2"}
                        initial={{ y: "250px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        layout
                    >
                        <div style={{display: "flex", gap: "40px", alignItems: "center"}}>
                            <TextBlock>
                                En matemática, denominamos a este tipo de productos como <strong>factorial</strong> de n, siendo n el número inicial de la cadena Tenemos así que el total de permutaciones de cualquier conjunto de elementos únicos (como una playlist) equivale al factorial de su número de elementos.
                            </TextBlock>
                            <h2 className="black" style={{ fontSize: "200px", lineHeight: "100px" }}><i>n!</i></h2>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </MotionConfig>
        </main>
    )
}