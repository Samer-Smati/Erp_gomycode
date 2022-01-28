import {React,useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from "axios";
function Login() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState(''); 
   const userLogin = () => {
        Axios.post(`http://localhost:8080/login`,{email}).then((res,req)=>{
            if(res.data[0].password === password){
                console.log(res.data[0]) 
            } 
        }).catch((res,err)=>{  
            res.status(500).json({error: err}) 
        })
      }
    return (
        <div className="login form-signin">
            <Form> 
                <div className="form-group filled has-error has-danger">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" onChange={(e)=> setEmail(e.target.value)} name="email" className="required email form-control" placeholder="Entrez votre nom d'utilisateur"  />
                </div>
                <div className="form-group filled">
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" type="password" onChange={(e)=> setPassword(e.target.value)} name="password" className="form-control" placeholder="Entrez votre mot de passe" />
                </div>
                <br />
                <div className="form-group d-flex login-form justify-content-between m-4">
                <Button onClick={userLogin} className="btn btn-primary">
                    connexion
                </Button>
                <a href="/forgetpw">Mot de passe oublié ?</a>
                </div>
            </Form>
            <div>Vous ne possède pas de compte?</div>
            <hr />
            <div className="form-group">
                <a href="/register" className="btn btn-success">Créer un compte</a>
            </div>
        </div>
    )
}

export default Login
