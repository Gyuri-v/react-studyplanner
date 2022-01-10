import SkillList from "../component/SkillList";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
// import StudyList from "../component/StudyList";

export default function Main(){
    const mainSkillTitle = "🤸‍♀️ Let's go Study !";
    const mainLatelyTitle = "🤔 최근 Study";

    const studies = useFetch(`http://localhost:3001/studies`);

    return (
        <main className="container main">
            <section className="mainSkill">
                <h3 className="cmTitle"> { mainSkillTitle } </h3>
                <SkillList />
            </section>
            <section className="mainLately">
                <h3 className="cmTitle"> { mainLatelyTitle } </h3>
                {/* <StudyList /> */}
                <ul className="studyList">
                    {studies.map(study => (
                        <li key={study.id}>
                            <Link to={`/study/${study.study}`} style={{borderColor: study.bdColor }}> 
                                <span className="title">{study.study}</span> 
                                {/* <span className="date">{study.lately}</span>  */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}