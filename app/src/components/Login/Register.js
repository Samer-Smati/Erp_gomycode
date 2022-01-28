import React,{useState,useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
function Register() {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phone, setMobile] = useState(""); 
        const [confirmPassword, setConfirmPassword] = useState("");
        let history = useHistory()
   
        const registerUser = () =>{
                if(password === confirmPassword){
                        document.getElementById('error').innerHtml = ''
                        axios.post('http://localhost:8080/users/addNew',{ 
                        firstname,lastname,email,password,phone
                        })
                        .then(resp =>  history.push('/'))
                        .catch(e => console.log(e))  
                }else{
                        console.log(123123)
                        document.getElementById('error').innerHTML = 'Password does not match...';
                        document.getElementById('error').style.color = "red";
                } 
              
        }


    return (
        <div className="register form-signin">
                <Form>
                <div className="row">
                        <div className="header">Pour créer votre compte client remplissez les champs obligatoires.<hr /></div>
                        <div className="col-md-6"> 
                        <div className="form-group">
                                <label htmlFor="firstname">Prénom *</label>
                                <input id="firstname" type="text" name="firstname" onChange={(e) => setFirstname(e.target.value)} className=" form-control"  />
                        </div>
                        <div className="form-group">
                                <label htmlFor="lastname">Nom de famille *</label>
                                <input id="lastname" type="text" name="lastname" onChange={(e) => setLastname(e.target.value)}className="required form-control"  />
                        </div>
                        <div className="form-group filled has-error has-danger">
                                <label htmlFor="email">E-mail *</label>
                                <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="required email form-control"  />
                        </div>
                        </div>
                        <div className="col-md-6"> 
                        <div className="form-group">
                                <label htmlFor="mobile">Tél portable</label>
                                <input id="mobile" type="text" name="mobile" onChange={(e) => setMobile(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group filled">
                                <label htmlFor="password">Mot de passe *</label>
                                <input id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control"  />
                        </div>
                        <div className="form-group">
                                <label htmlFor="password">Confirmez le mot de passe *</label>
                                <input id="confirm_password" type="password"  onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" className="form-control" data-match="#password" />
                        </div>
                        </div>
                </div>
              
                <hr />
                <div className="row m-4">
                        <div id="error"></div> 
                    <div className="col">
                        <a href="/" className="linkToLogin">Aller à la connexion</a>
                    </div>
                    <div className="col"> 
                    <Button  onClick={registerUser} className="btn btn-success">Envoyer</Button>
                    </div>
                </div>
            </Form> 
        </div>
    )
}

export default Register
