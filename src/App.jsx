import { useState } from 'react';
import './App.css';

const baseUrl = 'https://edwardtanguay.netlify.app/share';
const flashcardsUrl = `${baseUrl}/flashcards.json`;
const germanNounsUrl = `${baseUrl}/germanNouns.json`;

function App() {
	const [nouns, setNouns] = useState([]);
	return (
		<div className="App">
			<h2>German Nouns</h2>
			<p>There are {nouns.length} nouns.</p>
		</div>
	)
}

export default App
