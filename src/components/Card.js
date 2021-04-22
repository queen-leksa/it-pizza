import React from "react";

export default class Card extends React.Component {
    clickHndlr() {
        
    }
    render() {
        return <div data-id={this.props.id}>
            {this.props.name}
        </div>
    }
}