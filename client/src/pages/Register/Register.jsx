import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../makeRequest";



export default function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate() // used to navigate to another page. 
    

    const validatePassword = async (password)=>{
        if (password.length < 8){
            return false
        }
        if (password != confirmPassword){
            return false
        }
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>+]/.test(password);

        return hasUpperCase && hasLowercase && hasNumber && hasSymbol

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate the input, email contains @ password should contain a letter + number + symbol.
        validatePassword(password);

        
        

        body = {"email": email, "password": password}

        // see if the email exists in the database 
        const response = makeRequest.post('/auth/register', body)


        console.log(response)
        // implement an email verification system. 

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register your account with us
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} action="" method="POST" className="soace-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm fond-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input 
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm mt-2 fond-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input 
                                id="password"
                                name="password"
                                type="password"
                                value = {password}
                                required
                                autoComplete="password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                            </div>
                    </div>
                    

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm mt-2 fond-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                                <input 
                                id="confirmPassword"
                                name="confirmPassword"
                                type="confirmPassword"
                                value = {confirmPassword}
                                required
                                autoComplete="confirmPassword"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e)=> setConfirmPassword(e.target.value)}
                                />
                            </div>

                    </div>
                

                    <div className="mt-4">
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}