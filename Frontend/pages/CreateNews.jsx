import React, { useState } from "react";
import axios from "axios"

function CreateNews() {
  const [userForm,setUserForm]=useState({
    title: "",
    shortstory: "",
    publisheddate: "",
    storylink: "",
    
  });

  const inputsHandler=(e)=>{
    setUserForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/news/create-news",userForm)
    .then((res)=>{
      console.log(res.data);
      setUserForm({
        title: "",
        shortstory: "",
        publisheddate: "",
        storylink: "",
      })
    })
  }
  return(
    <div>
      <div className='form-wrapper' style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Title</label>
            <input type="text" name="title" id="title" className='form-control' value={userForm.title} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Short Story</label>
            <input type="text" name="shortstory" id="shortstory" className='form-control' value={userForm.shortstory} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Published Date</label>
            <input type="date" name="publisheddate" id="publisheddate" className='form-control' value={userForm.publisheddate} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Story Link</label>
            <input type="text" name="storylink" id="storylink" className='form-control' value={userForm.storylink} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <button type="submit" className='btn btn-primary'>Submit News</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default CreateNews