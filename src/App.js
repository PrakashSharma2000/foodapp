import { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios'
import FoodItem from './Component.js/FoodItem'
import Header from './Component.js/Header'
import AddItem from './Component.js/AddItem'


function App() {

  const [data, setdata] = useState([]) //used to save the data from apis

  const [addData, setaddData] = useState([]) //used to add to store the passing items prices from FormatItem.

  useEffect(() => { // fetching data from food.json 
    const fetchitem =async () =>{
      const result =await axios(`food.json`)
      setdata(result.data)
      console.log(result.data)
      
    }
    fetchitem()
  }, [])

  const passData = (item) => setaddData([...addData,item]) //catching data from formatitem and passing to adddata.

    return (
    <div className="App">
      <Header/>
      <FoodItem data={data} passData={passData} />
      <AddItem addData={addData} total={addData.length}/>
    </div>
  );
}// 

export default App;
