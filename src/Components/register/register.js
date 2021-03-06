import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            namer:'',
            emailr:'',
            passwordr:''
        }
    }

    onNameChange=(event)=>{
        this.setState({namer:event.target.value})
    }
    onEmailChange=(event)=>{
        this.setState({emailr:event.target.value})
    }
    onPasswordChange=(event)=>{
        this.setState({passwordr:event.target.value})
    }

    onRegister=()=>{

        fetch('http://localhost:3001/register',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:this.state.namer,
                email: this.state.emailr,
                password: this.state.passwordr
              })
        })
        this.props.fetchinfo_user(this.state.namer,this.state.emailr)
        this.props.fetchinfo_entries(0)
        this.props.onRouteChange('home')


}

    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input onChange={this.onNameChange} 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={this.onEmailChange}  
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-addressr" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange} 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="passwordr" />
                </div>
                </fieldset>
                <div className="">
                <input onClick={this.onRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
            </div>
            </main>
            </article>
        );
    }
}

export default Register;