import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function StudyList({ skill }){
    const studies = useFetch(`http://localhost:3001/studies?skill=${skill}`);
    return(
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
    );
}