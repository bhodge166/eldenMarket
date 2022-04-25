import React from "react";
import "../css/counter.css";
import { ADD_RUNES } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import badguy from '../assets/images/badguy.png'
import spells from '../assets/images/books1.png';
import pets from '../assets/images/realdragon.png';
import weapon from '../assets/images/swordnshield.png';






// var counterx = 0;
// function resetImage() {
//   document.getElementById("face").src = "../assets/images/badguy.png";
//   if (counterx === 3)
//     document.getElementById('face').style.visibility = "hidden";
// }

// function myTimer() {
//   counterx++;
//   if (counterx === 3) {//Image should be hidden in 1 secound
//     document.getElementById("face").src = "../assets/images/realdraong.png ";
//   } else {
//     document.getElementById("face").src = "../assets/images/armor1.png";
//   }
//   setTimeout(function () {
//     resetImage();
//   }, 1000)

// }




const Counter = () => {
  const [addRunes,{ error, data }] = useMutation(ADD_RUNES);
  if (error) {
    console.log(JSON.stringify(error.message));
  }
  //increase counter
  const handleAddRunes = async () => {
    try {
      const { data } = await addRunes();
      console.log(data);
    } catch (err) {
      console.log(JSON.stringify(err));
    }

  };


  // const Counter2 = () => {
  //   const [addRunes, { error, data }] = useMutation(ADD_RUNES);
  //   if (error) {
  //     console.log(JSON.stringify(error.message));
  //   }
  //   //increase counter
  //   const handleAddRunesX = async () => {
  //     try {
  //       const { data } = await addRunes();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(JSON.stringify(err));
  //     }
  //   };



  return (
    <div className="bkg" style={{ height: "100%" }}>
      <div className="counter">
        <h1 className="starA" style={{ fontSize: "84px", textDecorationLine: "underline" }}>Boss Fight! </h1>
        <h3 className="starB" style={{ fontSize: "48px", }}>
          <span style={{ fontWeight: "bold", fontStyle: "italic", color: "white" }}>"I Am Malenia, Blade Of Miquella, And I Have Never Known Defeat."</span> <br></br>-Malenia, Blade Of Miquella.
        </h3>
        <div className="btn__container">


        </div>
        <img src={badguy} type="button" id="face" className=" w-25" onClick={(myTimer) => handleAddRunes()} />
        {/* <img type="button" src={badguy} id="face" onClick={setTimeout(myTimer, 1000), handleAddRunes()} style={{ width: "100px", height: "100px" }} /> */}
        <button className="control__btn" onClick={() => handleAddRunes()}>
          <img src={weapon} className="icon" style={{ width: "85px" }} />Swing your  <span className="starA" style={{ fontSize: "24px" }}>weapon</span> earn x5000 runes ON CD 2mins

        </button>
        <button className="control__btn" onClick={() => handleAddRunes()}>
          <img src={spells} className="icon" />Cast a <span className="starA" style={{ fontSize: "24px" }}>Spell</span> earn x15000 runes ON CD 5mins
        </button>
        <button className="control__btn" onClick={() => handleAddRunes()}>
          <img src={spells} className="icon" /> Send a <span className="starA" style={{ fontSize: "24px" }}>pet</span> & earn x25000 runes ON CD 10mins 

        </button>
        <button className="control__btn" onClick={() => handleAddRunes()}>
          <img src={pets} className="icon" /> <p>Cast an <span className="starA" style={{ fontSize: "24px" }}>ultimate</span> earn x35000 runes ON CD 15mins</p>
        </button>
      </div>
    </div>
  );
};

export default Counter;
