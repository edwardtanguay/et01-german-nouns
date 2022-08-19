export const Noun = ({ noun }) => {
	return (
		<div className="noun">
			<div className="article">{noun.article}</div>
			<div className="singular">{noun.singular}</div>
			<div className="plural">{noun.plural}</div>
		</div>
	);
};
