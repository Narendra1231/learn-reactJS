import { Link } from "react-router-dom";
function Nav(){
  //let login=true;
  /*if(login){
    return <Profile/>
  }
  return <Boy/>*/
  return(
    <>
    <Link to="/Student-list">Student List</Link>
    <Link to="/Product">Product list</Link>
    </>
  );
}
/*<a href="/Student-list">Student list</a> when we use anchor tag for link webpage it reloads page 
other hand Link tag do not load the webpage. 
    <a href="/Product">Product list</a>*/
//{login? <Profile/>:<Boy/>}
/*function Profile(){
  return(
    <>
    <h1>Hello !</h1>
    <button>login</button></>
  
  );
}
  function Boy(){
    return(
      <>
      <h1>student</h1>
      <button>logout</button>
      </>
    );
  }*/

export default Nav;