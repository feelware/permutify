import { useState, useEffect } from 'react';
import './MiniPlaylist.css';

export default function MiniPlaylist({ songs, title = "Playlist" }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = songs.map(song => song.cover);

  useEffect(() => {
    // Create an array to store image objects
    const imageObjects = [];

    // Function to check if all images have loaded
    const checkImagesLoaded = () => {
      const allImagesLoaded = imageObjects.every((image) => image.complete);
      if (allImagesLoaded) {
        setImagesLoaded(true);
      }
    };

    // Load images and add to imageObjects array
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = checkImagesLoaded;
      imageObjects.push(img);
    });

    // Check if all images are already cached (for browsers)
    checkImagesLoaded();

    // Clean up the event listeners on unmount
    return () => {
      imageObjects.forEach((img) => {
        img.onload = null;
      });
    };
  }, [imageUrls]);

  return (
    <article className="mini-playlist">
        <section className='mini-playlist-songs'>                  {imagesLoaded ? (
        // Render your component content here
        <>
          {
            imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Cover ${index}`}
                className="mini-playlist-cover"
              />
            ))
          }
        </>
      ) : (
        // You can display a loading spinner or message here
          imageUrls.map((url, index) => (
            <div
              key={index}
              className="mini-playlist-cover-placeholder"
              style={{ backgroundColor: "black" }}
            />
          ))
      )}
        </section>
        <p className="caption mini-playlist-title">{title}</p>
    </article>
  );
}