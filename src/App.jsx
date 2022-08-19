import { useState, useEffect } from 'react';
import './App.css';

const baseUrl = 'https://edwardtanguay.netlify.app/share';
const flashcardsUrl = `${baseUrl}/flashcards.json`;
const germanNounsUrl = `${baseUrl}/germanNouns.json`;

function App() {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(germanNounsUrl);
			const _nouns = await response.json();
			setNouns(_nouns);
		})();
	}, []);



	return (
		<div className="App">
			<h2>German Nouns</h2>
			<p>There are {nouns.length} nouns.</p>
		</div>
	);
}

export default App;
