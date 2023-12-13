const pg = require('pg');
const express = require('express');
const app = express();
const PORT = 8884;

// CONFIG
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.urlencoded({extended: false}));

// DATABASE
const dbConnectionParams = {
	user: 'nally',
	database: 'spot',
	host: 'localhost'
};

const client = new pg.Client(dbConnectionParams);
client.connect();

// ROUTES

// BROWSE
app.get('/', (req, res) => {
	client.query('SELECT id, question FROM objectives ORDER BY day_id, id;')
		.then((response) => {
			const templateVars = {
				objectives: response.rows
			};
			res.render('home', templateVars);
		})
		.catch((error) => {
			console.log('error', error);
		});
});

// READ
app.get('/objectives/:id', (req, res) => {
	const id = req.params.id;
	if (id) {
		client.query('SELECT id, question, answer, type FROM objectives WHERE id = $1;', [id])
			.then((response) => {
				if (response.rows.length === 0) {
					console.log(`There is no objective with that ID`);
				} else {
					for (let objective of response.rows) {
						console.log(`ID: ${objective.id}`);
						console.log(`Question: ${objective.question}`);
						console.log(`Type: ${objective.type}`);
						console.log(`Answer: ${objective.answer}`);
					}
					const templateVars = {
						id: id,
						question: response.rows[0].question,
						type: response.rows[0].type,
						answer: response.rows[0].answer
					};
					res.render('read', templateVars);
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	} else {
		console.log(`id is not defined`)
	}
});

// EDIT
app.get('/objectives/:id/edit', (req, res) => {

	const id = req.params.id;
	if (id) {
		client.query('SELECT id, question, answer, type FROM objectives WHERE id = $1;', [id])
			.then((response) => {
				if (response.rows.length === 0) {
					console.log(`EDIT: There is no objective with that ID`);
				} else {
					for (let objective of response.rows) {
						console.log(`EDIT ID: ${objective.id}`);
						console.log(`EDIT Question: ${objective.question}`);
						console.log(`EDIT Type: ${objective.type}`);
						console.log(`EDIT Answer: ${objective.answer}`);
					}
					const templateVars = {
						id: id,
						question: response.rows[0].question,
						type: response.rows[0].type,
						answer: response.rows[0].answer
					};
					res.render('edit', templateVars);
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	}
});

app.post('/objectives/:id/edit', (req, res) => {
	const id = req.params.id;
	console.log('req.body', req.body);

	// UPDATE table
	// SET column1 = value1,
	// 		column2 = value2 ,...
	// WHERE
	// 	condition;

	client.query(`UPDATE objectives 
								SET question = $1, 
								type = $2, 
								answer = $3 
								WHERE id = $4;`, [req.body.question, req.body.type, req.body.answer, id])
	.then((response) => {
		console.log('EDIT POST RESPONSE', response);
		res.redirect('/');
	})
	.catch((error) => {
		console.log('EDIT POST ERROR:', error);
	});

});

// DELETE
app.get('/objectives/:id/delete', (req, res) => {
	const id = req.params.id;
	if (id) {
		client.query('DELETE FROM objectives WHERE id = $1;', [id])
			.then((response) => {
				res.redirect('/');
			})
			.catch((error) => {
				console.log(`Error on DELETE attempt`, error);
			});

	}
});


app.listen(PORT, () => {
	console.log(`Server is listening on PORT=${PORT}`);
});