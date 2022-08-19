import { useState, useEffect } from 'react';
import { NounArea } from './components/NounArea';
import './App.scss';

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
			<NounArea nouns={nouns} />
		</div>
	);
}

export default App;
