import Yagami from '/YagamiSmallNoBg.png';
import Basim from '/BasimSmallnobg.png';
import Aleksios from '/Aleksiosnobg.png';
import Aloy from '/Aloynobg.png';
import Logo from '/gaming.png';

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

