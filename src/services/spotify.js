async function fetchWebApi(endpoint, method, token, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopSongs(token){
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=short_term&limit=50', 'GET', token
    )).items;
}

function tidyUpSongs(songs) {
    return songs.map((song) => ({
        name: song.name,
        album: song.album.name,
        artists: song.artists.map((artist) => artist.name),
        cover: song.album.images.find((image) => image.width === 64)?.url,
    }));
}

function removeDuplicateAlbums(songs) {
    const albums = new Set();
    return songs.filter((song) => {
      if (albums.has(song.album)) {
        return false;
      } else {
        albums.add(song.album);
        return true;
      }
    });
}

function splitSongs(songs) {
    const result = [];
    let i = 0;
    while (i < songs.length) {
      const chunkSize = i === 0 ? 4 : 3;
      result.push(songs.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return result;
}

export default function getSongsArrays(token){
    return getTopSongs(token)
        .then(tidyUpSongs)
        .then(removeDuplicateAlbums)
        .then(splitSongs);
}