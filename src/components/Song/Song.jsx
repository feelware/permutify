import spotify from '../../assets/spotify.svg';
import './Song.css';

const Song = ({ name, artists, album, cover, selected=false }) => {
  const songMetadataClassName = `song-metadata ${selected ? 'selected' : ''}`;

  return (
    <article className="song-container">
      <img style={{width: "21px", height: "auto"}} src={spotify} alt="Spotify logo" />
      <img className='song-cover' src={cover} alt={"cover art of" + name} />
      <div className={songMetadataClassName}>
        <p className='caption song-info song-album'>{album}</p>
        <p className='caption song-info song-name'>{name}</p>
        <p className='caption song-info song-artists'>{artists.join(', ')}</p>
      </div>
    </article>
  )
}

export default Song