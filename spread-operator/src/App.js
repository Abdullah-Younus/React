import logo from './logo.svg';
import './App.css';

function App() {
  // es5
  // funciton parameter ma jub hum parameter ko array ki value dayni hoti han tu hum apply method use karty han

  // function sum(a, b, c, d) {
  //   console.log(a + b + c, d);
  // }

  // let arr = [5, 2, 3, 45];

  // sum.apply(null, arr) // ya apply ka method function par use hoga or ya iski array kii value ko fucntion parameter ma day ga

  //change into es6 

  function sum(a, b, c) {
    console.log(a + b + c);
  }

  let arr = [5, 2, 3];
  // arr ko as an value niklwna han 
  console.log(...arr)
  // es6 apply work change to spread operator
  sum(...arr)
  // sum.apply(null, arr)

  /// replace karta ho Concate() ko 
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [6, 7, 8, 9, 10];

  // arr1 = arr1.concat(arr2); // isko replace kar kae es6 ma aisa karay gayn

  arr1 = [...arr1, ...arr2]

  console.log(arr1);


  let arrc1 = [1, 2, 3];
  let arrc2 = [...arrc1, 4, 5, 6]; // ya first arr kii value ma copy kare is nai or apni value be add karli


  console.log(arrc2);
  console.log(arrc1);



  return (
    <div className="App">


    </div>
  );
}

export default App;
