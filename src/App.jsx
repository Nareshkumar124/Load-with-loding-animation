import React, { useEffect, useRef, useState } from "react";
import Load from "./components/load/Load";

function App() {
	const [cards, setCards] = useState([]);

  const [load,setLoad]=useState(false)

	const fetchData = async function () {
    setLoad(false)
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const data = await response.json();
		setCards(data);
    setLoad(true)
	};

	useEffect(function () {
		fetchData();
	}, []);

  if(!load){
    return(
      <Load/>
    )
  }
	return (
		<>
			<h1
				style={{
					textAlign: "center",
				}}
			>
				All Cards
			</h1>
			<div className="cards">
				{cards.map((value) => {
					return (
						<div key={value.id} className="card">
							<h3>{value.title}</h3>
							<p>{value.body}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
