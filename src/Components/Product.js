function Product(props){
 
    return(
        <>
        <div >
           <h2>{props.title}</h2> 
           <span>Price:-{props.price}</span>
           <p>Brand:-</p>
           {props.children}
        </div> 
        <ProfileDetail/> </>
         
    );
}
function ProfileDetail(){
    return(
    <h1>Profile Details</h1>
    );
}
export default Product;