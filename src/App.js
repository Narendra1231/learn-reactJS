import Header from './Components/Header';
import Footer from './Components/Footer';
import StudentList from './Components/StudentList';
import Error from './Components/Error';
import { useEffect, useState,useRef} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//var data="Sarojit Site displayed";

function App() {
 // let isTrue=false;
/* const [data,setData]=useState({  //states are refers to data property used to tracking changes which should be done
  name:"narendra",    //useState() used for updating the values of data
  email:"23@gmail",
  phone:673980343
 });*/
 const [data,setData]=useState("karan");
function clickData(){    
    /* setData(previousState=>{
      return{...previousState,name:"roshan"}
     });*/
     setData("State Change");
     console.log(data);
}
const btnref=useRef(); //"useRef()" used to  store the mutable values and and  it does not re-render when updated.
let [count,setCount]=useState(0);
setTimeout(() => {
  setCount(count=>count+1);
},1000)
const x=useRef(0);
useEffect(()=>{    //useEffect() run when the webpage loads and every time calls when the states changes.
  console.log("Hello!")
  btnref.current.style.backgroundColor="red";
    x.current=x.current+1;
  console.log(x);
});

  return (
     <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/Student-list" element={<StudentList/>}></Route>
        <Route path="/Product" element={<Footer/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
      <h3>Name:-{data}</h3>
      <button ref={btnref} onClick={clickData}>sar</button>
     </>
  );
}

export default App;
