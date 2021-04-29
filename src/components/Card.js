import React from "react";

const CardContext = React.createContext();

class CardText extends React.Component {
    render() {
        return <div className="card-text">
            <CardContext.Consumer> {
                (context) => {
                    console.log(context);
                    return (
                        <React.Fragment>
                            {context.state.name}
                            <button onClick={context.updateActive}>Change</button>
                        </React.Fragment>
                    )
                }
            }

            </CardContext.Consumer>
        </div>
    }
}

class CardChange extends React.Component {
    render() {
        return <div className="card-change">
            <input type="text"/>
        </div>
    }
}

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Маргарита",
            changeActive: false
        }
    }
    render() {
        return (
            <CardContext.Provider value={{
                state: this.state,
                updateName: (name) => {
                    this.setState({
                        name: name
                    });
                },
                updateActive: () => {
                    this.setState({
                        changeActive: !this.state.changeActive
                    })
                }
            }}>
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