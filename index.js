const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.sendfile('index.html')
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
