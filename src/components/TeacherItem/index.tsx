import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/38273608?s=460&u=abd1bf32e2819b46e2980da735678508cb0ca8ea&v=4" alt="Edeilton Oliveira"/>
                <div>
                    <strong>Edeilton Oliveira</strong>
                    <span>Algoritmos e Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de programação.
                <br/><br/>
                The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
            </p>

            <footer>
                <p>
                    Preço/hora <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;