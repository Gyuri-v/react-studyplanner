import { useRef } from "react"
import { useHistory } from "react-router";

export default function CreateLecture(){
    const history = useHistory();

    const skill = "React";
    const study = "π μ½λ©μλ§ - λ¦¬μ‘νΈ";

    const skillRef = useRef(null);
    const studyRef = useRef(null);
    const lectureRef = useRef(null);

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/lectures`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                skill: skillRef.current.value,
                study: studyRef.current.value,
                lecture: lectureRef.current.value,
                isDone: false,
                finDate: '',
            })
        })
        .then(res => {
            if( res.ok ){
                alert('μμ±μ΄ μλ£ λμμ΅λλ€.');
                history.push(`/study/${studyRef.current.value}`);
            }
        })
    }

    return(
        <main className="container createLectures">
            <section>
                <h3 className="cmTitle">β κ°μ μΆκ°</h3>

                <form onSubmit={onSubmit}>
                    <div className="formBox">
                        <label className="formtagTit">π Skill</label>
                        <input type="text" value={skill} ref={skillRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">π Study</label>
                        <input type="text" value={study} ref={studyRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">π κ°μ</label>
                        <input type="text" placeholder="κ°μ μ λͺ©" ref={lectureRef} />
                    </div>
                    <button className="btnSmt">κ°μ μ μ₯</button>
                </form>
            </section>
        </main>
    )
}