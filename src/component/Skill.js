import { useHistory, useParams } from "react-router";
import StudyList from "../component/StudyList";
import React from "react";
import dummy from "../db/data.json";

export default function Skill(){

    const skill = useParams().skill;
    const skillName = skill;
    const skillId = (dummy.skills.filter( skill => skill.skill === skillName ))[0].id;
    const history = useHistory();

    function Del(){
        if( window.confirm('정말로 삭제하시겠습니까?') ){
            fetch(`http://localhost:3001/skills/${skillId}`,{
                method: 'DELETE',
            })
            .then(res => {
                if( res.ok ){
                    alert('삭제가 완료 되었습니다.');
                    history.push(`/`);
                }
            })
        }
    }

    return (
        <main className="container skill">
            <section>
                <h3 className="cmTitle">
                    📚 {skill} Study
                    <button className="btnDel" onClick={Del}>삭제</button>
                </h3>
                <StudyList skill={skill} />
            </section>
        </main>
    );
}