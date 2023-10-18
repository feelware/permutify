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
            Esta expresión puede generalizarse para un número n de elementos y otro número r de selecciones.
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
                <h2 className="black" >(n - r)!</h2>
            </div>
            
            <div style={{display: "flex", gap: "4px"}}>
                    <h1 className="black" ><i>n</i></h1>
                    <h1 className="black" ><i>P</i></h1>
                    <h1 className="black" ><i>r</i></h1>
            </div>
        </div>
        <TextBlock>
            A dicha expresión se le suele llamar “permutaciones de n elementos tomados de r en r”, simbolizándose como se muestra en la figura.
        </TextBlock>
    </main>
    )
}