import React from "react";

const KyleMerch = () => {
  return (
    <body>
  <header>
     <h1>Kyle</h1>
  </header>
  <nav className="loginNav float-right">
     <button className="login">Login</button>
     <button className="signUp" >Sign Up</button>
 </nav>
<main>
 <div className="avImg">
     <img src="" alt=""> </img>
 </div>

 <div className="merchantSect float-right">
     <h2></h2>
       <div>
         <img src="" alt="" className="itemImg1"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
       <div>
         <img src="" alt="" className="itemImg2"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
       <div>
         <img src="" alt="" className="itemImg3"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
       <div>
         <img src="" alt="" className="itemImg4"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
       <div>
         <img src="" alt="" className="itemImg5"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
       <div>
         <img src="" alt="" className="itemImg6"></img>
         <h3>Name</h3>
         <h3>Runes: 50</h3>
         <p>Description: </p> 
         <button>Buy</button>
       </div>
 </div>

 <div className="playerInfo">
   <h3>Runes Available: </h3>
   <h3>Items Purchased: `${itemsPurchased}` </h3>
 </div>

</main>

</body>
  );
};
export default KyleMerch;
