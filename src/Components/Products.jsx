import React,{useState} from "react";
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpeg'
import p6 from '../assets/p6.jpeg'

export default function Products() {

const products=[
    {name:'Black Shirt', price:25 , image:p1},
    {name:'Dress Shoes', price:67 , image:p2},
    {name:'Jacket', price:7 , image:p3},
    {name:'Bracelet', price:15 , image:p4},
    {name:'Yellow Shirt', price:23 , image:p5},
    {name:'Sneakers', price:20 , image:p6},
]

const [sortBy, setSortBy] = useState('none'); 

const sort = (e) => {
    console.log(e.target.value)
    setSortBy(e.target.value);
    // sortProducts(event.target.value);
  };


  return (
    <>    

<select className="opt" value={sortBy} onChange={sort}>
        <option value="none">None</option>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

    <div className="container">


  {products.map((item)=>(
    <div className="product" key={item.name}>
        <div className="img" key={item.image}>
            <img src={item.image} alt="" width="200px" height="200px"/>
        </div>
        <div className="name" key={item.name}>
            <h3 className="Pname">{item.name}</h3>
        </div>
        <div className="price" key={item.price}>
            <p className="Pprice">
            Price : {item.price} $
            </p>
        </div>
        {/* <div className="date" ></div> */}
    </div>
  ))}
  
  </div>
  </>
)}
