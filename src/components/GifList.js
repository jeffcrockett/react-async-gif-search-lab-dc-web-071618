import React from 'react'

export default class GifList extends React.Component {
    render() {
        return(
            <div>
            <ul>
                {this.props.gifs.length > 0 ? this.props.gifs.map(gif => <li><img src={gif}/></li>) : ''}
                </ul></div>
        )
    }
}