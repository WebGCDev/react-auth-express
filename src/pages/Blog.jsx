import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const articles = [
  {
    id: 1,
    title: "Nations League, l'Italia travolge gli Usa e vola in semifinale!",
    summary:
      'Prosegue il cammino in VNL delle azzurre. Nella prima sfida da dentro o fuori della stagione, l’Italia ha battuto gli USA 3-0',
    image: image9,
  },
  {
    id: 2,
    title:
      'VNL MASCHILE: VITTORIA PER 3-0 SULLA BULGARIA E ACCESSO ALLA FINAL EIGHT',
    summary:
      " L'Italia torna a sorridere vincendo la sua prima della week 3 in Slovenia per 3-0 (27-25, 25-20, 25-21) sulla Bulgaria di Blengini, l'ottava di questa VNL che riporta temporaneamente gli azzurri in vetta alla classifica per oggi, in attesa della gara di questa sera della Slovenia.",
    image: image10,
  },
];

function Blog() {
  return (
    <div className="container mt-5">
      <h1>Blog</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
                <Link to={`/post/${article.id}`}>
                  <Button variant="primary">Leggi di più</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
