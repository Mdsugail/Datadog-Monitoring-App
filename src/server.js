
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const { body } = req;
  console.log('Received webhook data:', body);

  // Handle the webhook data and update the UI as needed
  // ...

  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
