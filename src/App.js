import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import Testing from './Component/Testing/Testing';
import Test from './Component/Test/Test';
import { useEffect, useState } from 'react';
import Menu from './Component/Menu/Menu';
import AllProducts from './Component/AllProducts/AllProducts';

function App() {
  const arr = [{country: "Bangladesh", region: "asia", age: 53}];

  // let count = () => {
  //   console.log('Hello Paicy Bro');
  // }

  // let [counting, setCounting] = useState('I love My Computer')
  // console.log(counting);
  // setCounting('I Love my Laptop')
  // console.log(counting);

  let [counts, setCounts] = useState(0);

  let setCartCount = () => {
    setCounts(counts + 1)
  }

  return (
    <div className="App">
      {/* <Menubar person={'Istiak Ahmed'}></Menubar> */}
      {/* <Testing arr = {arr}> </Testing> */}
      {/* <Test counts={count}></Test> */}
      {/* <Test></Test> */}
      <Menu counts={counts}></Menu>
      <AllProducts setCartCount= {setCartCount}> </AllProducts>
    </div>
  );
}

export default App;
