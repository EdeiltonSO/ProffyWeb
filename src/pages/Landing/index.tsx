import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing(){
    // useState indica que o que estiver
    // dentro dele vai ser considerado como estado
    // esse 0 no useState se chama totalConnections
    // pra alterar ele, eu uso o setTotalConnections
    const [totalConnections, setTotalConnections] = useState(0);

    // useEffect executa uma função (no parâmetro 1) toda vez
    // que uma das variáveis do array (parâmetro 2) for alterada
    // estrutura: useEffect(() => {}, [])
    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div> 
        </div>
    );
}

export default Landing;