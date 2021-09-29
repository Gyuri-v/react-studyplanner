import { Link } from "react-router-dom";
import dummy from "../db/data.json"

export default function SkillList(){
    return(
        <ul className="skillList">
            {dummy.skills.map(skill => (
                <li key={skill.id}>
                    <Link to={`/skill/${skill.skill}`} style={{background: skill.bgColor }}> 
                        {skill.skill} 
                    </Link>
                </li>
            ))}
        </ul>
    );
}