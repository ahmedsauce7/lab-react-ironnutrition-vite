import { useState } from 'react'
import './App.css'
import {Row} from 'antd'
import foodsData from './foods.json'
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';


function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filterFoods, setFilterFoods] = useState('');
  const submitForm = (newFood) => {
    setFoods([...foods, newFood])
  }
  const deleteSubmit = (deletedfood) => {
    const newFood = foods.filter((food) => food !== deletedfood)
    setFoods(newFood)
  }
  return (
    <div className='App'>
<div>
      <Search food={foods} setFilterFoods={setFilterFoods} />
      <h1>Food List</h1>
      <Row className='rowantd'>
      {filterFoods.length>0 ? filterFoods.map((food,index) => (
        <FoodBox key={index} food={food} onDelete={deleteSubmit}/>
      ))
      : foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={deleteSubmit}/>
      ))}
      </Row>
    </div>
    <AddFoodForm addFood={submitForm}/>
  </div>
  ) 
}


// for iteration 3
// {/* <Row className='rowantd'>
// {foods.map((oneFood,index) => (
//   <FoodBox key={index} food={oneFood}/>
// ))}
// </Row> */}

//     for iteration one
//     <div className='App'>
//     {foodsData.map((oneFood) => (
//       <div key={oneFood.id}>
//       <p>{oneFood.name} </p>
//       <img src={oneFood.image} alt={oneFood.name} width={100} />
//     </div>
//     ))}

//   for iteration 2  
// { <FoodBox
//   food={{
//     name: 'Orange',
//     calories: 85,
//     image: 'https://i.imgur.com/abKGOcv.jpg',
//     servings: 1,
//   }}
// />}

export default App

