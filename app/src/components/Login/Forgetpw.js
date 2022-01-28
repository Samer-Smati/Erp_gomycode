import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios';

function Forgetpw() {
    const [email,setEmail] = useState('')

    const forgetpassword = () => {
         
        Axios.post(`http://localhost:8080/forgetpw`,{email})
        .then((res,req)=>{ 
                console.log(res.data[0])
        }).catch((err)=> console.log(err))
    }
    
    return (
        <div>
            <div className="forgotpass-info">Pour réinitialiser votre mot de passe, veuillez identifier votre compte.</div>
            <Form >
                <div className="form-group">
                    <label htmlFor="email">E-mail</label> 
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" id="email" placeholder="E-mail" />
                </div> 
                <div className="form-group m-4">
                    <Button onClick={forgetpassword} className="btn btn-success">Réinitialiser le mot de passe</Button>
                    <a href="/">Aller à la connexion</a>
                </div>
            </Form>
            
        </div>
    )
}

export default Forgetpw;
