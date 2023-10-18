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
            <h2 className="black" >50!</h2>
            <div className="barra" key={"barra"}
                style={{
                    height: "20px",
                    width: "100%",
                    backgroundColor: "black",
                    margin: "-30px 0",
                }}
            />
            <h2 className="black" >(50 - 10)!</h2>
        </div>
        
        <TextBlock>
            Podemos expresar la expresión con factoriales para hacerla más compacta.
        </TextBlock>
    </main>
    )
}