import Button from "./components/Button/Button";
import "./Home.css";

export default function Home( {auth} ) {
    return (
        <main className="home">
            <h2 className="logo" style={{fontStyle: "italic", fontSize: "1.8rem"}}>permutify!</h2>
            <section className="content">      
                <h1 className="title">
                    ¿De <i>cuántas</i> formas puedes ordenar <div className="logo">tu música favorita?</div>
                </h1>
                
                <div className="user-prompt">
                    <p className="caption"> Descubre la matemática de hacer playlists con este recorrido interactivo </p>
                    <Button text="Conectar con Spotify" onMouseUp={auth} wide/>
                </div>
            </section>

            <img className="cassete" src="https://freepngimg.com/thumb/electronics/87594-compact-electronics-cassette-mixtape-vhs-free-transparent-image-hd.png" alt="Cassette"/>
        </main>
    )
}