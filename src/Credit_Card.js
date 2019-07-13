import React, {Component} from 'react';
import './App.css';
import Card from './card'
import src from './img/Arrow.png'

let myCard = new Card("Company name","img/Puce.png", "****  ****  ****  ****","5422","YEAR","MONTH/","CARDHOLDER","img/MK_VISA.png","img/BK_CARD.jpg");

  const regnumber = /^[0-9]{1,16}$/
  const regname= /^[a-z]{1,10}$/
  const  regvalidit= /^(0[1-9]|1[0-2])(\d{2}[^0-9])$/


class Credit_Card extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardNumber: myCard.serial_number,
      holderName: myCard.name_prop,
      valid: "11/50"
    }
  };
  updateCardNumber = (event) => {
    let number=event.target.value
    let tab_saisie=number.split('')
    let tab_valide=[]
    var l = []
      for (let i=0; i<tab_saisie.length; i++)
        {
          if(regnumber.test(tab_saisie[i])==true)
        
          {
            tab_valide.push(tab_saisie[i])
             l=tab_valide.join('')
          }
          else
          {
            document.getElementsByClassName('num')[0].value= l
          }
        }
      for (let j=tab_valide.length; j<19; j++)
      {tab_valide[j]='*'}
    tab_valide.splice(4,0,' ')
    tab_valide.splice(9,0,' ')
    tab_valide.splice(14,0,' ')
    var tab_to_string=tab_valide.join('')
    this.setState({cardNumber: tab_to_string.substr(0,19)});
   
  }
  updateHolderName = (event) => {
    let name=event.target.value
    let tab_saisie=name.split('')
    let tab_valide=[]
      for (let i=0; i<tab_saisie.length; i++)
        {
          
        if(regname.test(tab_saisie[i])==true)
        
          {
            tab_valide.push(tab_saisie[i])
            var n=tab_valide.join('')
          }
          else
          {
            
           (n==undefined?document.getElementsByClassName('nom')[0].value="":document.getElementsByClassName('nom')[0].value=n) 
          }
        }
     
    this.setState({holderName: event.target.value});
   
  }
  updateValid = (event) => {
    let val=event.target.value
    let tab_saisie=val.split('')
    let tab_valide=[]
    var l=[]
    if ((tab_saisie[0]=="1" && tab_saisie[1]>"2")||(tab_saisie[0]>="2")){
      document.getElementsByClassName('val')[0].value=""

      document.getElementsByClassName('val')[0].placeholder="mois non valide "
      
    }else{
      for (let i=0; i<tab_saisie.length; i++)
        {
         //if(regvalidit.test(tab_saisie[i])==true)
        
        if ((parseInt(tab_saisie[i])>=0)&&(parseInt(tab_saisie[i])<=9))
         {
            tab_valide.push(tab_saisie[i])
             l=tab_valide.join('')
            
          }
          else
          {
            document.getElementsByClassName('val')[0].value=l
          }
        }
      }
 
     if (l.length===0)
     {
       if(tab_saisie.length>0){
        this.setState({valid: "mm/yy"});
       }
     else{ this.setState({valid: "mm/yy" });}
     }
     else{
    var month=l.substring(0,2);
    var year= l.substr(2,2);
    this.setState({valid: month+"/"+year });}
 // }
     }
    
  

render(){
  return (
<div>
    <div id="BK_CARD">
 <h1>{myCard.title}</h1>
 <div id="PUCE_CARD"></div>
 
  <div id="INNER_CARD">
 
 <div id="NUM_CARD">
 <h2>{String(this.state.cardNumber).length==0?"**** **** **** ****":this.state.cardNumber}</h2>
 </div>
 
  <div id="HOLDER_CARD">
 <h2>{myCard.number}</h2>
 <h2>{String(this.state.holderName).length==0?"CARDHOLDER":String(this.state.holderName).toUpperCase()}</h2>
 </div>
 
 <div id="VAL_CARD">
  <h3 className="tx2">{myCard.valid_month+myCard.valid_year}</h3>
 <h3 className="tx1">VALID THRU</h3>
  <img src={src} alt="" class="Arrow"/>
<h3 className="tx3">{((this.state.valid).length===0 ? "mm/yy":this.state.valid)}</h3>

 </div>
 
  </div>
 <div id="MK_VISA_CARD"></div> 
 <div id="input">
 <input type="text"  className="payment-card__input num" placeholder="Number of card" maxlength="16" pattern="[0-9]{16}" name="number-card" required  onChange={this.updateCardNumber}></input>
 <input type="text" className="payment-card__input val" placeholder="MMYY" maxlength="4" pattern="[0-9]{4}" name="mm-card" required onChange={this.updateValid}></input>
 <input className="payment-card__input nom" placeholder="Holder of card" pattern="[A-Za-z, ]{2,}" maxlength="16" name="holder-card" required onChange={this.updateHolderName}></input>
 </div>
 </div>
 </div>
  );
}}
export default Credit_Card;
