import React, { useState } from "react";
import { renderToNodeStream } from "react-dom/server";



const Home = () => {
	const [inputValue, setInputValue ] = useState("");
	const [todos, setTodos] = useState([]);

	function handleChange({target}){
		setInputValue(target.value)
	}

	function addTask({key}){
		if (key == "Enter"){
			if(inputValue.trim() == ""){
				console.log("La tarea debe tenr valor")
				return
			}
			setTodos((prev)=>prev.concat([inputValue]))
			setInputValue("")
		}
	}

	function deleteTask(index){
		setTodos((prev)=>prev.filter((_, i)=>i != index))
	}

	return (
		<div className="container">        
			<h1 className="text-center mt-5">ToDo List</h1>
			<ul>
				<li>
					<input type="text" 
							placeholder="Agrega tu tarea"
							value={inputValue}
							onChange={handleChange}
							onKeyDown={addTask}/>
				</li>
				{
					todos.map((task, index)=>
					<li key={index}>
						{task}
						<span
							onClick={()=>deleteTask(index)}
						>X</span>
					</li> )				
				}
			</ul>
		</div>
	);
};

export default Home;