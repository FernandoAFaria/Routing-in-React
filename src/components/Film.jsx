import React from 'react';


class Film extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filmInfo: []
        }
}
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films/' + this.props.match.params.id)
        .then(res => res.json())
        .then(obj => {
            this.setState({
                filmInfo: obj
            })
        })
    }
    render(){
        
        return(
            <div>
            <h1>{this.state.filmInfo.title}</h1>
            <h4>Directed by: {this.state.filmInfo.director}</h4>
            <h4>Producer: {this.state.filmInfo.producer}</h4>
            <h4>Release Date: {this.state.filmInfo.release_date}</h4>
            <h4>Rotten Tomatoe Score: {this.state.filmInfo.rt_score}</h4>
            <p>{this.state.filmInfo.description}</p>
            </div>
        )
    }

}
export default Film;