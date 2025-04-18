import React from 'react';
import './MissionStatement.css';

function MissionStatement() {
    return(
        <div className="missionStatementPage">
        <h1>Mission Statement</h1>
        <p>
        This webpage was made to make learning Spanish & English a fun experience for kids! Through these interactive games, kids and people of all ages can build their understanding of a language while having a good time. Our mission is to create a playful learning environment, while still encouraging curiosity and confidence in a new language. By intertwining education with entertainment, this project entices kids to explore bilingualism in a way that makes you feel like you’re playing, not work!
        </p>
        <h2>Our Front End Team</h2>
        <ul>
            <li>
            <img src="/brunerHeadshot.jpg" alt="Ava Bruner" />
            Majoring in Computer Science, <strong>Ava Bruner</strong> has gained extensive experience with a variety of programming languages and tools 
            including SQL, Java, Python, HTML, and CSS. Currently, she is serving JCU at 
            the IT Service Desk as a Hardware Technician, and Cleveland Clinic as a Software Migration Intern. 
            These experiences equip her with the technical knowledge and organizational skills needed to effeciently lead a dev-team to build a successful educational website.
             After graduation in May 2025, she will be working at Union Home Mortgage Corp. as an IT Project Coordinator intern and working towards her CompTIA A+ certification.
            </li>
            <li>
                Thaddeus Salwan
            </li>
            <li>
                Thomas Richardson
            </li>
        </ul>
        </div>
    )
}

export default MissionStatement;
