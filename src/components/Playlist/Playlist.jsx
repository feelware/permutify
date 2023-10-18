import SongList from "../SongList/SongList";
import './Playlist.css'

export default function Playlist({ songs, selected, width = "450", title = "Playlist", desc, shuffle, cursor, color=0 }) {
  const contentStyle = {
    borderRadius: desc ? "15px 15px 0px 0px" : "15px",
    background: `linear-gradient(180deg, #000000 0%, hsl(${color}, 100%, 20%) 100%)`,
  };
  
  return (
    <article className="playlist" style={{ width: width }}>
      <section className="playlist-content" style={contentStyle}>
        {!desc &&   
          <div className="playlist-header">
              <p className="caption playlist-heading">
                {title}
              </p>
              {shuffle && <img className="playlist-shuffle-icon" src={shuffle} alt="shuffle button" />}
              {cursor && <img className="playlist-cursor" src={cursor} alt="retro mouse cursor" />}
          </div>
        }        
        <SongList songs={songs} selected={selected} />
      </section>
      {desc && (
        <section className="playlist-footer">
          <h2 className="playlist-title">{title}</h2>
          <p className="caption playlist-desc">{desc}</p>
        </section>
      )}
    </article>
  );
}