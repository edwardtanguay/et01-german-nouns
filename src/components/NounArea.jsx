import { Noun } from "./Noun";

export const NounArea = ({ nouns, setNouns }) => {
	return (
		<div className="nounArea">
			<h2>German Nouns</h2>
			<p>There are {nouns.length} nouns.</p>
			{nouns.map((noun, i) => {
				return <Noun noun={noun} key={i} nouns={nouns} setNouns={setNouns} />;
			})}
		</div>
	);
};
