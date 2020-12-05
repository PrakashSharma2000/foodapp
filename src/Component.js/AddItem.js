import React ,{useState} from 'react'

const AddItem = ({addData , total}) => //geeting data from parent 
 {

    var Billamount = 0 

    for(let i=0;i<total;i++){ // add total bill before adding tip
        Billamount += addData[i]
    }

    const [billaftertip,setbillaftertip]=useState() //to add a tip

    let afun =() =>{
            setbillaftertip(Billamount +(Billamount * (10/100)))// to add a tip to the final bill...
    }

   if(total>0){ // if coustmer didnt check any item bill will not be genrated.
    return (
        <div>
            <h3>Total</h3>
            {addData.map(amount =>( 
                <li>{amount}</li>
            ))}
           <strong>Bill Amount = </strong>
            {Billamount}
                <br/>
                <button onClick ={()=>afun()}>Add 10% tip</button>
                <br/>
                <strong>Total:- </strong>{billaftertip}

        </div>
    )
   }
   else{
       return(
           <div>test</div>
       )
   }
}

export default AddItem