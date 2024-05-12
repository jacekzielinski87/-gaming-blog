import Odyssey from '/Oddysey.jpeg';
import Judgment from '/Judgment.jpg';



function Posts() {
  return (
    <div className="news_container">
        <article className="article">
            <img className="news_image" src={Odyssey} alt='Aleksios on tree photo'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='news_text'>Co lubię w Assassins Creed Odyssey ?</a>
            <p className='news_text'></p>
        </article>
        <article className="article">
            <img className="news_image" src={Judgment} alt='Yagami photo'></img>
            <a href="" className='news_text'>Jak zaczęła się moja przygoda z grami z serii Yakuza ?</a>
            <p className='news_text'></p>
        </article>
    </div>
  )
}




export default Posts