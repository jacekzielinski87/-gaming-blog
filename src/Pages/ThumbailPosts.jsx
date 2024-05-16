import Odyssey from '/Oddysey.jpeg';
import Judgment from '/Judgment.jpg';
import Aloy from '/Aloy.jpg';
import Blacklist from '/Blacklist.png';
import Leon from '/Leon.jpg';
import Sekiro from '/Sekiro.jpg';


function Posts() {
  return (
    <div className="thumbail-container">
      <article className="odyssey">
            <img className="thumbail-image" src={Odyssey} alt='Aleksios on tree photo'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='text-assassin'>Co lubię w Assassins Creed Odyssey ?</a>
          </article>
        <article className="judgment">
            <img className="thumbail-image" src={Judgment} alt='Yagami photo'></img>
            <a href="" className='text-judgment'>Jak zaczęła się moja przygoda z grami z serii Yakuza?</a>
        </article>
        <article className="horizon">
            <img className="thumbail-image" src={Aloy} alt='Aloyphoto'></img>
            <a href="Co lubię w Assasin's Creed Odyssey" className='text-aloy'>Przemierzając świat z Aloy</a>
        </article>
        <article className="blacklist">
            <img className="thumbail-image" src={Blacklist} alt='Sam Fisher photo'></img>
            <a href="" className='text-sam'>Kiedy Sam Fisher powróci?</a>
          </article>
          <article className="leon">
            <img className="thumbail-image" src={Leon} alt='Leon S kennedy photo'></img>
            <a href="" className='text-resident'>O Capcomie i Residencie słów kilka</a>
          </article>
          <article className="sekiro">
            <img className="thumbail-image" src={Sekiro} alt='Wolf photo'></img>
            <a href="" className='text-sekiro'>Sekiro okiem świeżaka</a>
          </article>
        </div>
  )
}




export default Posts