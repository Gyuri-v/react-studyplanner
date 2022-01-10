import { useRef } from "react"
import { useHistory } from "react-router";

export default function CreateLecture(){
    const history = useHistory();

    const skill = "React";
    const study = "😈 코딩앙마 - 리액트";

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
                alert('생성이 완료 되었습니다.');
                history.push(`/study/${studyRef.current.value}`);
            }
        })
    }

    return(
        <main className="container createLectures">
            <section>
                <h3 className="cmTitle">➕ 강의 추가</h3>

                <form onSubmit={onSubmit}>
                    <div className="formBox">
                        <label className="formtagTit">📑 Skill</label>
                        <input type="text" value={skill} ref={skillRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">📑 Study</label>
                        <input type="text" value={study} ref={studyRef} />
                    </div>
                    <div className="formBox">
                        <label className="formtagTit">📑 강의</label>
                        <input type="text" placeholder="강의 제목" ref={lectureRef} />
                    </div>
                    <button className="btnSmt">강의 저장</button>
                </form>
            </section>
        </main>
    )
}