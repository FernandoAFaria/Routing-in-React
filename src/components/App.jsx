import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import logo from "../assets/logo.png";
import Films from './Films'

class App extends React.Component {

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                
                <img src={logo} alt=""/><br></br>
                <BrowserRouter>
                    <React.Fragment>
                        <Link to="/"><button  className="btn btn-primary m-3">Home</button></Link>
                        <Link to="/films"><button  className="btn btn-primary m-3">Films</button></Link>
                        <Link to="/people"><button  className="btn btn-primary m-3">People</button></Link>
                        <Switch>
                            <Route exact path="/films" component={Films}></Route>     

                        </Switch>
                        
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;