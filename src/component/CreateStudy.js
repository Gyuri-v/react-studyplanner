import { useRef } from "react"
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch"

export default function CreateStudy(){
    const skills = useFetch("http://localhost:3001/skills");
    const history = useHistory();

    const skillRef = useRef(null);
    const studyRef = useRef(null);
    const colorRef = useRef(null);

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/studies`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                skill: skillRef.current.value,
                study: studyRef.current.value,
                bgColor: colorRef.current.value,
                isDone: false,
            })
        })
        .then(res => {
            if( res.ok ){
                alert('생성이 완료 되었습니다.');
                history.push(`/study/${studyRef.current.value}`);
            }
        })
    }

    return(
        <main className="container createSkil">
            <section>
                <h3 className="cmTitle">➕ Study 추가</h3>

                <form onSubmit={onSubmit}>
                    <div className="formBox">
                        <label className="formtagTit">📑 Skill 종류</label>
                        <select name="" id="" ref={skillRef}>
                            {skills.map(skill => (
                                <option key={skill.id} value={skill.skill}>{skill.skill}</option>
                            ))}
                        </select>
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">📑 추가할 Study</label>
                        <input type="text" placeholder="Skill 이름" ref={studyRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">📑 Skill Color</label>
                        <input type="text" placeholder="#000000" ref={colorRef} />
                    </div>
                    <button className="btnSmt">Skill 저장</button>
                </form>
            </section>
        </main>
    )
}