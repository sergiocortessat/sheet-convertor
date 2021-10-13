import React, { useEffect, useState } from 'react'

export default function Renderer() {

    const [name, setName] = useState('')
    const [apiData, setapiData] = useState([])
    const [formInfo, setformInfo] = useState([])
    const [data, setData] = useState('')



    const handleButtonClick = (handler, e) => {
        setName((state) => (
            state === "sergio" ? "juan" : "sergio"
        ))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        setformInfo((prev) => ([
            ...prev, 
            data
        ]))
        setData('')
    }

    const handleChangeClick = (e) => {
        setData(
            e.target.value
)
    }

    const fetchAPi = async () => {
        const response = await fetch("https://api.fbi.gov/wanted/v1/list")
        const json = await response.json()
        return json
    }
    useEffect(() => {
        fetchAPi().then((response) => {
            setapiData(response.items)
        })
    }
        , [])

        return (
        <div>
            {apiData.map((item, index) => (
                <div key={index}>
                    <h1>{item.uid}</h1>
                    <h2>{item.title}</h2>
                    <h3>{item['reward_text'] ? item['reward_text'] : "No information"}</h3>
                </div>
            ))}
            <form onSubmit={handleSubmitClick}>
                <label>
                    Enter your data
                </label>
                <input type="text" value={data} onChange={(e) => handleChangeClick(e)} />
                <button type="submit">Submit</button>
            </form>
            <h1>{name}</h1>
            <button onClick={(e) => handleButtonClick(this, e)}> Change Name</button>

            {formInfo && formInfo.map((item, index) => (
                <div key={index}>
                    <h1>{item}</h1>
                </div>
            ))}
        </div>
    )
}
