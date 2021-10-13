import React, { Component } from 'react'

export default class Renderer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "sergio",
            apiData: [],
            formInfo: [], 
            data: ''
        }
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    }


handleButtonClick = (handler,e) => {
this.setState((state) => ({
    name: state.name === "sergio" ? "juan" : "sergio"
}))
}

handleSubmitClick = (e) => {
    e.preventDefault()
    console.log(e);
    this.setState((prev) => ({ 
        formInfo: [...prev.formInfo, this.state.data]
    }))
}

handleChangeClick = (e) => {
    this.setState({
        data: e.target.value
    })
}

fetchAPi = async () => {
    const response = await fetch("https://api.fbi.gov/wanted/v1/list")
    const json = await response.json()
    return json
}

componentDidMount() {
    this.fetchAPi().then((response) => {
        this.setState({
            apiData: response.items
        })
    })
}

render() {
    console.log(this.state.formInfo);
        return (
            <div>
                {this.state.apiData.map((item, index) => (
                <div key={index}>
                    <h1>{item.uid}</h1>
                    <h2>{item.title}</h2>
                    <h3>{item['reward_text'] ? item['reward_text'] : "No information" }</h3>
                </div>
                ))}
                <form onSubmit={this.handleSubmitClick}>
                    <label>
                        Enter your data 
                    </label>
                    <input type="text" value={this.state.data} onChange={(e) => this.handleChangeClick(e)} />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={(e) => this.handleButtonClick(this,e)}> Change Name</button>

                {this.state.formInfo.map((item, index) => (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                ))}
            </div>
        )
    }
}
