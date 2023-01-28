import React from 'react'
import "./products.css"


export default function Products({ setData, data, productCat }) {
    let catArr = [];

    data.map(e => {
        if (!catArr.includes(e.category)) {
            catArr.push(e.category)
        }
    })

    return (
        <div id='productContainer'>
            {catArr.map(e => {
                return (
                    <div id='productContainer'>
                        <div className='productCatHeader'>{e}</div>
                        <div className='productDetailContainer'>{data.map(a => {
                            if (a.category == e && a.isStock) {
                                return (
                                    <div className='productDetail'>
                                        <div className='productName'>{a.name}</div>
                                        <div className='stockDetail g'>IN STOCK</div>
                                        <div className='productPrice'>${a.price}</div>
                                    </div>)
                            } else if (a.category == e && !a.isStock) {
                                return (
                                    <div className='productDetail'>
                                        <div className='productName a'>{a.name}</div>
                                        <div className='stockDetail a r'>OUT OF STOCK</div>
                                        <div className='productPrice a'>${a.price}</div>
                                    </div>)
                            }
                        })}</div>
                    </div>)
            })}
        </div>
    )
}
