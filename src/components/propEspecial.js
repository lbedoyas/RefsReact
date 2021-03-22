import React, { Component } from 'react'


const FancyInput = React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} />
    </div>
)

)


export class PropEspecial extends Component {

    entrada = React.createRef();

    componentDidMount() {
        console.log(this.entrada);
    }

    render() {
        return (
            <div>
                <h1>Props Especial</h1>
                <br />
                <FancyInput ref={this.entradaRef} />
            </div>
        )
    }
}

export default PropEspecial;
