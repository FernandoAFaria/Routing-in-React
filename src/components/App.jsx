import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import logo from "../assets/logo.png";
import Films from './Films';
import People from './People';
import Film from '../components/Film';
import Person from './Person';

class App extends React.Component {

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                
                <img src={logo} alt=""/><br></br>
                <BrowserRouter>
                    <React.Fragment>
                        <Link to="/" className="btn btn-primary m-3">Home</Link>
                        <Link to="/films" className="btn btn-primary m-3">Films</Link>
                        <Link to="/people" className="btn btn-primary m-3">People</Link>
                        <Switch>
                            
                            <Route exact path="/films" component={Films}></Route>     
                            <Route exact path="/people" component={People}></Route>
                            <Route path="/films/:id" component={Film}></Route>
                            <Route path="/people/:id" component={Person}></Route>
                            <div><h1>Welcome</h1> <h3>Please make your selection</h3></div>
                            
                        </Switch>
                        
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;