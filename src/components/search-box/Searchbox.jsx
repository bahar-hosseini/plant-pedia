import React from 'react'

const Searchbox = ({handleChange,placeholder}) => {
    return (
        <div>
          <input className='searchInput' type='search' placeholder={placeholder} onChange={handleChange} />  
        </div>
    )
}

export default Searchbox
