export const NounArea = ({ nouns }) => {
	return (
		<div className="nounArea">
			<h2>German Nouns</h2>
			<p>There are {nouns.length} nouns.</p>
			{nouns.map((noun, i) => {
				return (
					<div className="noun" key={i}>
						<div className="article">{noun.article}</div>
						<div className="singular">{noun.singular}</div>
						<div className="plural">{noun.plural}</div>
					</div>
				);
			})}
		</div>
	);
};
