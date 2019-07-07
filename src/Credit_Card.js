import React from 'react';
import './App.css';
import Card from './card'
import src from './img/Arrow.png'

let myCard = new Card("Credit card","img/Puce.png", "7253  3256  7895  1245","5422","YEAR","MONTH/","CARDHOLDER","img/MK_VISA.png","img/BK_CARD.jpg");

function Credit_Card() {
  return (

    <div id="BK_CARD">
 <h1>{myCard.title.toUpperCase()}</h1>
 <div id="PUCE_CARD"></div>
 
  <div id="INNER_CARD">
 
 <div id="NUM_CARD">
 <h2>{myCard.serial_number}</h2>
 </div>
 
  <div id="HOLDER_CARD">
 <h2>{myCard.number}</h2>
 <h2>{myCard.name_prop.toUpperCase()}</h2>
 </div>
 
 <div id="VAL_CARD">
  <h3 class="tx2">{myCard.valid_month+myCard.valid_year}</h3>
 <h3 class="tx1">VALID THRU</h3>
  <img src={src} alt="" class="Arrow"/>
<h3 class="tx3">11/50</h3>

 </div>
 
  </div>
 <div id="MK_VISA_CARD"></div> 
 </div>
  );
}
export default Credit_Card;
