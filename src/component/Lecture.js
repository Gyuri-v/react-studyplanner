import { useState } from "react";

export default function Lecture({ lecture }){

    const [isDone, setIsDone] = useState(lecture.isDone);
    const inpId = lecture.id;

    function toggleDone(){
        //setIsDone(!isDone)
        fetch(`http://localhost:3001/lectures/${lecture.id}`, {
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json', // 보내는 리소스의 타입
            },
            body: JSON.stringify({ // 수정한 정보를 실어서 보내기 위해 바디에 입력 /JSON.stringify- 문자열 반환을 위해
                ...lecture, // 해당데이터에
                isDone : !isDone // 해당 내용 전달
            })
        })
        .then(res => { // 응답 받아서
            if( res.ok ){
                setIsDone(!isDone)
            }
        }
        );
    }

    return(
        <tr key={lecture.id} className={isDone ? 'off' : ''}>
            <td className="subject">{lecture.lecture}</td>
            <td className="finChk">
                <input type="checkbox" checked={isDone} onChange={toggleDone} id={inpId} />
                <label htmlFor={inpId}></label>
            </td>
            <td className="finDate">{lecture.findate}</td>
        </tr>
    );
}