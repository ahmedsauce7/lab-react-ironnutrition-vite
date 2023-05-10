import { Divider, Input } from "antd";
import { useState } from "react";

function Search(props) {
    const [searchQ, setSearchQ] = useState('');
    const searchSubmit = (event) => {
        const searchResult = event.target.value.toLowerCase();
        setSearchQ(searchResult)
        props.setFilterFoods(props.food.filter((food) => food.name.toLowerCase().includes(searchResult)))
    }

    return (
        <div>
        <Divider>Search</Divider>
        <Input 
        value={searchQ} 
        placeholder="Search"
        type="text" 
        onChange={searchSubmit}/>
        </div>
    )
}

export default Search;