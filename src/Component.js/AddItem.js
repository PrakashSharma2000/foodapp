import React, { useState } from 'react'

export const AddItem = ({ total ,valU}) => {
   var valu = 0
  for(let i=0;i<=total;i++){
        
    if(isNaN(valU[i])){
        continue;
         }
    valu +=Number(valU[i])
        
  }

  let totala = parseFloat(valu * 10/100)
  
  const [lasttotal, setlasttotal] = useState([])
  const aa = () =>setlasttotal(totala+valu)

    return (
        <div>
           Total = {valu}
            
           <div>
           <button type="" onClick={()=> aa()} >add 10% tip</button>
              
              <div>
                  {lasttotal}
              </div>
             
              
           </div>
           
        </div>
    )
}
export default AddItem