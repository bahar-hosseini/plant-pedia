import React from 'react'

const Card = (props) => {
    return (
        <div className='cardContainer'>
        <img alt='plant'  src={'https://picsum.photos/id/940/180/180'} />
              <h2>
                {props.plant.title}
             </h2>
             <p>{props.plant.body}</p>
        </div>
    )
}

export default Card
