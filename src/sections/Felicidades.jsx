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
            Contar puede resultar difícil si no desarrollamos una intuición sobre el por qué de las fórmulas que aprendemos. Espero que este recorrido te haya acercado un poco más a la esencia de la combinatoria. Si deseas seguir aprendiendo, dirígete a la sección de recursos de la página principal.
        </p>
    </main>
    )
}