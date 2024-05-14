import Yagami from '/YagamiSmallNoBg.png';
import Basim from '/BasimSmallnobg.png';
import Aleksios from '/Aleksiosnobg.png';
import Aloy from '/Aloynobg.png';
import Logo from '/gaming.png';

function Header() {
    return (
        <div className='navbar'>
            <img className='navbar-aloy' src={Aloy} alt='Aloy small photo'></img>
            <img className='navbar-basim' src={Basim} alt='Basim small photo'></img>
            <img className='navbar-aleksios' src={Aleksios} alt='Aleksios small photo'></img>
            <img className='navbar-yagami' src={Yagami} alt='yagami small photo'></img>
            <img className='logo-text' src={Logo} alt='logo photo'></img>
        </div>
    )
}

export default Header

