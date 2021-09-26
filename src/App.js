import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./contents.css"
import Header from "./component/Header";
import Main from "./component/Main";
import Skill from "./component/Skill";

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
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
