import { Link } from "react-router-dom";
import { useParams } from "react-router";
import dummy from "../db/data.json"

export default function Skill(){

    const skillName = useParams().skill;
    const skillList = dummy.studies.filter(skill => skill.skill === skillName);

    return (
        <main className="container skill">
            <section>
                <h3 className="cmTitle">📚 {skillName} Study </h3>
                <ul className="studyList">
                {skillList.map(study => (
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