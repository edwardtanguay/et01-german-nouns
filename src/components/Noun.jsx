export const Noun = ({ noun }) => {

	const toggleAnswerIsShowing = (noun) => {
		noun.answerIsShowing = !noun.answerIsShowing;
	}

	return (
		<div className="noun">
			{noun.answerIsShowing && (
				<div className="article">{noun.article}</div>
			)}
			<div className="singular" onClick={() => toggleAnswerIsShowing(noun)}>{noun.singular}</div>
			{noun.answerIsShowing && (
				<div className="plural">{noun.plural}</div>
			)}
		</div>
	);
};
