import Yagami from '/YagamiSmallNoBg.png';
import Basim from '/BasimSmallnobg.png';
import Aleksios from '/Aleksiosnobg.png';
import Aloy from '/Aloynobg.png';
import Logo from '/gamingg.png';

function Header() {
    return (
        <nav className='navbar'>
            <div className='navbar-images'>
                <img className='navbar-character' src={Aloy} alt='Aloy small photo' />
                <img className='navbar-character' src={Basim} alt='Basim small photo' />
                <img className='navbar-character' src={Aleksios} alt='Aleksios small photo' />
                <img className='navbar-character' src={Yagami} alt='yagami small photo' />
            </div>
            <img className='logo-text' src={Logo} alt='logo photo' />
        </nav>
    )
}

export default Header

