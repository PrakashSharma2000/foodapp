import React, { useState } from 'react'
import Additem from "./AddItem"
export const FoodItem = () => {

    // const [foodprice] = useState([100,90,30,50,80])
    const [amounts,setamount] = useState([])
   
    var item = (amount) => {
        setamount([...amounts,amount])
    }
    var valU = amounts;
    return (
        <div className="cards">
            <div className="card">
                <img className="imgsize"  onClick={()=> item(100)}
                src="https://i2.wp.com/spicecravings.com/wp-content/uploads/2018/03/Paneer-Butter-Masala-1.jpg?fit=1800,1200&ssl=1" alt="butter Panner"/>
                <div>
                <p>Butter Panner</p>
                <strong>100rs</strong>
                
            
                </div>
            </div>

            <div className="card">
                <img  onClick={()=> item(90)}
                 className="imgsize" src="https://i.ytimg.com/vi/Y2oYE785Q4o/maxresdefault.jpg" alt="Chilli Potato"/>
                <div>
                <p>Chilli Potato</p>
                <strong>90rs</strong>
                </div>
            </div>

            <div className="card">
                <img onClick={()=> item(30)}
                className="imgsize" src="https://indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe.jpg" alt="butter Panner"/>
                <div>
                <p>Rasgulla</p>
                <strong>30rs</strong>
                </div>
            </div>

            <div className="card">
                <img onClick={()=> item(50)}
                    className="imgsize" src="https://www.thespruceeats.com/thmb/JPUwTo_IqmHowaEq4tj-psZz48w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4271692448_68e0f951f6_o-56a510453df78cf772862aff.jpg" alt="Momos"/>
                <div>
                <p>Momos</p>
                <strong>50rs</strong>
                </div>
            </div>

            <div className="card">
                <img onClick={()=> item(80)}
                className="imgsize" src="https://recipes.timesofindia.com/thumb/53188495.cms?imgsize=138903&width=800&height=800" alt="Litti Chokha"/>
                <div>
                <p>Litti Chokha</p>
                <strong>80rs</strong>
                </div>
            </div>

            <div>
            <span>item total</span>
            {amounts.map((pay)=>(
                <li>{pay}</li> 
                
            )) }
            
                <Additem amounts={amounts} total={amounts.length} valU={valU}/>
            </div>
        </div>

        
    )
}
export default FoodItem