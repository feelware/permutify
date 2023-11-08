import TextBlock from "../components/TextBlock/TextBlock";
import Carousel from "../components/Carousel/Carousel";


export default function PlaylistCarousel( {songsArray} ) {
    return(
        <main className="playlist-carousel"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                overflow: "hidden",
            }}
        >
            <Carousel songs={songsArray} />

            <TextBlock maxWidth="600" title="¿De cuántas formas puedo ordenar mi playlist?"
                style = {{
                    padding: "0 100px"
                }}
            > 
            Esta pregunta es importante, pues de esto dependerá cuánto tiempo te tome encontrar el orden perfecto entre todos aquellos posibles. A estos posibles ordenamientos los llamamos <strong>permutaciones</strong>. El número de permutaciones que puedes obtener de una sola combinación crece más y más rápido con cada nuevo elemento a tomar en cuenta. 
            </TextBlock>
        </main>
    )
}