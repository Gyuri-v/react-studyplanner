import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./contents.css"
import Header from "./component/Header";
import Main from "./component/Main";
import Skill from "./component/Skill";
import Study from "./component/Study";

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
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
