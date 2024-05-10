import Yagami from '../../public/YagamiSmallNoBg.png';
import Basim from '../../public/BasimSmallnobg.png';
import Aleksios from '../../public/Aleksiosnobg.png';
import Aloy from '../../public/Aloynobg.png';
import Logo from '../../public/gaming.png';



function Header() {
    return (
        
        <div className='navbar'>
            <img className='logo' src={Aloy} alt='Aloy small photo'></img>
            <img className='logo' src={Basim} alt='Basim small photo'></img>
            <img className='logopage' src={Logo} alt='logo photo'></img>
            <img className='logo' src={Aleksios} alt='Aleksios small photo'></img>
            <img className='logo' src={Yagami} alt='yagami small photo'></img>
            <p className='banner_text'>Miejsce dla każdego gracza</p>
        </div>
    )
}

export default Header

