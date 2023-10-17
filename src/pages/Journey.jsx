import { useState, useEffect } from "react";
import getSongsArrays from "../services/spotify";
import Playlist from "../components/Playlist/Playlist";

export default function Journey( {params} ) {
    const [playlist, setPlaylist] = useState(null);
    // const [miniPlaylistA, setMiniPlaylistA] = useState(null);
    // const [miniPlaylistB, setMiniPlaylistB] = useState(null);
    // const [miniPlaylistC, setMiniPlaylistC] = useState(null);
    // const [miniPlaylistD, setMiniPlaylistD] = useState(null);

    useEffect(() => {
        async function fetchSongs() {
            const topSongs = await getSongsArrays(params.access_token);
            setPlaylist(topSongs[0]);
            // setMiniPlaylistA(topSongs[1]);
            // setMiniPlaylistB(topSongs[2]);
            // setMiniPlaylistC(topSongs[3]);
            // setMiniPlaylistD(topSongs[4]);
        }
        fetchSongs();
    }, [params.access_token]);

    return (
        <div>
            {playlist && <Playlist songs={playlist} title={"Favoritas"} description={"Tus canciones más escuchadas"} />}
        </div>
    )
}