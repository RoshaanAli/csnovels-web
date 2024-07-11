import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function subscription() {
  return (
    <>
      <Header />
      <div class="container">
        <div class="subcription">
          <h1>Subscription</h1>
        </div>

        <div class="sign-up">
        <div class="free">
            free
        </div>
          <div class="free-acc">
        <h2>Create a free account <br></br>  to being reading!*</h2>
        <p>account is required to read novels<br></br>
            *not all novel free to read 
        </p>
         </div>
          <div class="free-cs">

              <button class="btn1">SIGN UP</button>
              <h1>CS Free</h1>
          </div>
        </div>




        <div class="sign-up current">
        <div class="free currt">
        <span class="span1"> $</span>
            9
        </div>
          <div class="free-acc">
        <h2>Get unlimited access<br></br> to all novels! </h2>
        <p>charged monthly OR one time payment for 30 day access
        </p>
         </div>
          <div class="free-cs">

              <button class="btn1"> CURRENT</button>
              <h1>CS Pro</h1>
          </div>
        </div>




        <div class="sign-up upgrade">
        <div class="free dollar">
           <span class="span1"> $</span>
            15
        </div>
          <div class="free-acc upgrade-acc">
        <h2>GAIN EXCLUSIVE ACCESS:</h2>
        <ul class="add">
            <li>Ad free experiance</li>
            <li>Infinite scroll when reading</li>
            <li>Get access to beta/stockpiled chapters and chapter in the edit process</li>
        </ul>
        <p>charged monthly OR one time payment for 30 day access
        </p>
         </div>
          <div class="free-cs upgrade-cs">

              <button class="btn3">UPGRADE</button>
              <h1>CS+</h1>
          </div>
        </div>


      </div>

      <Footer />
    </>
  );
}

export default subscription;
