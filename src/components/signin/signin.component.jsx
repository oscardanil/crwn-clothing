import React from "react";
import './signin.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomeButton from "../custome-button/custome-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
         email:'',
         password:''
        }
    }
handleSubmit=event=>{
    event.preventDefault();
    this.setState({email:'',password:''})
}

 handleChange=event=>{
     const {value,name}=event.target;
     this.setState({[name]:value})
 }

    render(){
        return(
        <div className='sign-in'>
          <h2>I alredy have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
              <FormInput 
              type="email"
              name="email"
              value={this.state.email} 
              handleChange={this.handleChange}
              label="email"
              required />
              
              <FormInput 
              name="password"
              type="password" 
              value={this.state.password} 
              handleChange={this.handleChange}
              label="password"
              required/>
              <div className="buttons">
                
              <CustomeButton type="submit">
               Sign in
              </CustomeButton>
              <CustomeButton onClick={signInWithGoogle} isGoogleSignIn >
                {''}
                Sign in with Google{''}
              </CustomeButton>
              </div>
          </form>
        </div>
        )
    }
}
export default SignIn;