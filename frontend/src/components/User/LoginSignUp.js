// import { Button } from "@material-ui/core";
// import React from "react";

// const LoginSignup = () => {
//     return (
//       <>
//         <div className="LoginSignUpContainer">
//           <div className="LoginSignUpBox">
//             <div>
//               <div className="LoginSignUpToogle">
//                 <p onClick={(e) => switchTabs(e, "Login")}>Login</p>
//                 <p onClick={(e) => switchTabs(e, "Register")}>Register</p>
//               </div>

//               <button ref={switcherTab}></button>
//             </div>

//             <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>





//             </form>
//           </div>
//         </div>
//       </>
//     );
// };

// export default LoginSignup;


import React, { useState } from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// import Icon from "./icon";
import useStyles from "./styles";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/userAction";
import FileBase from "react-file-base64";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  avatar: "",
};

const LoginSignup = () => {
  const [form, setForm] = useState(initialState);
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");
    // const [avatar, setAvatar] = useState("/profile-icon.png");

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
//  const [avatarPreview, setAvatarPreview] = useState("/profile-icon.png");
  // const switchMode = () => {
  //   setForm(initialState);
  //   setIsSignup((prevIsSignup) => !prevIsSignup);
  //   setShowPassword(false);
  // };

  //  const registerDataChange = (e) => {
  //    if (e.target.name === 'avatar') {
  //      const reader = new FileReader();

  //      reader.onload = () => {
  //        if (reader.readyState === 2) {
  //          setAvatarPreview(reader.result);
  //          setAvatar(reader.result);
  //        }
  //      };

  //      reader.readAsDataURL(e.target.files[0]);
  //    } else {
  //      setForm({ ...form, [e.target.name]: e.target.value });
  //    }
  //  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isSignup) {
      dispatch(register(form, navigate));
    } else {
      dispatch(login(loginEmail,loginPassword,navigate));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleChangeE = (e) =>
    setLoginEmail( e.target.value);

    const handleChangeP = (e) => setLoginPassword(e.target.value);

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

 
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          <Typography> Icon</Typography>
        </Avatar>

        {/* <GoogleLogin
          clientId="1070033044791-6028ftan0najquv276sdbep3qjdu9q9e.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.googleButton}
              color="primary"
              fullwidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="contained"
            >
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
        /> */}

        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* //if sign up karna hai tabhi firstname lastname pucho varna only email and password */}
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />

                {/* confirming password */}
                {/* {isSignup && ( */}

                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />

                {/* <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div> */}
                <div className={classes.filebase}>
                  <FileBase
                  className={classes.filebase1}
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setForm({ ...form, avatar: base64 })
                    }
                  />
                </div>

                {/* // )} */}
              </>
            )}
            {!isSignup && (
              <>
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChangeE}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChangeP}
                  type={showPassword ? "text" : "password"}
                />
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have account? Sign In"
                  : "Don't have account ?Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginSignup;