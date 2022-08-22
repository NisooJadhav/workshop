import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

const Admin = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
    fromDate: '',
    toDate:'',
    instructor:'',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newWorkshop = {
      title: input.title,
      content: input.content,
      fromDate: input.fromDate,
      toDate: input.toDate,
      instructor: input.instructor,
    }
    axios.post("/admin", input).catch(error => console.log(error))
  }

  const [workshops, setWorkshops] = useState([{
    title: '',
    content: '',
    fromDate: '',
    toDate: '',
    instructor: '',
  }])

  return (
    <div>
      <div>
        <h1 className='main-head'>Admin area</h1>
        <NavLink to="/">See Existing Workshops</NavLink>

        <h1 style={{ paddingBottom: 0, paddingTop: 25 }}>Create new Workshop</h1>
        <center>
          <div className="workshopForm" style={{ textAlign: 'center' }}>
            <form style={{ paddingTop: 0, marginTop: 0 }}>
              <label>Workshop Name:</label>
              <input onChange={handleChange} name="title" type="text" value={input.title} autoComplete="off" placeholder="workshop title" required />
              <label>Workshop Details: </label>
              <textarea onChange={handleChange} name="content" autoComplete="off" value={input.content} placeholder="workshop description" rows={5} cols={10} required />
              <button onClick={handleSubmit} type="submit">add</button>
            </form>
          </div>
        </center>
      </div>

      {workshops.map((workshop) => {
        return (
          <div key={workshop._id}>
            <h2>{workshop.title}</h2>
            <br />
            <p>{workshop.content}</p>
            <br />
            <p>{workshop.fromDate}</p>
            <br />
            <p>{workshop.toDate}</p>
            <br />
            <p>{workshop.instructor}</p>
            <br />
          </div>)
      })
      }
    </div>
  );
};

export default Admin;
