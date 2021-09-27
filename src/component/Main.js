import { useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json"

export default function Main(){
    const mainSkillTitle = "🤸‍♀️ Let's go Study !";
    const mainLatelyTitle = "🤔 최근 Study";

    return (
        <main className="container main">
            <section className="mainSkill">
                <h3 className="cmTitle"> { mainSkillTitle } </h3>
                <ul className="skillList">
                    {dummy.skills.map(skill => (
                        <li key={skill.id}>
                            <Link to={`/skill/${skill.skill}`} style={{background: skill.bgColor }}> 
                                {skill.skill} 
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mainLately">
                <h3 className="cmTitle"> { mainLatelyTitle } </h3>
                <ul className="studyList">
                {dummy.studies.map(study => (
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