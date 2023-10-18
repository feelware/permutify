import TextBlock from "../components/TextBlock/TextBlock";
import multiplicacion from "../assets/multiplicacion.gif";

export default function Multi() {

    return (
    <main
        style={
            {
                display: "flex",
                gap: "100px",
                alignItems: "center",
                justifyContent: "center",
            }
        }
    >
        <TextBlock maxWidth="300">
            En cierto modo, contar permutaciones es como dibujar un árbol: cada posible elección se ramifica en todas las posibles elecciones que surgen producto de ella.
        </TextBlock>
        <img
            src={multiplicacion}
            alt="ejemplo ilustrativo del principio de multiplicación"
            style={{ width: "22%", height: "auto" }}
        />
        <TextBlock maxWidth="300">
            Esto se relaciona con el <strong>principio de multiplicación</strong>: el cual establece que el número de resultados posibles de un proceso es el producto del número de opciones que surgen en cada paso.
        </TextBlock>
    </main> 
    )
}