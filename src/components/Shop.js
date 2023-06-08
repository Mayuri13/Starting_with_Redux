import React from 'react'
import {useDispatch} from 'react-redux'
import {inc,dec,mul,div} from '../states/reducer/index'
import { useSelector } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch()
  const curNumber = useSelector((state)=>state.counter.number)
  return (
    <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style = {{height: "80vh"}}>
    <h1 className='container d-flex justify-content-center my-3'>Welcome to my Cart</h1>
    <div className="container d-flex justify-content-center my-3">
        <button onClick={()=> dispatch(inc())} className="btn btn-primary mx-2">+</button>
        <h3>Add to cart</h3>
        <button onClick={()=> dispatch(dec())} className="btn btn-primary mx-2">-</button>
    </div>
    <div className="container d-flex justify-content-center my-3">
        <button onClick={()=> dispatch(mul())} className="btn btn-primary mx-2">*10</button>
        <h3>{curNumber}</h3>
        <button onClick={()=> dispatch(div())} className="btn btn-primary mx-2">/10</button>
    </div>
    </div>
  )
}

export default Shop