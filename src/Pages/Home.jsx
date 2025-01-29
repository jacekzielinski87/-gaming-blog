import Header from "../components/Header";
import Main from "../components/Main";
import Footer from '../components/Footer';
import { useState } from "react";


function Home () {
    const [footers] = useState([
    {name:"Artykuły", id:"1"},
    {name:"News",id:"2"},
    {name:"Play Station", id:"3"},
    {name:"Xbox", id:"4"},
    {name:"Pc", id:"5"},
    {name:"Recenzje", id:"6"},
    {name:"Copyright © 2024 Po prostu gaming.Wszelkie prawa zastrzeżone. Żadne fragmenty niniejszej strony lub jej treść nie mogą być kopiowane i powielane bez zgody właściciela praw autorskich.", id:"7"}
]);
  

  return (
    <div>
      <Header />
      <Main/>
      <Footer footers = {footers}/>
    </div>
  );
}

export default Home;
