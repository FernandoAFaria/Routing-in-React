import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Film from '../components/Film'

class Films extends React.Component {
    constructor(){
        super()
        this.state = {
            films: []
            
        }
    
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    films: [...obj]
                })
            console.log(this.props.match)
        })
    }

    render(){
        return (
            <div>
                {this.state.films.map((x) => {
                   
                    return (
                        
                        <React.Fragment key={x.id}>
                            <Link to={`/films/${x.id}`}>
                            <div  className="card text-white bg-primary mb-3" style={{minWidth: '20rem'}}>
                                <div className="card-header">{x.title}, Released in {x.release_date}</div>
                                <div className="card-body">
                                    <h4 className="card-title">Directed by {x.director},</h4>
                                    <p style={{textAlign: 'justify'}} className="card-text">{x.description}</p>
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

export default Films;