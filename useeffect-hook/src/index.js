import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ek bar component run ho jata han tu useEfeect ko batay hayn kae is kae baad ma  kia karna han
// jub be ek bar render function call ho jay ga function call ho janai kae bad kia karna han 
// component ko batnai kae liya hum use karty han useEffect everytime jub be render function
// call hoga tu ya useeffect lazmi run hoga

function Effct() {
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(2);


  useEffect(() => {
    alert("I Am CLick")
  }, [num])

  return (
    <>
      <button onClick={() => { setnum(num + 1) }}>Click {num}</button>
      <br />
      <button onClick={() => { setnums(nums * num) }}>Click {nums}</button>

    </>
  )
}


ReactDOM.render(<Effct />, document.querySelector('#root'));



