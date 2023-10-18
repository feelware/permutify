import './MiniPlaylist.css';

export default function MiniPlaylist({ songs, title = "Playlist" }) {
  return (
    <article className="mini-playlist">
        <section className='mini-playlist-songs'>
            {songs.map(song => (
                <img className='mini-playlist-song' key={song.name} src={song.cover} alt={"cover art of " + song.name} />
                ))}
        </section>
        <p className="caption mini-playlist-title">{title}</p>
    </article>
  );
}