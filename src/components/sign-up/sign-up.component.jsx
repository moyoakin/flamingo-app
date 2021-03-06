import React from 'react'

import './sign-up.styles.css'

import { useFirebase} from '../../context/firebaseContext'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/cutom-button.component'


const SignUp = () => {

    const [displayName, setDisplayName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword,] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")


    const { auth, createUserProfileDocument } = useFirebase();

    function handleChange(event){

        const {name, value} = event.target
        name === 'displayName' ? setDisplayName(value) : name === "email" ? setEmail(value): name === 'password' ? setPassword(value): setConfirmPassword(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password does not match')
            return;
        }
        try {
            const {user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})

            setEmail('')
            setPassword('')
            setDisplayName('')
            setConfirmPassword('')
        } catch (error) {

            console.log(error);

        }
    }; 

return(
    <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput 
                onChange={handleChange}
                type="text"
                name="displayName"
                value={displayName}
                label="Display Name"
                required >
            </FormInput>

            <FormInput
                onChange={handleChange}
                type="text"
                name="email"
                value={email}
                label="Email"
                required >
            </FormInput>

            <FormInput
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                label="Password"
                required>
            </FormInput>

            <FormInput
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                required >
            </FormInput>

            <CustomButton type="submit">Sign Up </CustomButton>
        
        </form>
    
    </div>
)}

export default SignUp;