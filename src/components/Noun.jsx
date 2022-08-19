export const Noun = ({ noun, setNouns, nouns }) => {

	const toggleAnswerIsShowing = (noun) => {
		noun.answerIsShowing = !noun.answerIsShowing;
		setNouns([...nouns]);
	}

	return (
		<div className="noun">
			<div className="singular" onClick={() => toggleAnswerIsShowing(noun)}>{noun.singular}</div>
			{noun.answerIsShowing && (
				<div className="article">{noun.article}</div>
			)}
			{noun.answerIsShowing && (
				<div className="plural">{noun.plural}</div>
			)}
		</div>
	);
};
