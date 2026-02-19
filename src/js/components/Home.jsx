import React, { useState } from "react";
import { renderToNodeStream } from "react-dom/server";



const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	function handleChange({ target }) {
		setInputValue(target.value)
	}

	function addTask({ key }) {
		if (key == "Enter") {
			if (inputValue.trim() == "") {
				console.log("La tarea debe tener valor")
				return
			}
			setTodos((prev) => prev.concat([inputValue]))
			setInputValue("")
		}
	}

	function deleteTask(index) {
		setTodos((prev) => prev.filter((_, i) => i != index))
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-7">
					<h1 className="text-center mt-5">ToDo List</h1>
					<input type="text"
						placeholder="Agrega tu tarea"
						value={inputValue}
						onChange={handleChange}
						onKeyDown={addTask}
					/>
					<ul>
						{
							todos.map((task, index) =>
								<li key={index}>
									{task}
									<span
										onClick={() => deleteTask(index)}
									>X</span>
								</li>)
						}
					</ul>
					<p>{todos.length} task left</p>
				</div>
			</div>

		</div>
	);
};

export default Home;