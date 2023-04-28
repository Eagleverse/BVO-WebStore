import React, { useState }  from 'react'

export const Mogus= ()=> {

    const [name,setName]=useState()
    const [password,setPass]=useState()
    const [permission,setPermission]=useState("Read")


    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }
    const passUpdate=(event)=>{ // Dealing with name field changes to update our state
        setPass(event.target.value)
    }

    const permUpdate=(event)=>{ // Dealing with name field changes to update our state
        setPermission(event.target.value)
    }
    const handleSubmit=(e)=> { // Once the form has been submitted, this function will post to the backend
        e.preventDefault()
        const postURL = "http://localhost:4000/api/user/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                pwd:password,
                roles:permission,
            })
        })
            .then(()=>{
                // Once posted, the user will be notified
                alert('You have been added to the system!');
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input required onChange={nameUpdate}></input>
                <p></p>
                <label>Password:</label>
                <input type={password} required onChange={passUpdate}></input>
                <p></p>
                <label>Permissions</label>
                <select name="selPerm" id="selPerm" onChange={permUpdate}>
                    <option value="Read">Read</option>
                    <option value="Read-Write">Read & Write</option>
                </select>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )

}

export default Mogus
