import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import StudyList from "../component/StudyList";

export default function Skill(){

    const skill = useParams().skill;
    const skills = useFetch(`http://localhost:3001/studies?skill=${skill}`);

    return (
        <main className="container skill">
            <section>
                <h3 className="cmTitle">📚 {skill} Study </h3>
                <StudyList skill={skill} />
            </section>
        </main>
    );
}