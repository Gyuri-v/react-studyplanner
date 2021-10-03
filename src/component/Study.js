import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Lecture from "./Lecture";
import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function Study(){

    const study = useParams().study;
    const studies = useFetch(`http://localhost:3001/lectures?study=${study}`);

    const studyName = study;
    const studyId = (dummy.studies.filter( study => study.study === studyName ))[0].id;
    const history = useHistory();

    function Del(){
        if( window.confirm('정말로 삭제하시겠습니까?') ){
            fetch(`http://localhost:3001/studies/${studyId}`,{
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
        <main className="container study">
            <section>
                <h3 className="cmTitle">
                    { study }
                    <button className="btnDel" onClick={Del}>삭제</button>
                </h3>
                <table className="studyTbl">
                    <thead> 
                        <tr>
                            <th>학습명</th>
                            <th>완료</th>
                            <th>완료일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studies.map(lecture => (
                            <Lecture lecture={lecture} key={lecture.id} />
                        ))}
                    </tbody>
                </table>
                <Link to="/create_lecture" className="btnAddLecture">강의 추가</Link>
            </section>
        </main>
    );
}