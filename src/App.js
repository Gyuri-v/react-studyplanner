import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./contents.css"
import Header from "./component/Header";
import Main from "./component/Main";
import Skill from "./component/Skill";
import Study from "./component/Study";
import CreateSkill from "./component/CreateSkill";
import CreateStudy from "./component/CreateStudy";
import CreateLecture from "./component/CreateLecture";

function App() {
    return ( 
        <BrowserRouter>
            <div className = "App" >
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/skill/:skill">
                        <Skill />
                    </Route>
                    <Route path="/study/:study">
                        <Study />
                    </Route>
                    <Route path="/create_skill">
                        <CreateSkill />
                    </Route>
                    <Route path="/create_study">
                        <CreateStudy />
                    </Route>
                    <Route path="/create_lecture">
                        <CreateLecture />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
