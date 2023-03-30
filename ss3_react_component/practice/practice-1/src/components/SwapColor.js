import { Component } from "react";

class SwapColor extends Component{

    constructor(props){
        super(props);
        this.state = {
            color: "red"
        }
    }

    swapColorFuntion(){
        setTimeout(() =>{
            this.setState({color:"black"})
        }, 5000);

    }

    componentDidMount() {
        this.swapColorFuntion();
    }

    render(){
        return(

            <div>
                <div
                    style={{backgroundColor: this.state.color,
                            paddingTop: 20,
                            width: 400,
                            height: 80,
                            margin: "auto"}}>

                </div>
            </div>
        )
    }
}

export default SwapColor