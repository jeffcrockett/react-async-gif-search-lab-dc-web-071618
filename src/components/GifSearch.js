import React from 'react'

export default class GifSearch extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    }

    render() {
        return(
            <div>Find gifs
                <form onSubmit={(e) => {e.preventDefault();
                    this.props.handleFormSubmit(this.state.value)}}>
                <input onKeyUp={this.handleChange} type='text'/>
                <input type="submit" value="Submit"/>
                </form>
                </div>
        )
    }
}