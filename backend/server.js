const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const users = []; // Simulare Database utenti

let posts = [
  { id: 1, title: 'Primo Articolo', content: 'Contenuto del primo articolo' },
];

// Endpoint di registrazione, ho visto che non è necessario farlo ma è molto utile
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

// Endpoint di login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token, username: user.username });
});

// Middleware di autenticazione
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Endpoint che ci farà tenere tutti gli articoli
app.get('/api/posts', authenticateToken, (req, res) => {
  res.json(posts);
});

// Endpoint per aggiungere un nuovo articolo
app.post('/api/posts', authenticateToken, (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Endpoint per modificare un articolo
app.put('/api/posts/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = posts.find((post) => post.id === parseInt(id));
  if (post) {
    post.title = title;
    post.content = content;
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Endpoint per cancellare un articolo
app.delete('/api/posts/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
