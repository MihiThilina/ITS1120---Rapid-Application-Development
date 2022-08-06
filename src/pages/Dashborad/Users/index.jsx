import React, { Component } from 'react';
import './user.css'
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


  


class Users extends Component {






    render() {
        return (
            <>

                <section className='userTable'>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1300 }} aria-label="customized table">
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
                            

                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>

            </>
        );
    }
}

export default Users;