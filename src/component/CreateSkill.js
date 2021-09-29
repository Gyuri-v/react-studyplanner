import dummy from "../db/data.json"

export default function CreateSkill(){
    return(
        <main className="container createSkil">
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

                <form action="">
                    <div className="formBox">
                        <label className="formtagTit">📑 추가할 Skill</label>
                        <input type="text" placeholder="Skill 이름" />
                    </div>
                    <button className="btnSmt">Skill 저장</button>
                </form>
            </section>
        </main>
    );
}