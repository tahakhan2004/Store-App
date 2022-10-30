import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaMinusCircle, FaStarHalfAlt } from 'react-icons/fa'

import { BsFillCartPlusFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { AddtoCartAction, RemovetoCartAction } from '../../Store/Action/product'

const Cardss = ({product , removeBtn}) => {
  const dispatch = useDispatch()
  // console.log(product);
  function addtocart(){
      dispatch(AddtoCartAction(product))
  }
  function removetoCart(){
      dispatch(RemovetoCartAction(product))
}
  return (    
    <>
<div className='container p-3 mt-md-4' id='card'>
<div className="card cardsss" style={{ width: "100%"  }}>
  <img src={product.thumbnail} className=" w-100 imag-card" height={320} alt="..." />

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
    </>
  )
}

export default Cardss
