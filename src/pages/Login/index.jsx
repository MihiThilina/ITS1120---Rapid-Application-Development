import React, { Component } from 'react';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';
import './login.css'

class Login extends Component {
    render() {
        return (
            <main>
                <section>
                    <div className='loginCard'>
                        <Box component="form" noValidate autoComplete="off">

                            <FormControl sx={{ width: '60ch' }} style={{ position: "relative", left: "130px", top: "160px" }}


                            >
                                <InputLabel shrink htmlFor="bootstrap-input" style={{ position: "relative", top: "10px", fontWeight: "bold" }}

                                >Email address </InputLabel>
                                <OutlinedInput placeholder="Please enter text" />

                            </FormControl>
                        </Box>


                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: '60ch' }} style={{ position: "relative", top: "", left: "130px", top: "180px" }} >
                                <InputLabel shrink htmlFor="bootstrap-input" style={{ position: "relative", top: "10px", fontWeight: "bold" }}>Password</InputLabel>
                                <OutlinedInput placeholder="Please enter text" />

                            </FormControl>
                        </Box>



                        <div class="vertical-center">
                            <button> <Link to='/DashBoard'>Login</Link></button>
                            <p>Don't have an account ?<a href=""><Link to="/CreateUser">Sign up</Link></a></p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Login;