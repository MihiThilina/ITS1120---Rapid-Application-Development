import React, { Component } from 'react'
import './carts.css'
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import cartsService from '../../../service/carts/cartsService';

const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FormData: {
                id: '',
                userId: '',
                date: "",
                products: [
                    {
                        productId: '',
                        quantity: ''
                    },
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
            userIdData:[],

        }
    }


    clearFields = () => {
        this.setState({
            FormData: {
                id: 11,
                userId: 5,
                date: "",
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
        })
    }



    submitCarts = async () => {
        let data = this.state.FormData;
        console.log(data);

    };

    getUserID = async () => {
        let res = await cartsService.GetCarts();
        let userId = [];
        if (res.status === 200) {
            res.data.map((value) => {
                userId.push(value.userId)
            })
            this.setState({ userIdData: userId })

        }
    }


    async componentDidMount() {
        await this.getUserID();
        console.log(this.state.userIdData)
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
                                    value={this.state.FormData.userId}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.FormData, { userId: newValue }));
                                    }}
                                    options={this.state.userIdData}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="User Id" />}
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
                                
                                value={this.state.FormData.date}
                                onChange={(e) => {
                                    let formData = this.state.FormData
                                    formData.date = e.target.value
                                    this.setState({ formData })
                                }}
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
                            
                        <button type='submit' onClick={this.submitCarts} className='btnCartSave'>Save</button>
                        <button type='submit' onClick={this.clearFields} className='btnCartClear'>Clear</button>

                    </section>
                </main>
            </>
        );
    }
}

export default Carts;