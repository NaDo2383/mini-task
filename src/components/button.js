import React from 'react'
import "./button.css"

export default function Button({ checked, setChecked, OnlyProductsInStock }) {
    return (
        <div id='toggleContainer'>
            <label class="container" for="button">
                <input type="checkbox" id="button" onChange={OnlyProductsInStock} />
                <span class="slider"></span>
            </label>
            <div>
                Only products in stock
            </div>
        </div>
    )
}
