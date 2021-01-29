import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function ArryDestructring() {
  var favouritePR = ["Javscript", "python", "Java", "C#", ".NET"];

  //es5
  // var top1 = favouritePR[0];
  // var top2 = favouritePR[1];
  // var top3 = favouritePR[2];
  // is ma kia ho raha han har kisi kae liya ek agl agl value lay rhaay hayn 
  // console.log("My Fav Programing lang is ", top1);

  // es6 ma at a time ek sath he kar sakty han
  // or is ma variable kae number numbering sa he dayna han index sa nhi lay ga like 
  // array kii one par jo value han wo or 2nd par jo value han wo usko jis variable ma store karna han tu line sa he karna ho ga

  // let [top1, top2, top3] = favouritePR; // ya hum nai destructing karde
  // ab dekhean jaha juma atna saray line likhnai par rahay thay ab huma ek he line ma sub mil jay ga
  // console.log("My Fav Lang Is :", top2);

  // ab huma array kii pehlii or last value chahiye han let see
  // and see this how many length in this array
  console.log(favouritePR.length); // this aray length is 5

  let [top1, , , , lastvalue] = favouritePR; // kitna easily item ko skip be kar sakty han

  // let see this

  console.log(`Array First Value :${top1} And last value of :${lastvalue} .`);


  /// simple program and 2 variable and a kii b and b kii value a swap

  let a = 10;
  let b = 5;

  a = a - b;
  b = b + a;

  console.log(`this value of a: ${a}`);
  console.log(`this value of b: ${b}`);
  return <div>

  </div>
}

ReactDOM.render(<ArryDestructring />,
  document.querySelector('#root'));

