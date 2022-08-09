import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import React, { Component } from 'react';

import userService from '../../service/user/User'

import "./user.css"

class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            UserData: {
                id:'',
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

    deleteUser  = async (id) => { 
        let params = {
            id: id
        }
         let res = await userService.deleteUser(params);
    
         if(res.status === 200) {
            this.setState({
                alert: true,
        
                severity: 'success'
            });
            this.loadData();
         } else {
            this.setState({
                alert: true,
              
                severity: 'error'
            });
         }
       }; 
    




    loadData = async () => {
        let res = await userService.GetUser();
        if(res.status === 200){
            this.setState({
            data :res.data
           });
         }
    }

    componentDidMount() {
        this.loadData();
        console.log(this.loadData);
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
                        <h1 style={{textAlign:"center"}} className='topic'>User Registration</h1>



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
                                    <TableCell>First Name</TableCell>
                                    <TableCell align="center">Last Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">UserName</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">City</TableCell>
                                    <TableCell align="center">Street No</TableCell>
                                    <TableCell align="center">Street</TableCell>
                                    <TableCell align="center">Zip Code</TableCell>
                                    <TableCell align="center">Lat Code</TableCell>
                                    <TableCell align="center">Long Value</TableCell>
                                    <TableCell align="center">Mobile No</TableCell>
                                    <TableCell align="center">Acction</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (

                                        <TableRow>
                                        <TableCell>{row.name.firstname}</TableCell>
                                    <TableCell align="center">{row.name.lastname}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{row.password}</TableCell>
                                    <TableCell align="center">{row.address.city}</TableCell>
                                    <TableCell align="center">{row.address.number}</TableCell>
                                    <TableCell align="center">{row.address.street}</TableCell>
                                    <TableCell align="center">{row.address.zipcode}</TableCell>
                                    <TableCell align="center">{row.address.geolocation.lat}</TableCell>
                                    <TableCell align="center">{row.address.geolocation.long}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">

                                    <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteUser(row.id)
                                        }}
                                    ><DeleteIcon color="error" /></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateRentalRate(row);
                                        }}
                                    ><EditIcon color='primary'/></IconButton>
                                    </Tooltip>

                                    </TableCell>
                                    </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>

            </>
        );
    }
}

export default CreateUser;