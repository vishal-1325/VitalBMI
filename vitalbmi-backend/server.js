const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Yeh CORS enable karega

app.get('/api/test', (req, res) => {
  res.json({ message: "Backend chalu hai!" });
});

app.post('/api/profile', (req, res) => {
  const { name, age } = req.body;
  let profiles = require('./data/profiles.json');
  profiles.push({ name, age, id: Date.now() });
  fs.writeFileSync('./data/profiles.json', JSON.stringify(profiles, null, 2));
  res.json({ success: true, message: "Profile saved!" });
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} pe chalu hai`);
});


app.post('/api/profile', (req, res) => {
  const { name, age } = req.body;
  let profiles = require('./data/profiles.json');
  profiles.push({ name, age, id: Date.now() });
  fs.writeFileSync('./data/profiles.json', JSON.stringify(profiles, null, 2));
  res.json({ success: true, message: "Profile saved!" });
});