import Product from "./Product";
const Footer=()=>{
   /* const productDetail={
        title:"Laptop",
        price:50000,
        brand:"HP"
    }
    const productDetaill={
        title:"Tv",
        price:40000,
        brand:"LG"
    }*/
      /*  function btn(){
         console.log("Hi bro");
     }*/
    return(
        <div className="Pr">
     <Product title="Laptop" price="50000" >
        <button  className="btn btn-primary">buy</button>
     </Product>
     <Product title="Tv" price="45000">
        <button className="btn btn-primary">buy</button>
     </Product>
    
        </div>
    )
}
export default Footer;