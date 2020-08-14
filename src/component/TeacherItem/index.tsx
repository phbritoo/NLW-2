import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
          <strong>Paulo Brito</strong>
          <span>Cientista</span>
        </div>
      </header>
      <p>
        cientista entusiasta
        <br />
        <br />
        uma quebra de linha
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$: 21,20</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
