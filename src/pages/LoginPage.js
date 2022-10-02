import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export class LoginPage extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
    return(
        <div class="min-h-screen bg-gray-800 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div className="grid justify-center">
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome Back!</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer ">Create an
				account to enjoy all the services without any ads for free!</p>
		</div>
		<div class="space-y-4"> 
            <input type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
			<input type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>

		<div class="text-center mt-6">
				<button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">Create Account</button>
				<p class="mt-4 text-sm">Don't Have an Account? <span class="underline cursor-pointer"> Sign Up</span>
				</p>
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