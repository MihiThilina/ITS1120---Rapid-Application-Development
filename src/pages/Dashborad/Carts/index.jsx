import React, { Component } from 'react'
import './carts.css'
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FormData: {
                id: 11,
                userId: 5,
                date: "2020-02-03",
                products: [
                    {
                        productId: 5,
                        quantity: 1
                    },
                    {
                        productId: 1,
                        quantity: 5
                    }
                ]
            }
        }
    }





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
                                        {...params} label="User Name" />}
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '80px', left: '90px' }}>
                                <Autocomplete
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Product Title" />}
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
                                <TextField id="outlined-name" label="Qty" style={{ width: '70%' }}
                                    value={this.state.FormData.products.quantity}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.products.quantity = e.target.value
                                        this.setState({ formData })
                                    }}
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