import React from 'react';
import trotineta from '../../resources/images/trotineta.jpg';
import monociclu from '../../resources/images/monociclu.jpg';
import './Home.css'

export default function Home() {
  return(
    <div className='home-wrapper'>
        <h2>Home</h2>
        <div className='container'>
        <img src={trotineta} class="responsive" alt="sir de trotinete" width="720" height="480"/>
            <div class="text_prez">
                <h3>Noua trotineta Xiaomi MI 365</h3>
                <ul>
                    <li>Ușor de utilizat</li>
                    <li>Pliabilă</li>
                    <li>Autonomie ridicată</li>
                    <li>Perfectă pentru oraș!</li>
                </ul>
                <p>Acum cu o reducere de student de 20%!</p>
            </div>
        </div>
        <div><hr/></div>
        <div className='container'>
        <img src={monociclu} class="responsive" alt="monociclu la munte"/>
            <div class="text_prez">
                <h3>A venit momentul să înveți să mergi pe monociclu!</h3>
                <p>Vino în showroom să începi aventura pe o roată, 
                    unde vei fi ajutat de specialiștii noștri în îmblânzirea unui monociclu!
                </p>
                <p>Până atunci, vezi oferta noastră de monocicluri.</p>
            </div>
        </div>
    </div>   
  );
}