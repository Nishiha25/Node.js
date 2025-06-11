const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  res.send('Hello, user!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
