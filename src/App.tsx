import { useState } from "react";
import "./App.css";
import { SimpleComponent } from "@components/atoms/SimpleComponent/SimpleComponent";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<div></div>
			<h1>Waves</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<SimpleComponent>I am a child of SimpleComponent</SimpleComponent>
		</>
	);
}

export default App;
