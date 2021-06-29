import React,{useState,useEffect} from 'react';
import { useHistory} from 'react-router';
import DataService from '../service/DataService';

function Login() {
    let history= useHistory();

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [type,setType]=useState("")
    const [show,setShow]=useState(false);
    const [valid,setValid]=useState();

    useEffect(() => {
        document.title='Login';
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        DataService.login(email,password,type).then((res)=> {setValid(res)})
    }

    function validateForm() {
        return email!=="" && password.length>=6 && password.length<=12 && type!=="";
    }

    function showPassword(){
        setShow(!show);
    }

    function newUserNavigate() {
        history.push("/newUser");
    }

    const navigate=()=>{
        const page=type+'Home';
        history.push({
            pathname: '/'+page,
            state: { name: valid, email:email}
          });
    }

    return (
        <div>
            <h1 className='title'>Health Care Management System</h1>
            <div className='loginBody'>
                <h2>Login</h2>
                {(valid || valid==="") && <p id='loginError'>Invalid Username or Password!</p>}
                <form onSubmit={handleSubmit}>
                    <label>Type of Login</label><br></br> 
                    <select name='type' autoFocus
                            value={type} onChange={(e)=>{setType(e.target.value)}}>
                                <option>Choose...</option>
                                <option>Patient</option>
                                <option>Doctor</option>
                                <option>Admin</option>
                    </select>
                    <label>Email Id</label><br></br>
                    <input type='text' name='email' 
                            value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
                    <label>Password</label><br></br>    
                    <input type={show ? 'text' : "password"} name='password'
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
                    <input  type="checkbox" id='checkbox' onClick={showPassword} />
                    Show Password<br></br><br></br>
                    <button type='submit' className='loginbtn' disabled={!validateForm()}>Login</button>
                </form>
            </div>
            <p style={{textAlign:'center'}}>Not a user?<a id='newUserNav' onClick={newUserNavigate}>Click here</a></p>
            {(() => {
                if (valid) {
                    return (
                        <div>{navigate()}</div>
                    )
                }
            })()}
        </div>
    )
}

export default Login
