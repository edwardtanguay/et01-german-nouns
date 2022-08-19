import { useState, useEffect } from 'react';
import './App.scss';
import { NounArea } from './components/NounArea';
import { shuffle } from './tools';

const baseUrl = 'https://edwardtanguay.netlify.app/share';
const germanNounsUrl = `${baseUrl}/germanNouns.json`;

function App() {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(germanNounsUrl);
			const _nouns = await response.json();

			_nouns.forEach(noun => {
				noun.answerIsShowing = false;
				noun.plural = noun.plural.substring(4);
			});
			shuffle(_nouns);

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
