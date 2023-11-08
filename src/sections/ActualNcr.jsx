import TextBlock from "../components/TextBlock/TextBlock";

export default function ActualNpr() {
    return(
    <main className="npr"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <TextBlock>
        Esta expresión también puede generalizarse para un número n de elementos y otro número r de selecciones.
        </TextBlock>
        <div style={{display: "flex", gap: "100px"}}>
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
                <h2 className="black" >n!</h2>
                <div className="barra" key={"barra"}
                    style={{
                        height: "20px",
                        width: "100%",
                        backgroundColor: "black",
                        margin: "-30px 0",
                    }}
                />
                <h2 className="black" ><i>r</i>!(<i>n</i> - <i>r</i>)!</h2>
            </div>
            
            <div style={{display: "flex", gap: "4px"}}>
                    <h1 className="black" ><i>n</i></h1>
                    <h1 className="black" ><i>C</i></h1>
                    <h1 className="black" ><i>r</i></h1>
            </div>
        </div>
        <TextBlock>
        A dicha expresión se le suele llamar “combinaciones de n elementos tomados de r en r”, simbolizándose como se muestra a la derecha de la fórmula.
        </TextBlock>
    </main>
    )
}