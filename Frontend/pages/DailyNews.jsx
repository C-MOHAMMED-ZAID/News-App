import React, { useState, useEffect } from "react"
import axios from "axios"

function DailyNews() {
    const [userForm, setUserForm] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/news/")
            .then((res) => {
                setUserForm(res.data.data);
                console.log(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            }, [userForm]);
    })
    return (
        <div style={{ padding: '30px', backgroundColor: '	#404040', color: 'white', width: '1227px', height: '1000px' }}>
            <h1>Daily News</h1><br />
            <div>

                <div class="row">


                    {userForm.map((news) => {
                        return (

                            <div class="col-sm-6 mb-3 mb-sm-0 p-2">
                                <div class="card">
                                    <h5 class="card-header">{news.title}</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">{news.shortstory}</h5>
                                        <p class="card-text">{news.publisheddate}</p>
                                        <a href={news.storylink} class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>

        </div>

    )
}
export default DailyNews