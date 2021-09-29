import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Skill(){

    const skill = useParams().skill;
    const skills = useFetch(`http://localhost:3001/studies?skill=${skill}`);

    return (
        <main className="container skill">
            <section>
                <h3 className="cmTitle">📚 {skill} Study </h3>
                <ul className="studyList">
                    {skills.map(study => (
                        <li key={study.id}>
                            <Link to={`/study/${study.study}`} style={{borderColor: study.bdColor }}> 
                                <span className="title">{study.study}</span> 
                                <span className="date">{study.lately}</span> 
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}