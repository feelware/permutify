import spotify from '../../assets/spotify.svg';
import './Song.css';

const Song = ({ name, artists, album, cover, url, selected=false }) => {
  const songContainerClassName = `song-container ${selected ? 'selected' : 'unselected'}`;

  return (
    <article className={songContainerClassName}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img style={{width: "21px", height: "auto"}} src={spotify} alt="Spotify logo" />
      </a>
      <img className='song-cover' src={cover} alt={"cover art of" + name} />
      <div className='song-metadata'>
        <p className='caption song-info song-album'>{album}</p>
        <p className='caption song-info song-name'>{name}</p>
        <p className='caption song-info song-artists'>{artists.join(', ')}</p>
      </div>
    </article>
  )
}

export default Song