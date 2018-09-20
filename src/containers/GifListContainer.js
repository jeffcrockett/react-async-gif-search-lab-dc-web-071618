import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: [
        ]
    }

    handleFormSubmit = (input) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`).then(res => res.json()).then(json => {
            console.log(json)
        this.setState({
            gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)
        })
        })
    }

    render() {
        return (
            <div>
            <GifSearch handleFormSubmit={this.handleFormSubmit}/>
            <GifList gifs={this.state.gifs}/>
            </div>
        )
    }


}