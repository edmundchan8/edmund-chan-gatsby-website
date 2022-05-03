import React, { useEffect, useState } from 'react'

function NewsApi() {
    const [query, setQuery] = useState();
    const [newQuery, setNewQuery] = useState('money');
    const [totalResults, setTotalResults] = useState(0);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    function handleChange(event){
        setQuery(event.target.value);
    }

    function handleSubmit(event){
        setNewQuery(query);;
        //event.preventDefault();
    }

    useEffect(() => {
        const axios = require("axios");
        console.log(newQuery)
        const options = {
            method: 'GET',
            url: 'https://newsapi.org/v2/everything',
            withCredentials: false,
            params: {
                q: newQuery,
                searchIn: "content",
                from: "2022-04-30",
                language: "en",
                pageSize: "30"
            },
            headers: {
                'X-Api-Key': '5831942ed45a4706a7c5d3767b66d544',
                'Authorization': '5831942ed45a4706a7c5d3767b66d544',
                'Access-Control-Allow-Origin': '*'
            }
        };
    
        axios.request(options).then(function (response) {
            setTotalResults(response.data.totalResults);
            console.log(response.data['articles'][0]);
            setTitle(response.data['articles'][0]['title']);
            setDescription(response.data['articles'][0]['description']);
        }).catch(function (error) {
            console.error(error);
        });
    }, [newQuery])
    
    return (
        <div>
            <p>Your query was {query}</p>
            <p>Total Results: {totalResults}</p>

            <h4>{title}</h4>
            <p>{description}</p>

            <h3>Enter a query term to search for</h3>
            <label>Query:
            <input type="text" value={query} onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default NewsApi