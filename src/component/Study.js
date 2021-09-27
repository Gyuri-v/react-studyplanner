import { Link } from "react-router-dom";
import { useParams } from "react-router";
import dummy from "../db/data.json"

export default function Study(){

    const studyName = useParams().study;
    const studyList = dummy.lectures.filter(lecture => lecture.study === studyName );

    return (
        <main className="container study">
            <section>
                <h3 className="cmTitle">{ studyName }</h3>
                <table className="studyTbl">
                    <thead> 
                        <tr>
                            <th>학습명</th>
                            <th>완료</th>
                            <th>완료일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studyList.map(lecture => (
                            <tr key={lecture.id} className={lecture.isDone ? 'off' : ''}>
                                <td className="subject">{lecture.lecture}</td>
                                <td className="finChk">
                                    <input type="checkbox" checked={lecture.isDone} id="finChk1" />
                                    <label htmlFor="finChk1"></label>
                                </td>
                                <td className="finDate">{lecture.findate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}