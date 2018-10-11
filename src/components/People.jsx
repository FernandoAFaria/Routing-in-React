import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Person from './Person';





class People extends React.Component {
    constructor() {
        super()
        this.state = {
            people: []

        }

    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    people: [...obj]
                })

            })



    }
    render() {
        return (
            <div>
                {this.state.people.map((x) => {
                    return (


                        <React.Fragment key={x.name}>
                            <Link to={`/people/${x.id}`}>
                                <div className="card border-primary mb-3" style={{ minWidth: '20rem' }}>
                                    <div className="card-body">
                                        <h4 className="card-title">Name: {x.name}, Gender: {x.gender}, Age: {x.age}</h4>
                                        <p style={{ textAlign: 'justify' }} className="card-text">{x.description}</p>
                                    </div>
                                </div>
                            </Link>
                           
                        
                        </React.Fragment>
                    )
                })}
            </div>
        );
    }

}

export default People;