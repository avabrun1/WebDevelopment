import React from 'react';
import './MissionStatement.css';
import ava from './assets/brunerHeadshot.jpg';
import chelsea from './assets/calalbHeadshot.pdf';
import sophia from './assets/colonelloHeadshot.pdf';
import yoni from './assets/sabagHeadshot.webp';
import riley from './assets/mcgintyHeadshot.jpg';
import tad from './assets/salwanHeadshot.jpeg';
import thomas from './assets/richardsonHeadshot.jpeg';

function MissionStatement() {
    return(
        <div className="missionStatementPage">
            <h1>Mission Statement</h1>
            <p>
            This webpage was made to make learning Spanish & English a fun experience for kids! Through these interactive games, kids and people of all ages can build their understanding of a language while having a good time. Our mission is to create a playful learning environment, while still encouraging curiosity and confidence in a new language. By intertwining education with entertainment, this project entices kids to explore bilingualism in a way that makes you feel like you’re playing, not work!
            </p>

            <h2>Advisory</h2>
            <ul>
                <li>Dr. Osvaldo Tapia-Duenas</li>
                <li>Chelsea Calalb</li>
            </ul>

            <h2>Our Front End Team</h2>
            <ul>
                <li>
                    <img src={ava} alt="Ava Bruner" className="missionStatementPhotos" />
                    <p><strong>Ava Bruner</strong> is majoring in Computer Science, and has gained extensive experience with a variety of programming languages and tools 
                    including SQL, Java, Python, HTML, and CSS. Currently, she is serving JCU at 
                    the IT Service Desk as a Hardware Technician, and Cleveland Clinic as a Software Development Intern. 
                    These experiences equip her with the technical knowledge and organizational skills needed to efficiently lead a dev-team to build a successful educational website.
                    After graduation in May 2025, she will be working at Union Home Mortgage Corp. as an IT Project Coordinator and working towards her CompTIA A+ certification.</p>
                </li>
                <li>
                    <img src={tad} alt="Thaddeus Salwan" className="missionStatementPhotos" />
                    <p><strong>Thaddeus Salwan</strong> is a third year Computer Science student at John Carroll University. He is also minoring in both Business and Data Science.
                    He has experience in programming languages such as Python, Java, HTML, CSS, and SQL. During the Summer of 2025 he will be working at Sherwin Williams
                    as an IT Intern.</p>
                </li>
                <li>
                    <img src={thomas} alt="Thomas Richardson" className="missionStatementPhotos" />

                <p><strong>Thomas Richardson III</strong> is a Junior Computer Science major and Philosophy minor at John Carroll University. He has experience with different coding 
                languages like Python, Java, and HTML, with some added experience with Data Science subjects. He is a football player at JCU and is involved in various organizations.</p>
                </li>
            </ul>
            
            <h2>
                Our Back End Team
            </h2>
            <ul>
                <li>
                    Sophia Colonello</li>
                <li>
                    <img src={yoni} alt="Yoni Sabag" className="missionStatementPhotos" />
                    Yoni Sabag</li>
                <li>
                    <img src={riley} alt="Riley McGinty" className="missionStatementPhotos" />
                    <p><strong>Riley McGinty</strong> is a second year Computer Science major, with a minor in Economics, at John Carroll University. He has expereince in programming
                    with Python, Java, Javascript, and SQL. He is a Resident Assitant and Student Worker at JCU, as well as being involved in multiple organizations.</p>
                </li>
            </ul>
        </div>
    )
}

export default MissionStatement;
