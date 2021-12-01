import React from 'react'
import Card from './Card';

const CardList = (props) => {
    return (
    <div className='cardList'>
        {props.plants.map(plant=>(
          <Card key={plant.id} plant={plant}/>
      ))}
    </div>
    )
}

export default CardList;
