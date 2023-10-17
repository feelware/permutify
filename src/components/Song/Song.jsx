import spotify from '../../assets/spotify.svg';
import './Song.css';

const Song = ({ name, artists, album, cover }) => {
    return (
        <article className="song__container">
            <img style={{width: "21px", height: "auto"}} src={spotify} alt="Spotify logo" />
            <img className='song__cover' src={cover} alt={"cover art of" + name} />
            <div className="song__info">
                <p className='caption song__album'>{album}</p>
                <p className='caption song__name'>{name}</p>
                <p className='caption song__artists'>{artists.join(', ')}</p>
            </div>
        </article>
    )
}

export default Song