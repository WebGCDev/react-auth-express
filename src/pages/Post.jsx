import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const articles = [
  {
    id: 1,
    title: "Nations League, l'Italia travolge gli Usa e vola in semifinale! ",
    content:
      "Prosegue il cammino in VNL delle azzurre. Nella prima sfida da dentro o fuori della stagione, l’Italia ha battuto gli USA 3-0 (25-21; 25-21; 25-23) nel match valido per i quarti di finale di Volleyball Nations League staccando il pass per le semifinali, in programma domani alle ore 12:00 italiane, contro la vincente di Turchia-Polonia. Al PalaHuamark di Bangkok capitan Danesi e compagne, sostenute anche dal vice presidente federale, Adriano Bilato, hanno bissato il successo di Fukuoka costringendo alla resa gli USA di coach Kiraly dimostrando di essere in un ottimo momento di forma fisico e tecnico. Best scorer del match una straripante Paola Egonu (20 punti) che ha guidato le sue verso un successo tanto prestigioso quanto importante. Da segnalare la presenza in tribuna dell'ambasciatore italiano a Bangkok, Paolo Dionisi (nella foto con le azzurre al termine del match). Si resta dunque a Bangkok dove domani le azzurre si giocheranno l’accesso ad una finalissima disputata e vinta l’ultima volta nel 2022 ad Ankara.",
    image: image9,
  },
  {
    id: 2,
    title:
      'VNL MASCHILE: VITTORIA PER 3-0 SULLA BULGARIA E ACCESSO ALLA FINAL EIGHT',
    content:
      "L'Italia torna a sorridere vincendo la sua prima della week 3 in Slovenia per 3-0 (27-25, 25-20, 25-21) sulla Bulgaria di Blengini, l'ottava di questa VNL che riporta temporaneamente gli azzurri in vetta alla classifica per oggi, in attesa della gara di questa sera della Slovenia con la matematica certezza di partecipare alle Final Eight in programma a Lodz, in Polonia, dal 27 al 30 giugno.Momento chiave della gara sicuramente la reazione sul finale di primo set che ha permesso agli azzurri di ribaltare la situazione che ha visto la Bulgaria sempre avanti, per poi conquistare con facilità secondo e terzo set grazie anche all'innesto in campo di Bottolo, best scorer con 15 punti, e Gironi nel corso della gara. 5 i muri di squadra per l'Italia, 2 quelli personali di Sanguinetti che ha concluso la gara mettendo a terra 9 palloni. Nella Bulgaria in evidenza Asparuhov, Antov e Simeon Nikolov, fratello minore di Alex, nel doppio ruolo di palleggiatore e attaccante in alcune fasi.Giornata di pausa domani per gli azzurri che torneranno in campo sabato alle 20.30 contro i padroni di casa della Slovenia. La gara sarà trasmessa sulle piattaforme DAZN e VBTV.",
    image: image10,
  },
];

function Post() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Articolo non trovato</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </Col>
        <Col md={4}>
          <Image src={article.image} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
