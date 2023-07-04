import React, { useState, useEffect } from 'react'

// import { Link } from 'react-router-dom'

const Api = () => {

    const [query, setQuery] = useState("bird")

    const [data, setData] = useState([])

    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ca9a1e0d&app_key=d2c30fc5bd6762dbac5b78b1925d68e1&type=public`).then(
            (Response) => Response.json()
        ).then(
            (data) => {
                console.log(data.hits)
                const arrayData = data.hits
                setData(arrayData)
            }
        )

        // return () => {
        //     window.alert("I am going to end")
        // }
        // eslint-disable-next-line
    }, [isClicked])

    return (
      
        <div className='Main'>
            <div className='NavBar'>
        <input onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='Search Recipe'/>
        <button onClick={() => { setIsClicked((prevState) => !prevState) }}>Search</button>
        </div>
         <div className='data_contaner'>
         <div className='Show_data'>
            
        {data.map((item, idx) => {
            return (
                <div className='recipe'>
                    <div className='recipe_item' key={idx}>                                                                                                                               
                        <img src={item.recipe.image} alt="" />
                        <p>{item.recipe.label}</p>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </div>
    )
}

export default Api;
