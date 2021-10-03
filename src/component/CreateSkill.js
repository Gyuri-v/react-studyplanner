import dummy from "../db/data.json"
import { useRef } from "react";
import { useHistory } from "react-router";

export default function CreateSkill(){
    const skillRef = useRef(null); // dom 에 접근할 수 있게 해줌
    const colorRef = useRef(null);
    const history = useHistory();
    
    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/skills`, {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json', // 보내는 리소스의 타입
                },
                body: JSON.stringify({ 
                    skill: skillRef.current.value,
                    bgColor: colorRef.current.value
                })
            })
            .then(res => { // 응답 받아서
                if( res.ok ){
                    alert('생성이 완료 되었습니다.');
                    history.push(`/skill/${skillRef.current.value}`)
                }
            }
        );
    }

    return(
        <main className="container createSkill">
            <section>
                <h3 className="cmTitle">➕ Skill 추가</h3>
                <div className="skillListWrap">
                    <p className="formtagTit">🤔 현재 나의 Skill List</p>
                    <ul className="skillList">
                        {dummy.skills.map(skill => (
                            <li key={skill.id}>
                                <a style={{background: skill.bgColor }}> 
                                    {skill.skill} 
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="formBox">
                        <label className="formtagTit">📑 추가할 Skill</label>
                        <input type="text" placeholder="Skill 이름" ref={skillRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">📑 Skill Color</label>
                        <input type="text" placeholder="#000000" ref={colorRef} />
                    </div>
                    <button className="btnSmt">Skill 저장</button>
                </form>
            </section>
        </main>
    );
}