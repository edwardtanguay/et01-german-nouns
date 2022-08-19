import { useState, useEffect } from 'react';
import './App.scss';
import { NounArea } from './components/NounArea';

const baseUrl = 'https://edwardtanguay.netlify.app/share';
const flashcardsUrl = `${baseUrl}/flashcards.json`;
const germanNounsUrl = `${baseUrl}/germanNouns.json`;

function App() {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(germanNounsUrl);
			const _nouns = await response.json();

			//decorate nouns
			_nouns.forEach(noun => {
				noun.answerIsShowing = false;
			});

			setNouns(_nouns);
		})();
	}, []);

	return (
		<div className="App">

			<NounArea nouns={nouns} setNouns={setNouns} />
		</div>
	);
}

export default App;
