import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { Component } from 'react';

import userService from '../../service/user/User'

import "./user.css"

class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            UserData: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
                address: {
                    city: "",
                    street: "",
                    number: 3,
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: ""
                    }
                },
                phone: ""
            },
            data: []
        }
    }

    submitUser = async () => {
        let data = this.state.UserData;
        console.log(data);
        let res = await userService.postUser(data);
    };


    loadData = async () => {
        let res = await userService.GetUser();
        console.log("User " + res.data.data);
    }

    componentDidMount() {
        this.loadData();
    }

    clearFields = () => {
        this.setState({
            UserData: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
                address: {
                    city: "",
                    street: "",
                    number: 3,
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: ""
                    }
                },
                phone: ""
            }
        })
    }


    render() {
        return (
            <>
                <main>

                    <section className='registration_section'>
                        <h1 className='topic'>User Registration</h1>



                        <div className='first_registration_form'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Frist Name" style={{ width: '70%' }}
                                    value={this.state.UserData.name.firstname}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.name.firstname = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                                <TextField id="outlined-name" label="Last Name" style={{ width: '70%' }}
                                    value={this.state.UserData.name.lastname}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.name.lastname = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                                <TextField id="outlined-name" label="Email" style={{ width: '70%' }}
                                    value={this.state.UserData.email}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.email = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                                <TextField id="outlined-name" label="User Name" style={{ width: '70%' }}
                                    value={this.state.UserData.username}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.username = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                                <TextField id="outlined-name" label="Password" style={{ width: '70%' }}
                                    value={this.state.UserData.password}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.password = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                                <TextField id="outlined-name" label="City" style={{ width: '70%' }}
                                    value={this.state.UserData.address.city}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.city = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                        </div>



                        <div className='second_registration_form'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Street" style={{ width: '70%' }}
                                    value={this.state.UserData.address.street}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.street = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                                <TextField id="outlined-name" label="Street No" style={{ width: '70%' }}
                                    value={this.state.UserData.address.number}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.number = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                                <TextField id="outlined-name" label="Zip Code" style={{ width: '70%' }}
                                    value={this.state.UserData.address.zipcode}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.zipcode = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                                <TextField id="outlined-name" label="Lat Value" style={{ width: '70%' }}
                                    value={this.state.UserData.address.geolocation.lat}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.geolocation.lat = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                                <TextField id="outlined-name" label="Long Value" style={{ width: '70%' }}
                                    value={this.state.UserData.address.geolocation.long}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.address.geolocation.long = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                                <TextField id="outlined-name" label="Mobile No" style={{ width: '70%' }}
                                    value={this.state.UserData.phone}
                                    onChange={(e) => {
                                        let formData = this.state.UserData
                                        formData.phone = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                        </div>





                        <button type='submit' onClick={this.submitUser} className='btnSave'>Save</button>
                        <button className='btnClear' type='submit' onClick={this.clearFields}>Clear</button>
                    </section>

                </main>
                <section className='UserTable'>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 800 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nic Number</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">Contact</TableCell>
                                    <TableCell align="center">Emali</TableCell>
                                    <TableCell align="center">license Number</TableCell>
                                    <TableCell align="center">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {
                                    this.state.data.map((row) => (

                                        <TableRow>
                                            <TableCell>{row.firstname}</TableCell>
                                            <TableCell align="center">Password</TableCell>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="center">Address</TableCell>
                                            <TableCell align="center">Contact</TableCell>
                                            <TableCell align="center">Emali</TableCell>
                                            <TableCell align="center">license Number</TableCell>
                                            <TableCell align="center">Action</TableCell>

                                        </TableRow>

                                    ))
                                } */}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>

            </>
        );
    }
}

export default CreateUser;