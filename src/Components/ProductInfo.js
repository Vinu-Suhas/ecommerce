import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductInfo() {
    const data=useParams().id
  return (<><div>Product Info</div>
  
    <h2>This is the product id {data}</h2>
    </>)
}
