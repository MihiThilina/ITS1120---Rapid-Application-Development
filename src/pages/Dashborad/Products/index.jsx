import React, { Component } from 'react';
import './products.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Products extends Component {
    render() {
        return (
            <>
                <main>
                  

                    <section className='productsManageSection'>
                        <div className='ManageSection'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Address" style={{ width: '70%' }}

                                />
                            </Box>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '90px' }}>
                                <Autocomplete
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Need a driver or not?" />}
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '160px' }}>

                                <input
                                    type="file"
                                    name="file"

                                />
                            </Box>

                        </div>
                        <div className='ManageSection2'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Address" style={{ width: '70%' }}

                                />
                            </Box>

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                                <TextareaAutosize
                                    style={{ width: '70%' }}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Minimum 3 rows"
                                />
                            </Box>
                        </div>

                        <button className='btnSave'>Save</button>
                        <button className='btnClear'>Clear</button>
                    </section>
                </main>
            </>
        );
    }
}

export default Products;