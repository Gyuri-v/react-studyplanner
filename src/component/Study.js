import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Study(){

    const study = useParams().study;
    const studies = useFetch(`http://localhost:3001/lectures?study=${study}`);

    return (
        <main className="container study">
            <section>
                <h3 className="cmTitle">{ study }</h3>
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