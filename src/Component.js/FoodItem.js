import React from 'react'

import FormatItem from './FormatItems'
export const FoodItem = ({data , passData}) => {

   
    return (
        <div className="cards">
            {data.map(items=>( 
                <FormatItem data={items} key={items.id} passdata={passData}/>
            ))}
           
        </div>

        
    )
} 
export default FoodItem