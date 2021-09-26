import {BrowserRouter, Router, Switch} from 'react-router-dom';
import "./contents.css"
import Header from "./component/Header";

function App() {
    return ( 
        <BrowserRouter>
            <div className = "App" >
                <Header></Header>
            </div>
        </BrowserRouter>
    );
}

export default App;
