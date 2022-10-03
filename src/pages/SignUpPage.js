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

            res: '',
            error: ''
        }
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

    updateUsername = (e) =>{
        e.preventDefault();

        this.setState({username: e.target.value});
    }

    updateEmail = (e) =>{
        e.preventDefault();

        this.setState({email: e.target.value});
    }

    updatePassword = (e) =>{
        e.preventDefault();

        this.setState({password: e.target.value});
    }

    update_c_Password = (e) =>{
        e.preventDefault();

        this.setState({c_password: e.target.value});
    }

    updatePrivateKey = (e) =>{
        e.preventDefault();

        this.setState({privatekey: e.target.value});
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
    //var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
    // if(format.test(_string))
    // {
    //   return true;
    // }
    // else{
    //   return false;
    // } 
  }

  // Check if Password Contains a Captial Letter
  // stringContainsCapital(_string)
  // {
  //   for(var i = 0; i < this.state.password.length; i++)
  //   {
  //     if(this.state.password[i] == this.state.password[i].toUpperCase())
  //     {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  updateError(_string){
    

    this.setState({error: _string});
  }

  // checkPasswords = (e) => {
  //   e.preventDefault();
  //   if(e.target.value == this.state.password)
  //   {
  //     console.log("Passwords Match");
  //     document.getElementById("passwordscheck").className = this.textGreen;
  //     this.state.passCheck = true;
  //   }
  //   else{
  //     console.log("Passwords Dont Match");
  //     document.getElementById("passwordscheck").className = this.textGray;
  //     this.state.passCheck = false;
  //   }
  // }

    // Step 3 On Sign Up Click
    async MasterSignUp(){
        var post_url = 'https://bdrfef3yols5u2hpsujl7542xa0jhxvn.lambda-url.us-east-1.on.aws/api/userSignUp';
        const post = '/.netlify/functions/backend';

        try{
            console.log("running");
              await axios.post('https://bdrfef3yols5u2hpsujl7542xa0jhxvn.lambda-url.us-east-1.on.aws/api/testPost',{
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email
             })
            // await axios.get('https://bdrfef3yols5u2hpsujl7542xa0jhxvn.lambda-url.us-east-1.on.aws/api/test')
            // .then(function(response){
            //     console.log(response.data);
            // })
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

    async handleSubmit() {

      const url_post = "https://ec2-34-201-91-232.compute-1.amazonaws.com:5001/api/userSignUp";

      const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        privatekey: this.state.privatekey
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      };

      await fetch(url_post, options)
      .then(res=>res.json())
      .then(data=>console.log(data));
    };

    render(){
        console.log(this.state.firstname + " " + this.state.lastname);
    return(
        <div class="min-h-screen bg-gray-800 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 border-blue-400 border-4 border-opacity-50">
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
            <input onChange={this.updateUsername} type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
			<input onChange={this.updatePassword} type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <div id="passwordcheck">
                <span id="passlength" className='text-gray-300 text-xs'>Min Length 8 Characters,</span> <span id="passcap" className='text-gray-300 text-xs'>1 Capitalization,</span> <span id="passnum" className='text-gray-300 text-xs'>1 Number</span> <span id="passspecial" className='text-gray-300 text-xs'>& 1 Special Character</span>
            </div>
            <input onChange={this.update_c_Password} type="password" placeholder="Confirm Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <input onChange={this.updatePrivateKey} type="text" placeholder="Private Key" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>
        </form>
        {/** Check Boxes */}
        <div class="flex items-center mt-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-black text-opacity-60">I Accept The <Link to="/privacy" className="underline">Privacy Policy</Link> & <Link to="/tos" className="underline"> Terms and Conditions</Link></label>
</div>
<div className="error">
  Response Message : {this.state.res}<br/>
  Error Message : {this.state.error}
</div>
		<div class="text-center mt-6">
				<button type="button" class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl" onClick={()=>this.MasterSignUp()}>Create Account</button>
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