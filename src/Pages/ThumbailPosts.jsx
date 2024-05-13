import Odyssey from '/Oddysey.jpeg';
import Judgment from '/Judgment.jpg';
import Aloy from '/Aloy.jpg';
import Blacklist from '/Blacklist.png';
import Leon from '/Leon.jpg';
import Sekiro from '/Sekiro.jpg';


function Posts() {
  return (
    <div className="thumbail_container">
      <article className="article">
            <img className="news_image" src={Odyssey} alt='Aleksios on tree photo'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='news_text'>Co lubię w Assassins Creed Odyssey ?</a>
          </article>
        <article className="article">
            <img className="news_image" src={Judgment} alt='Yagami photo'></img>
            <a href="" className='news_text'>Jak zaczęła się moja przygoda z grami z serii Yakuza?</a>
        </article>
        <article className="article">
            <img className="news_image" src={Aloy} alt='Aloyphoto'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='news_text'>Przemierzając świat z Aloy</a>
        </article>
        <article className="article">
            <img className="news_image" src={Blacklist} alt='Sam Fisher photo'></img>
            <a href="" className='news_text'>Kiedy Sam Fisher powróci?</a>
          </article>
          <article className="article">
            <img className="news_image" src={Leon} alt='Leon S kennedy photo'></img>
            <a href="" className='news_text'>O Capcomie i Residencie słów kilka</a>
          </article>
          <article className="article">
            <img className="news_image" src={Sekiro} alt='Wolf photo'></img>
            <a href="" className='news_text'>Sekiro okiem świeżaka</a>
          </article>
          <p className='read_more'>Czytaj dalej</p>
    </div>
  )
}




export default Posts