import React, { useRef, useState } from "react"
import "./Logins.css"
import logo from "./fittedNavBarIcon.png"

const Register = props => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const [ image, setImage] = useState('')
    const [ loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'fitted')
        setLoading(true)
        const res = await fetch(
           ' https://api.cloudinary.com/v1_1/kmpcldnry/image/upload ', 
           {
               method: 'POST', 
               body: data
           }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username.current.value,
                            email: email.current.value,
                            password: password.current.value,
                            profilPic: image
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("fitted_user", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <div className="registerLogo">
                        <img src={logo} alt="logo"></img>
                    </div>
                <h2 className="h3 mb-3 font-weight-normal signIn">Register</h2>
                <fieldset>
                    <label htmlFor="inputUsername"> Username </label>
                    <input ref={username} type="username"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <div className="imageUpload">
                <label class="custom-profilePic-upload"> Upload Profile Pic
                <input
                    type="file"
                    name="file"
                    placeholder="upload an image"
                    className="form-control"
                    onChange={uploadImage}
                    />
                </label>
                {loading ? (
                    <h3>Loading...</h3>
                ): (
                    <img className="itemImagePreview" src={image} style={{width: '300px'}}/>
                )}
            </div>
                <fieldset className="registrationButton">
                    <button type="submit">
                        Register
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

export default Register