export const Noun = ({ noun, setNouns, nouns }) => {
	const toggleAnswerIsShowing = (noun) => {
		noun.answerIsShowing = !noun.answerIsShowing;
		setNouns([...nouns]);
	};

	return (
		<div className={noun.answerIsShowing ? 'noun backShowing' : 'noun frontShowing'} onClick={() => toggleAnswerIsShowing(noun)}>
			{!noun.answerIsShowing && (
				<div className="front">{noun.singular}</div>
			)}
			{noun.answerIsShowing && (
				<div className="back"><span className={noun.article}>{noun.article}</span> <span className="singular">{noun.singular}</span><span className="separator"> - </span><span className={noun.article}>{noun.plural}</span></div>
			)}
		</div>
	);
};
