import React, { Component } from 'react';

class Entrada extends Component{

    constructor(){
        super()

        this.entrada = React.createRef();
    }

    componentDidMount() {
        this.focus();
    }

    focus = () => {
        console.log(this.entrada);
        this.entrada.current.focus();
    }
    blur = () => {
        this.entrada.current.blur();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.entrada} />
                <button onClick={this.focus}>
                    Focus
                </button>
                <button onClick={this.blur}>
                    Blur
                </button>
            </div>
            
        )
    }
}




export class RefsBasic extends Component {
    render() {
        return (
            <div>
                <h1>Refs Basicas</h1>
                <br />
                <Entrada />
            </div>
        )
    }
}

export default RefsBasic
