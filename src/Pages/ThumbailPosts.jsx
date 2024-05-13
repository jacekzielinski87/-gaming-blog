import Odyssey from '/Oddysey.jpeg';
import Judgment from '/Judgment.jpg';
import Aloy from '/Aloy.jpg';
import Blacklist from '/Blacklist.png';


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
    </div>
  )
}




export default Posts