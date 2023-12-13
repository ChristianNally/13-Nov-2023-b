const pg = require('pg');

const verb = process.argv[2];
const id = process.argv[3];

console.log(`Running Verb: ${verb} with ID: ${id}`);

const dbConnectionParams = {
	user: 'nally',
	database: 'spot',
	host: 'localhost'
};

const client = new pg.Client(dbConnectionParams);

client.connect();

switch (verb) {
	case 'browse':
		client.query('SELECT id, question FROM objectives;')
			.then((response) => {
				//				console.log('response.rows', response.rows);
				for (let objective of response.rows) {
					console.log(`${objective.id}\t${objective.question}`);
				}
				client.end();
			})
			.catch((error) => {
				console.log('error', error);
				client.end();
			});
		break;

	case 'read':
		if (id) {
			client.query('SELECT id, question, answer, type FROM objectives WHERE id = $1;', [id])
				.then((response) => {
					// console.log('response.rows', response.rows);
					if (response.rows.length === 0) {
						console.log(`There is no objective with that ID`);
					} else {
						for (let objective of response.rows) {
							console.log(`ID: ${objective.id}`);
							console.log(`Question: ${objective.question}`);
							console.log(`Type: ${objective.type}`);
							console.log(`Answer: ${objective.answer}`);
						}	
					}
					client.end();
				})
				.catch((error) => {
					console.log('error', error);
					client.end();
				});
		} else {
			console.log(`id is not defined`)
			client.end();
		}
		break;

	// case 'delete':
	// 	if (id) {
	// 		client.query(`DELETE FROM objectives WHERE id = ${id};`)
	// 			.then((response) => {
	// 				console.log('response', response);
	// 				// for (let objective of response.rows) {
	// 				// 	console.log(`ID: ${objective.id}`);
	// 				// 	console.log(`Question: ${objective.question}`);
	// 				// 	console.log(`Type: ${objective.type}`);
	// 				// 	console.log(`Answer: ${objective.answer}`);
	// 				// }
	// 			})
	// 			.catch((error) => {
	// 				console.log('error', error);
	// 			});
	// 	} else {
	// 		console.log(`id is not defined`)
	// 	}
	// 	break;

	default:
		console.log(`${verb} not recognized`);
		client.end();
		break;
}

