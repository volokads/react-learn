import { Component, Fragment } from "react"

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            clicked: false
        }
    }
    static defaultProps = {
        name: "Add"
    }
    
    handleAdd = () => {
        
        for (let i = 0; i < 3; i += 1) {

            console.log('before', this.state.clicked);

            this.setState((prev) => {
                console.log("i", i);
                console.log("prev", !prev.clicked);
                return {
                    clicked: !prev.clicked
                }
            })
            console.log("after", this.state.clicked);
        }
    }
    render() {
        const { name} = this.props
        return(
            <>
            <p>{ this.state.clicked.toString()}</p>
            <button type="button" onClick={this.handleAdd}>
            {name}
            </button>
            </>)
    }
}
export { Button }