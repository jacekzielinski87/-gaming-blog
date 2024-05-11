import LostJudgment from '../../public/LostJudgment.jpg'
import Mirage from '../../public/Mirage.jpg'
import Aloy from '../../public/Aloy.jpg'
import Aleksios from '../../public/Aleksios.jpg'


function Main() {
    return (
        <div className="main">
            <div className="post">
                <img src={LostJudgment} alt='Lost Judgment Menu Photo'></img>
                <p>Lost Judgment</p>
            </div>
            <div className="post">
                <img src={Mirage} alt='Mirage Logo Photo'></img>
                <p>Mirage</p>
            </div>
            <div className="post">
                <img src={Aloy} alt='Aloy Photo'></img>
                <p>Aloy</p>
            </div>
            <div className="post">
                <img src={Aleksios} alt='Aleksios Photo'></img>
                <p>Aleksios</p>
            </div>
        </div>
    )
}

export default Main
