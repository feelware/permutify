import SongList from "../SongList/SongList";
import './Playlist.css'

export default function Playlist({ songs, width = "450px", title, description }) {
  return (
    <article className="playlist" style={{ width: width }}>
      <section className="playlist-content">
        <SongList songs={songs} />
      </section>
      <section className="playlist-footer">
        {title && <h2 className="playlist-title">{title}</h2>}
        {description && <p className="caption playlist-desc">{description}</p>}
      </section>
    </article>
  );
}

/*
        <div className="playlist-header">
          <p className="playlist-heading">{heading}</p>
        </div>
        */