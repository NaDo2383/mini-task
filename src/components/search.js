import React from 'react'
import './search.css'

export default function Search({ search }) {
    return (
        <div>
            <div id='searchBarContainer'>
                <input type="text" placeholder='Search...' onChange={e => search(e.target.value)} id='searchbar' />
                <i class="bi bi-search"></i>
            </div>
        </div>
    )
}
