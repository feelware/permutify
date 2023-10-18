import './SongList.css'
import Song from '../Song/Song'

function SongList({ songs }) {
  return (
    <div className="song-list">
      {songs.map(song => (
        <Song
          key={song.name}
          name={song.name}
          artists={song.artists}
          album={song.album}
          cover={song.cover}
        />
      ))}
    </div>
  )
}

export default SongList