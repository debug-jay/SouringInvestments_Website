import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// serverless functions
export var obj = {
  table: []
};

export class SignUpPage extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            c_password: '',
            privatekey: '',

            emailCheck: new Boolean,
            usernameCheck: new Boolean,
            passCheck: new Boolean,
            secondpassCheck: new Boolean
        }

        this.textGreen = "text-green-400 text-xs mt-1";
        this.textGray = "text-gray-300 text-xs mt-1";
    }

    // Updating State Variables
    updateFirstName = (e) =>{
        e.preventDefault();
        this.setState({firstname: e.target.value});
    }
    updateLastName = (e) =>{
        e.preventDefault();

        this.setState({lastname: e.target.value});
    }

    updateEmail = (e) =>{
        e.preventDefault();
        this.setState({email: e.target.value});
        if(e.target.value.includes("@gmail.com") || e.target.value.includes("@yahoo.com") || e.target.value.includes("@hotmail.com") || e.target.value.includes("@outlook.com"))
        {
          console.log("Valid Email");
          document.getElementById("emailcheck").className = this.textGreen;
          this.state.emailCheck = true;
        }
        else{
          console.log("Please Provide a Valid Email Address");
          document.getElementById("emailcheck").className = this.textGray;
          this.state.emailCheck = false;
        }
    }

    updateUsername = (e) =>{
        e.preventDefault();
        this.setState({username: e.target.value});
        if(e.target.value.length >= 5)
        {
          document.getElementById("usernamecheck").className = this.textGreen;
        }
        else
        {
          document.getElementById("usernamecheck").className = this.textGray;
    
        }
    }

    updatePassword = (e) =>{
        e.preventDefault();

        this.setState({password: e.target.value});
        var passlength;
        var passcap;
        var passnum;
        var passspec;
        
        if(this.stringIsLength(e.target.value))
        {
          document.getElementById("passlength").className = this.textGreen;
          passlength = true;
        }
        else{
          document.getElementById("passlength").className = this.textGray;
          passlength = false;
        }

        if(this.stringContainsCapital(e.target.value))
        {
          document.getElementById("passcap").className = this.textGreen;
          passcap = true;
        }
        else{
          document.getElementById("passcap").className = this.textGray;
          passcap = false;
        }

        if(this.stringContainsNum(e.target.value))
        {
          document.getElementById("passnum").className = this.textGreen;
          passnum = true;
        }
        else{
          document.getElementById("passnum").className = this.textGray;
          passnum = false;
        }

        if(this.stringContainsSpecial(e.target.value))
        {
          document.getElementById("passspecial").className = this.textGreen;
          passspec = true;
        }
        else{
          document.getElementById("passspecial").className = this.textGray;
          passspec = false;
        }
        if(passlength && passnum && passcap && passspec)
        {
          this.state.passCheck = true;
        }
    }

    update_c_Password = (e) =>{
        e.preventDefault();
        if(e.target.value == this.state.password)
        {
          console.log("Passwords Match");
          document.getElementById("passwordscheck").className = this.textGreen;
          this.state.secondpassCheck = true;
        }
        else{
          console.log("Passwords Dont Match");
          document.getElementById("passwordscheck").className = this.textGray;
          this.state.secondpassCheck = false;
        }
    }

    // Checks the Passwords Length
  stringIsLength(_string)
  {
    if(_string.length >= 8)
    {
      return true;
    }
    else{
      return false;
    }
  }

  // Checks if Password Contains a Numerical
  stringContainsNum(_string)
  {
    if(/\d/.test(_string))
    {
      return true;
    }else{
      return false;
    }
  }

  // Checks if Password Contains a Special Character
  stringContainsSpecial(_string)
  {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
    if(format.test(_string))
    {
      return true;
    }
    else{
      return false;
    } 
  }

  //Check if Password Contains a Captial Letter
  stringContainsCapital(_string)
  {
    for(var i = 0; i < this.state.password.length; i++)
    {
      if(this.state.password[i] == this.state.password[i].toUpperCase())
      {
        return true;
      }
    }
    return false;
  }

  updateError(_string){
    

    this.setState({error: _string});
  }

  // Checks if Required Variables are True, if so Run the Send Login Function
  checkCreds = () => {
    if(this.state.emailCheck && this.state.usernameCheck && this.state.passCheck && this.state.secondpassCheck)
    {
      console.log("Can Proceed");
      ()=>this.sendLogin();
    }
    else{
      console.log("Cant Proceed");
    }
  }

    // Step 3 On Sign Up Click
    async sendLogin(){
        var post_url = 'https://7iv4ihz7dxtrbcq77fawwnogwi0kneik.lambda-url.us-east-1.on.aws/api/userSignUp';
          try{
              console.log("running");
                await axios.post(post_url,{
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
              })
              .then(function(response){
                console.log(response.data);
              })
              .catch(err=>{
                console.log(err);
                console.log(err.response);
                console.log(err.request);
              })
              
          }catch(e)
          {
              console.log(e);
          }
    }

    render(){
        console.log(this.state.firstname + " " + this.state.lastname);
    return(
        <div class=" bg-gray-800 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="mt-28 py-12 px-12 bg-white rounded-2xl shadow-xl z-20 border-blue-400 border-4 border-opacity-50">
		<div className="grid justify-center">
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer ">Create an Account With Us and Start Earning Passive Income as a Private Investor</p>
		</div>
        <form>
        <div id="fullName" class="flex flex-row mb-4">
                    
                    <div id="firstName" class="w-1/2 mr-1">
                        <input onChange={this.updateFirstName} type="text" placeholder="First Name"
                            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
                    </div>
                    
                    <div id="lastName" class="w-1/2 ml-1">
                        <input onChange={this.updateLastName} type="text" placeholder="Last Name" 
                            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
                    </div>
                </div>
		<div class="space-y-4"> 
			<input onChange={this.updateEmail} type="email" placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
          <span className=' text-gray-300 text-xs mt-1' id="emailcheck">
          Valid Email Address
        </span>
            <input onChange={this.updateUsername} type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
            <span className=' text-gray-300 text-xs mt-1' id="usernamecheck">
            Minimum Length 5 Characters
          </span>
      <input onChange={this.updatePassword} type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <span id="passwordcheck">
                <span id="passlength" className='text-gray-300 text-xs'>Min Length 8 Characters,</span> <span id="passcap" className='text-gray-300 text-xs'>1 Capitalization,</span> <span id="passnum" className='text-gray-300 text-xs'>1 Number</span> <span id="passspecial" className='text-gray-300 text-xs'>& 1 Special Character</span>
            </span>
            <input onChange={this.update_c_Password} type="password" placeholder="Confirm Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <span className=' text-gray-300 text-xs mt-1' id="passwordscheck">
              Paswords Match
            </span>
            <input onChange={this.updatePrivateKey} type="text" placeholder="Private Key" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>
        </form>
        {/** Check Boxes */}
        <div class="flex items-center mt-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={this.AcceptPPTOS}/>
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-black text-opacity-60">I Accept The <Link to="/privacy" className="underline">Privacy Policy</Link> & <Link to="/tos" className="underline"> Terms and Conditions</Link></label>
</div>
		<div class="text-center mt-6">
				<button type="button" class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl" onClick={()=>this.checkCreds()}>Create Account</button>
				<p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"><Link to="/login"> Sign In</Link></span>
				</p>
		</div>
    
        <div className="relative hidden">
      <input
      required={true}
      />

    </div>
		</div>
		<div class="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
        );
    }
}   