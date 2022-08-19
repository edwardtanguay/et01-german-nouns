export const Noun = ({ noun, setNouns, nouns }) => {
	const toggleAnswerIsShowing = (noun) => {
		noun.answerIsShowing = !noun.answerIsShowing;
		setNouns([...nouns]);
	};

	return (
		<div className="noun" onClick={() => toggleAnswerIsShowing(noun)}>
			<div className="singular">{noun.singular}</div>
			{noun.answerIsShowing && (
				<div className="article">{noun.article}</div>
			)}
			{noun.answerIsShowing && (
				<div className="plural">{noun.plural}</div>
			)}
		</div>
	);
};
