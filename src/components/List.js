import React from "react";
class Item extends React.Component {
    render() {
        return <React.Fragment>
            <li>Строка 1</li>
            <li>Строка 2</li>
            <li>Строка 3</li>
        </React.Fragment>
    }
    /*
        То же самое
        render() {
            return <>
                <li>Строка 1</li>
                <li>Строка 2</li>
                <li>Строка 3</li>
            </>
        }
    */
}

class List extends React.Component {
    render() {
        return <ul>
            <Item />
            <Item />
        </ul>
    }
}

export {List, Item};