import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Playlist from '../Playlist/Playlist'

import './Carousel.css'

const EmblaCarousel = ({songs}) => {
  const [emblaRef] = useEmblaCarousel({ duration: 80 }, [Autoplay( { delay: 3000 } )])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {songs.map((song, i) => (
            <div className="embla__slide" key={i + 'a'}>
                <Playlist className="embla__slide__playlist" key={i + 'b'} songs={song} width="400px" color={250 + i*15} title={"Playlist " + (i + 1)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
