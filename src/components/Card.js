import React from "react";

const CardContext = React.createContext();

class CardText extends React.Component {
    render() {
        return <div className="card-text">
            <CardContext.Consumer> 
                {(context) => {
                    return <React.Fragment> 
                        {context.state.name}
                        <button onClick={context.updateActive}>Change</button>
                    </React.Fragment>
                }}
            </CardContext.Consumer>
        </div>
    }
}

class CardChange extends React.Component {
    render() {
        return (
            <CardContext.Consumer>
                {(context) => {
                    if (context.state.changeActive) {
                        return <input type="text" defaultValue={context.state.name} onChange={context.updateName}/>
                    }
                }}
            </CardContext.Consumer>
        )
    }
}

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Маргарита",
            changeActive: false,
            input: null
        }
    }
    render() {
        let ctx = {
            state: this.state,
            updateName: (e) => {
                this.setState({
                    input: e.target.value
                });
            },
            updateActive: () => {
                if (this.state.changeActive) {
                    this.setState({
                        name: this.state.input
                    });
                }
                this.setState({
                    changeActive: !this.state.changeActive
                });
            }
        }
        return (
            <CardContext.Provider value={ctx}>
                <div>
                    <h2>Pizza</h2>
                    <CardText/>
                    <CardChange/>
                </div>
            </CardContext.Provider>
        )
    }
}

/*
* Redux;
* Flux;
* React.Context
* */