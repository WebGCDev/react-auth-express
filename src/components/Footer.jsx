import React from 'react';
import styles from '../css/modules/Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className={`mt-auto ${styles.footer}`}>
      <div className="container p-4">
        <p>
          Made with <i className="bi bi-heart-fill"></i> by Gaetano Chiapparino
        </p>
      </div>
    </footer>
  );
}

export default Footer;
