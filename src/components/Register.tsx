import axios from "axios";
import { useState } from "react";
import {  User } from "./Person";

const Register = () => {
const [inputs, setInputs] = useState(new User());
const submit = (e: any) =>{
    e.preventDefault();
    // https://dummy.restapiexample.com/api/v1/create
    axios.post('http://localhost:8080/v1/user/register', inputs).then((res: any) =>{
        console.log('this is response', res);
    }).catch(err =>{

    })
    console.log('this is name', inputs)
}
const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setInputs((values) => ({...values,[event.target.name] : event.target.value}));
}
    return (
        <form>
            <input type = "text" placeholder="First Name" name="firstName" value = {inputs.firstName} onChange = {handleChange}/>
            <input type = "text" placeholder="Last Name" name="lastName" value = {inputs.lastName} onChange = {handleChange}/>
            <input type = "text" placeholder="Username" name="username" value = {inputs.username} onChange = {handleChange}/>
            <input type = "email" placeholder="Email" name="email" value = {inputs.email} onChange = {handleChange}/>
           
            <input type = "password" name="password" placeholder="Password" value = {inputs.password} onChange = {handleChange}/>
            <input type = "date" name="dob" value = {inputs.dob} onChange = {handleChange}/>
            <input type = "text" name="role" placeholder="Role" value = {inputs.role} onChange = {handleChange}/>
     
            <button onClick={submit}>Click Me</button>
        </form>)
}
export default Register;