// eslint-disable-next-line no-unused-vars
import React from 'react';
import Odyssey from '/Oddysey.jpeg';
import '../../services/Post.css';

function OdysseyPost() {
  return (
    <div className="post-container">
      <article className="post">
        <h1>Co lubię w Assassins Creed Odyssey?</h1>
        
        <div className="post-image">
          <img src={Odyssey} alt="Aleksios na drzewie" />
        </div>

        <div className="post-content">
          <p className="post-date">Data publikacji: 15 kwietnia 2024</p>
          
          <section>
            <h2>Starożytna Grecja w pełnej krasie</h2>
            <p>
              Assassins Creed Odyssey przenosi nas do fascynującego świata starożytnej Grecji. 
              Jako Aleksios (lub Kassandra) przemierzamy malownicze wyspy greckie, 
              odkrywając ich sekrety i uczestnicząc w epickich bitwach.
            </p>
          </section>

          <section>
            <h2>System walki</h2>
            <p>
              Jednym z najlepszych aspektów gry jest rozbudowany system walki. 
              Możliwość łączenia różnych umiejętności, korzystania z mocy Włóczni Leonidasa 
              oraz różnorodność stylów walki sprawia, że każde starcie może być inne.
            </p>
          </section>

          <section>
            <h2>Wybory i konsekwencje</h2>
            <p>
              System dialogów i wyborów sprawia, że każda nasza decyzja ma znaczenie. 
              Od prostych rozmów po kluczowe wybory fabularne - wszystko wpływa na rozwój historii 
              i losy postaci, które spotykamy.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

export default OdysseyPost;