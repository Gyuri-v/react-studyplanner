import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./contents.css"
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
    return ( 
        <BrowserRouter>
            <div className = "App" >
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
