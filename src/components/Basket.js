import React from "react";

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    render() {
        return <div>
            {this.state.items.map(it => <div>{it.name}</div>)}
        </div>
    }
}