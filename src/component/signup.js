import { useState } from 'react';

function Signup() {
  const [formvalues,setformvalues]=useState({
    name:"",
    email:"",
    gender:"",
    phonenumber:"",
    password:""
  })
  console.log(formvalues)

  const handlechange=(e,name)=>{
    setformvalues({...formvalues,
        [e.target.name]:e.target.value
    })
    console.log(formvalues)
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    alert("submitted successfully")
    alert("welcome to our browser",formvalues.name)
  }
  return (
    <div className="App">
      <h1>Signup form</h1>
      <form>
      <label for="name">Name:</label>
      <br/>
      <input type="text" name="name" onChange={(e)=>handlechange(e,"name")} required/>
      <br/>
      <label for="email">Email:</label>
      <br/>
      <input type="text" name='email' onChange={(e)=>handlechange(e,"email")}  required/>
      <br/>
      <select for="gender" onChange={(e)=>handlechange(e,"gender")}>
        <option value="male" name="male" >male</option>
        <option value="female">female</option>
        <option value="others">others</option>
      </select>
      <br/>
      <label for="phone">phone number:</label>
      <br/>
      <small>it should be only numbers</small>
      <br/>
      <input type="tel" 
      name='phone' 
      pattern='[0-9]{10}' maxLength="10" 
      onChange={(e)=>handlechange(e,"phonenumber")} required/>
      <br/>
      <label for="password">password:</label>
      <br/>
      <input type="text" 
      name='password' 
      minLength="6" 
      onChange={(e)=>handlechange(e,"password")}
       required/>
      <br/>
      <button onClick={(e)=>handlesubmit(e)}>submit</button>

      

      </form>
    </div>
  );
}

export default Signup;