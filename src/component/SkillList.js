import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function SkillList(){
    const skills = useFetch('http://localhost:3001/skills');
    return(
        <ul className="skillList">
            {skills.map(skill => (
                <li key={skill.id}>
                    <Link to={{pathname: `/skill/${skill.skill}`, state: { id: skill.id }}} style={{background: skill.bgColor }}>
                        {skill.skill} 
                    </Link>
                </li>
            ))}
        </ul>
    );
}