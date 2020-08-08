import React from 'react';
import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem1() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/54437398?s=460&u=4f22076e32e3eee43368eb53156ccfc3e5401111&v=4"
          alt="Lorison Gilles"
        />
        <div>
          <strong>Lorison Gilles</strong>
          <span>Modelagem / Desenho 3D</span>
        </div>
      </header>
      <p>
        Aulas de modelagem 3D bem estruturadas e expositiva.
        <br /> <br />
        Um mágico, esse é o sinonimo de Gilles, proprietário da Gilles Design 7, esse mano ai faz qualquer produto se tornar realidade, tudo começando pela modelagem 3D.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem1;