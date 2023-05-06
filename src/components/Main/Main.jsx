import React from 'react'
import './main.css'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'
import img from '../../assets/img.webp'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.jpg.webp'
import img7 from '../../assets/img7.webp'
import img8 from '../../assets/img8.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Santorini',
    location: 'Greece',
    grade: 'ROMANTIC',
    fees: '$500',
    description: 'Santorini is a picturesque island located in Greece. It is known for its stunning sunsets, white-washed buildings, and blue domed churches. This is the perfect destination for couples who want to experience a romantic getaway.'
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTURAL',
    fees: '$900',
    description: 'Tokyo is a vibrant city that offers a blend of traditional Japanese culture and modern technology. From shopping districts to historic temples, this city has something for everyone.'
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'ADVENTURE',
    fees: '$1200',
    description: 'Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. This destination is perfect for adventure seekers who want to explore the ruins and hike the surrounding mountains.'
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: 'Paris',
    location: 'France',
    grade: 'ROMANTIC',
    fees: '$800',
    description: 'Paris is known as the city of love and for good reason. From the Eiffel Tower to the Seine River, this city is full of romantic attractions. It also offers a rich history, art, and culinary scene.'
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Amalfi Coast',
    location: 'Italy',
    grade: 'RELAXING',
    fees: '$1000',
    description: 'The Amalfi Coast is a beautiful coastal region in southern Italy. With its stunning views, picturesque towns, and delicious cuisine, this is the perfect destination for a relaxing getaway.'
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Banff National Park',
    location: 'Canada',
    grade: 'NATURE',
    fees: '$800',
    description: 'Banff National Park is a beautiful park located in the Canadian Rockies. It offers breathtaking views of mountains, glaciers, and lakes. This is the perfect destination for nature lovers and outdoor enthusiasts.'
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Serengeti National Park',
    location: 'Tanzania',
    grade: 'SAFARI',
    fees: '$1500',
    description: 'Serengeti National Park is one of the best places to go on a safari in Africa. It is home to a variety of wildlife, including the Big Five (lion, leopard, elephant, rhino, and buffalo). This is the perfect destination for animal lovers and adventure seekers'
  }
  
]
function Main() {
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id, imgSrc, desTitle, location, grade, fees, description}) => {
              return (
                <div key={id} className='singleDestination'>
                  <div className="imageDiv">
                    <img src={imgSrc} alt={desTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="desTitle">
                      {desTitle}
                    </h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className='name'>{location}</span>
                    </span>

                    <div className="fees flex">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <BsClipboardCheck className='icon' />
        
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default Main