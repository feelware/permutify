export default function Felicidades() {
    return(
    <main style={{
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}
    >
        <h1 className="strong logo" style={{maxWidth: "600px"}}>¡Felicitaciones por completar el recorrido!</h1>
        <p className="caption" style={{maxWidth: "600px"}}>
            Contar puede resultar difícil si no desarrollamos una intuición sobre <strong>el trasfondo</strong> de las fórmulas que aprendemos ¡Espero que este recorrido te haya acercado un poco más a la esencia de la combinatoria!
        </p>
    </main>
    )
}