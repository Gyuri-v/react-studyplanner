import SkillList from "../component/SkillList";
import StudyList from "../component/StudyList";

export default function Main(){
    const mainSkillTitle = "🤸‍♀️ Let's go Study !";
    const mainLatelyTitle = "🤔 최근 Study";

    return (
        <main className="container main">
            <section className="mainSkill">
                <h3 className="cmTitle"> { mainSkillTitle } </h3>
                <SkillList />
            </section>
            <section className="mainLately">
                <h3 className="cmTitle"> { mainLatelyTitle } </h3>
                <StudyList />
            </section>
        </main>
    );
}