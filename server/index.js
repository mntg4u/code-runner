const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;

app.post('/api/run', async (req, res) => {
  const { language, source_code, input } = req.body;
  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
      { language_id: language, source_code, stdin: input },
      { headers: { 'X-RapidAPI-Key': JUDGE0_API_KEY } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Execution failed' });
  }
});

app.listen(5000);
