import './SongList.css'
import Song from '../Song/Song'

function SongList({ songs, selected }) {
  const isSelectedArray = Array.isArray(selected);

  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <Song
          key={song.name}
          name={song.name}
          artists={song.artists}
          album={song.album}
          cover={song.cover}
          selected={isSelectedArray ? selected[index] : false}
        />
      ))}
    </div>
  )
}

export default SongList