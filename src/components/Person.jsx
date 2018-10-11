import React from 'react';


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            film: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/' + this.props.match.params.id)
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    person: obj
                })
            })
   
    }
    render() {

        return (
            <div>
                <h1>{this.state.person.name}</h1>
                <h4>Age: {this.state.person.age}</h4>
                <h4>Gender: {this.state.person.gender}</h4>
                <h4>Eye Color:  {this.state.person.eye_color}</h4>
                <h4>Hair Color: {this.state.person.hair_color}</h4>
                <p>{this.state.person.films}</p>
            </div>
        )
    }

}
export default Person;