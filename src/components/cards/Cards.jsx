import React, { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaMinusCircle, FaStarHalfAlt } from 'react-icons/fa'

import { BsFillCartPlusFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoCartAction, RemovetoCartAction } from '../../Store/Action/product'
import { useState } from 'react'
import { Addcounteraction, Minuscounteraction } from '../../Store/Action'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase'
import { Container, Row } from 'react-bootstrap'

const Cardss = ({product , removeBtn , cart ,handlePrice , setPrice}) => {
  const dbCollection = collection(db, "AddToCart");
  const [refresh, setRefresh] = useState(false);

  const [counter, setcounter] = useState((1))
  // const [carto, setcarto] = useState([])

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(dbCollection);
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          value: doc.data(),
        });
      });
      console.log();
    }
    getData();
  }, [refresh]);


  const dispatch = useDispatch()
  // console.log(product);

  async function addtocart(){
      dispatch(AddtoCartAction(product))
      const obj = {
        productName: product.title,
        productImage : product.thumbnail,
        productPrice : product.price,
      } 
      const adder = await addDoc(dbCollection, obj)
      setRefresh(!refresh)
  }
  function removetoCart(){
      dispatch(RemovetoCartAction(product))
      // setPrice(product.price)
      handlePrice()
}
const { cartitem } = useSelector((state) => state.AddToCartReducer)  
const selector = useSelector((state)=> state.addCounterreducer)

// function AddCounter(product){
//   setcounter(counter + 1)
//   // console.log(product);
//   setPrice(counter * product.price)

// }

function AddCounter(product){
    dispatch(Addcounteraction(product))
}
function MinusCounter(){
 dispatch(Minuscounteraction())
}


// function MinusCounter(){
//   setcounter(counter - 1)
//   if(counter <= 0){
//     setcounter(0)
//   }
// }

// const handleChange = (product) =>{
//     console.log(product);
// }


  return (    
    <> 
 {
  cart ? (

<div className='d-flex container align-items-center justify-content-between p-4 maino fb'>

<div className="d-flex align-items-center"> 
<img src={product.thumbnail} className=" w-25 cart-img" alt="..." />
<span className='fs-2 ms-md-3'>{product.title}</span>
</div>


<div className='me-5'>
<button className='btn fs-3 butn' onClick={AddCounter}>+</button>
<button className='btn fs-5 ms-md-1'>{selector.globalCounter}</button>
<button className='btn fs-3 ms-md-1 butn' onClick={MinusCounter}>-</button>
</div>


<div className=''>
<span className='fs-4 ms-md-5'>${product.price}</span>
<FaMinusCircle size={35} className="float-end carti ms-md-5" onClick={removetoCart}/>
</div>  
</div>  

  ) : (

<div className=' cardsss card p-3 mt-4' id='card'>
<div className="" style={{ width: '100%' }}>
  <img src={product.thumbnail} className=" w-100 imag-card" height={280} alt="..." />
   
  <div className="card-body">
  <h3 className=''>{product.title}</h3> 
    <p className="card-text">
     {product.description}
    </p>
    <div className="star">  
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <FaStarHalfAlt />
     </div>
    <p className="fs-5 card-text price">
     ${product.price}
    </p>
  {removeBtn ? (
    <FaMinusCircle size={35} className="float-end carti" onClick={removetoCart}/>
  ) : ( 
    <BsFillCartPlusFill size={35} className="float-end carto" onClick={addtocart}/>
  )
  }
  </div>
</div>
</div>
)

}
    </>
  )
}

export default Cardss
