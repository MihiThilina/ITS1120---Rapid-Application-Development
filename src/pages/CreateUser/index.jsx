import React, { Component } from 'react';
import Box from '@mui/material/Box';

import "./user.css"
import { TextField } from '@mui/material';

class CreateUser extends Component {
    render() {
        return (
            <main>

                <section className='registration_section'>
                    <h1 className='topic'>User Registration</h1>



                    <div className='first_registration_form'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                    </div>



                    <div className='second_registration_form'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField id="outlined-name" label="Address" style={{width:'70%'}}

                            />
                        </Box>
                    </div>


                    <button className='btnSave'>Save</button>
                    <button className='btnClear'>Clear</button>
                </section>

            </main>
        );
    }
}

export default CreateUser;