/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Odyssey from '/Oddysey.jpeg';
import Judgment from '/Judgment.jpg';
import Aloy from '/Aloy.jpg';
import Blacklist from '/Blacklist.png';
import Leon from '/Leon.jpg';
import Sekiro from '/Sekiro.jpg';
import { Link, Navigate } from 'react-router-dom';


function Posts() {

  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/posts/assassins-creed-odyssey" />;
  }

  return (
    <div className="thumbail-container">
      <article className="odyssey">
        <div onClick={() => setRedirect(true)} style={{cursor: 'pointer'}}>
          <div className="thumbnail-wrapper">
            <img className="thumbail-image" src={Odyssey} alt='Aleksios on tree photo' />
            <span className='thumbnail-text'>Co lubię w Assassins Creed Odyssey ?</span>
          </div>
        </div>
      </article>
      <article className="judgment">
        <Link to="/posts/yakuza-series">
        <div className="thumbnail-wrapper">
          <img className="thumbail-image" src={Judgment} alt='Yagami photo' />
          <span className='thumbnail-text'>Jak zaczęła się moja przygoda z grami z serii Yakuza?</span>
        </div>
        </Link>
      </article>
        <article className="horizon">
          <div className='thumbnail-wrapper'>
            <img className="thumbail-image" src={Aloy} alt='Aloyphoto'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='thumbnail-text'>Przemierzając świat z Aloy</a>
            </div>
        </article>
        <article className="blacklist">
        <div className='thumbnail-wrapper'>
            <img className="thumbail-image" src={Blacklist} alt='Sam Fisher photo'></img>
            <a href="" className='thumbnail-text'>Kiedy Sam Fisher powróci?</a>
          </div>
          </article>
          <article className="leon">
          <div className='thumbnail-wrapper'>
            <img className="thumbail-image" src={Leon} alt='Leon S kennedy photo'></img>
            <a href="" className='thumbnail-text'>O Capcomie i Residencie słów kilka</a>
            </div>
          </article>
          <article className="sekiro">
          <div className='thumbnail-wrapper'>
            <img className="thumbail-image" src={Sekiro} alt='Wolf photo'></img>
            <a href="" className='thumbnail-text'>Sekiro okiem świeżaka</a>
            </div>
          </article>
        </div>
  )
}




export default Posts;