import React from "react"

class AboutClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);

        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        return (
            <>
                <h1>{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count add</button>
            </>
        )
    }
}
export default AboutClass