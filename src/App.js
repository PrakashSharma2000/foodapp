
import './App.css';
import FoodItem from './Component.js/FoodItem'
import Header from './Component.js/Header'

function App() {
  // const [foodprice, setfoodprize] = useState([100,90,30,50,80]); // made this for when data will be fetch on api
  // const [foodname, setfoodname] = useState(["Butter Panner","Chilli Potato","Rasgulla","Momos","Litti Chokha"]) // made this for when data will be fetch on api
  // const [foodimage, setfoodimage] = useState(["https://i2.wp.com/spicecravings.com/wp-content/uploads/2018/03/Paneer-Butter-Masala-1.jpg?fit=1800,1200&ssl=1","https://i.ytimg.com/vi/Y2oYE785Q4o/maxresdefault.jpg","https://indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe.jpg","https://www.thespruceeats.com/thmb/JPUwTo_IqmHowaEq4tj-psZz48w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4271692448_68e0f951f6_o-56a510453df78cf772862aff.jpg","https://recipes.timesofindia.com/thumb/53188495.cms?imgsize=138903&width=800&height=800"]);
  return (
    <div className="App">
      <Header/>
      <FoodItem />

    </div>
  );
}

export default App;
