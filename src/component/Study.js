import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Lecture from "./Lecture";

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
                            <Lecture lecture={lecture} key={lecture.id} />
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}