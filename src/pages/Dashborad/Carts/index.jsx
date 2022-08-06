import React, { Component } from 'react'
import './carts.css'
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {
    render() {
        return (
            <>
                <main>

                    <section className='CartManageSection'>
                        <div className='Section'>
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

                            <Box style={{ position: 'relative', textAlign: 'center', top: '80px', left: '90px' }}>
                                <Autocomplete
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Need a driver or not?" />}
                                />
                            </Box>



                        </div>
                        <div className='Section2'>
                            <TextField
                                style={{ position: 'relative', width: '70%', textAlign: 'center', top: '60px', left: '90px' }}
                                id="date"
                                label="Date"
                                type="date"
                                defaultValue="LocalizationProvider"

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                                <TextField id="outlined-name" label="Address" style={{ width: '70%' }}

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

export default Carts;