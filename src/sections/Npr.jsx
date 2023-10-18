import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import TextBlock from "../components/TextBlock/TextBlock";

export default function Npr( {slide} ) {

    return (
        <main className="npr"
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
                    slide == 15 &&
                    <motion.div className="npr-texto-1" key={"npr-texto-1"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                        layout
                    >
                        <TextBlock> 
                        Este tipo de problemas también convienen ser analizados paso por paso, en particular, usando el principio de multiplicación. Imagina que separas 50 canciones de tu colección como candidatos para la fiesta, pero por motivos de fuerza mayor, la reunión solo da abasto para tocar una canción. Entre 50 opciones podemos elegir solo una, claramente tenemos 50 posibilidades en total.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence mode="popLayout">                
                {
                    slide == 16 &&
                    <motion.div className="npr-texto-2" key={"npr-texto-2"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                        layout
                    >
                        <TextBlock> 
                        ¿Y si tuvieramos tiempo para dos? Bueno, tenemos 50 opciones para la primera, y habiendo gastado una, quedan 49 opciones para la segunda.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence mode="popLayout">                
                {
                    slide == 17 &&
                    <motion.div className="npr-texto-3" key={"npr-texto-3"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: "-500px", opacity: 0}}
                        layout
                    >
                        <TextBlock> 
                        ¿Qué tal si tuvieramos tiempo para diez canciones?Tendríamos 50 opciones para la primera, 49 para la segunda, 48 para la tercera, y así hasta la décima canción, para la cual tendríamos 41 opciones.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            <div className="fraction"
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }
                }
            >                
                <div className="numerador" style={{display: "flex", gap: "8px"}}>
                    <AnimatePresence mode="popLayout">                
                        {
                            slide >= 15 && slide <= 19 &&
                            <motion.div className="50" key={"50"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                layout
                            >
                                <h2 className="black">(50)</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide >= 16 && slide <= 19 &&
                            <motion.div className="49" key={"49"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}
                                layout
                            >
                                <h2 className="black">(49)</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide == 16 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="2450" key={"2450"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ y: "500px", opacity: 0}}  
                                layout
                            >
                                <h2 className="black">=</h2>
                                <h2 className="black">2450</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide >= 17 && slide <= 19 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="4841" key={"4841"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }} 
                                layout
                            >
                                <h2 className="black">(48)</h2>
                                <h2 className="black">...</h2>
                                <h2 className="black">(41)</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide == 17 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="=41016" key={"41016"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ y: "500px", opacity: 0}}  
                                layout
                            >
                                <h2 className="black">=</h2>
                                <h2 className="black">4</h2>
                                <h2 className="black">·</h2>
                                <h2 className="black">10¹⁶</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide == 18 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="4039" key={"4039"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ y: "-500px", opacity: 0}}  
                                layout
                            >
                                <h2 className="black">(40)</h2>
                                <h2 className="black">(39)</h2>
                                <h2 className="black">...</h2>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">                
                        {
                            slide == 19 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="4039" key={"4039"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}
                                layout
                            >
                                <h2 style={{color: "#5278FF"}} className="black">(40)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(39)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">...</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(2)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(1)</h2>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="popLayout">                
                    {
                        slide >= 19 && slide <= 20 &&
                        <motion.div className="barra" key={"barra"}
                            initial={{ x: "1920px" , opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            layout
                            style={{
                                height: "20px",
                                width: "100%",
                                backgroundColor: "black",
                                margin: "-30px 0",
                            }}
                        />
                    }
                </AnimatePresence>

                <div className="denominador" style={{display: "flex", gap: "8px"}}>
                    <AnimatePresence mode="popLayout">                
                        {
                            slide == 19 &&
                            <motion.div style={{display: "flex", gap: "8px"}} className="4039" key={"4039"}
                                initial={{ opacity: 0, x: "1920px" }}
                                animate={{ opacity: 1, x: 0 }}  
                                layout
                            >
                                <h2 style={{color: "#5278FF"}} className="black">(40)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(39)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">...</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(2)</h2>
                                <h2 style={{color: "#5278FF"}} className="black">(1)</h2>
                            </motion.div>
                        }
                    </AnimatePresence>


                </div>
            <AnimatePresence mode="popLayout">                
                {
                    slide == 18 &&
                    <motion.div className="npr-texto-3" key={"npr-texto-3"}
                        initial={{ y: "500px", opacity: 0 }}
                        animate={{ y: "0", opacity: 1 }}
                        exit={{ x: "-800px", opacity: 0}}
                        layout
                    >
                        <TextBlock> 
                        Fíjate en lo que ha sucedido, hemos multiplicado sucesivamente partiendo desde 50, tal como lo haríamos con las permutaciones totales, pero nos detuvimos apenas llegamos al décimo factor de la cadena. Esto es muy similar a cortar con una tijera justo después del 41, quedándonos con los primeros 10 factores y desechando los 40 restantes.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="popLayout">                
                {
                    slide == 19 &&
                    <motion.div className="npr-texto-3" key={"npr-texto-3"}
                        initial={{ x: "800px", opacity: 0 }}
                        animate={{ x: "0", opacity: 1 }}
                        layout
                    >
                        <TextBlock> 
                        Este “corte” se puede representar matemáticamente como una división entre toda la cadena y sus últimos 40 elementos, de tal forma que estos últimos se cancelen.
                        </TextBlock>
                    </motion.div>
                }
            </AnimatePresence>
            </div>
        </MotionConfig>
        </main>
    )
}