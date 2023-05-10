import { useState } from 'react'
import { Divider, Input, Button, Form } from 'antd'

function AddFoodForm(props) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const submitForm = (event) => {
        event.preventDefault();
        const newFood = {name, image, calories, servings}
        props.addFood(newFood)
       setName('')
       setImage('')
       setCalories(0)
       setServings(0)
    }
return (
    <form onSubmit={submitForm}>
        <Divider>Add Food Form</Divider>
        <Form.Item>
            <Input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}/>
        </Form.Item>
        <Form.Item>
            <Input
            value={image}
            type='text'
            placeholder="Image URL"
            onChange={(event) => setImage(event.target.value)}/>
        </Form.Item>
        <Form.Item>
            <Input
            value={calories}
            type="number"
            placeholder="Calories"
            onChange={(event) => setCalories(event.target.value)}/>
        </Form.Item>
        <Form.Item>
            <Input
            value={servings}
            type="number"
            placeholder="Servings"
            onChange={(event) => setServings(event.target.value)}/>
        </Form.Item>
        <Button htmlType="submit">Add Food</Button>
    </form>
)

}

export default AddFoodForm;

