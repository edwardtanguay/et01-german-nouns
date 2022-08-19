export const Noun = ({ noun }) => {
	return (
		<div className="noun">
			{noun.answerIsShowing && (
				<div className="article">{noun.article}</div>
			)}
			<div className="singular">{noun.singular}</div>
			{noun.answerIsShowing && (
				<div className="plural">{noun.plural}</div>
			)}
		</div>
	);
};
