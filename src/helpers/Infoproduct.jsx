import React from 'react'

export default function Infoproduct({title}) {
  return (
    <div className="info-product">
  <img className="oferimg" src="/logos/add.jpg" alt="oferimg.." />
  <h2 className="product-title">
    {title}
  </h2>
</div>   

  )
}
