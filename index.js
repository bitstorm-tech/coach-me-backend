import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('It works ...');
});

app.listen(PORT, () => {
	console.log(`Server started successfully, listening on port ${PORT}`);
});
