export default async function mock_fetch(path, config) {
	let data = getData(path);

	return {
		status: 200,
		json: async () => {
			return data;
		},
	};
}

function getData(path) {
	let match = null;

	match = path.match(/^https?:\/\/[^\/]+\/AccomplishmentById\?id=(.*)$/);
	if (match) {
		return {
			accomplishmentID: match[1],
			objectiveID: match[1],
			userID: match[1],
			points: 10,
			proof: '## Hello World',
			timestamp: new Date().toJSON(),
		};
	}

	match = path.match(/^https?:\/\/[^\/]+\/ObjectiveById\?id=(.*)$/);
	if (match) {
		return {
			objectiveID: match[1],
			title: 'Foo Bar',
			description: '## Foo Bar',
			basePoints: 10,
			location: {
				lat: 0,
				long: 0,
			},
		};
	}

	match = path.match(/^https?:\/\/[^\/]+\/UserById\?id=(.*)$/);
	if (match) {
		return {
			userID: match[1],
			userPicture: `https://github.com/identicons/${ match[1] }.png`,
			userRating: 1000,
		};
	}

	throw new Error(`Invalid mock URL: ${ path }`);
}
