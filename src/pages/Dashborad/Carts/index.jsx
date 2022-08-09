import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import React, { Component } from 'react'

import cartsService from '../../../service/carts/cartsService';
import productService from '../../../service/products/productService';
import User from  '../../../service/user/User';

import './carts.css'

const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FormData: {
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
            userNameData:[],
            productTitle:[],
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
            productFormData: {
                id: '',
                title: "",
                price: '',
                description: "",
                image: "",
                category: ""
            }
        }
    }


    clearFields = () => {
        this.setState({
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
            }
        })
    }



    IdS = async () => {
        let res = await User.GetUser();
        let userids= [];
        res.data.map((value) => {
            userids.push(value.id)
        })
        this.setState({ userId: userids })
        if (res.status === 200) {
           
        }
    }

    productIdS = async () => {
        let res = await productService.GetRentalRates();
        let productsids= [];
        res.data.map((value) => {
            productsids.push(value.id)
        })
        
        this.setState({ id: productsids })
        if (res.status === 200) {
           
        }
    }


    submitCarts = async () => {
        let data = this.state.FormData;
        console.log(data);
        let res = await cartsService.postCarts(data);
    };

    getUserName = async () => {
        let res = await User.GetUser();
        let userNames= [];
        res.data.map((value) => {
            userNames.push(value.username)
        })
        this.setState({ userNameData: userNames })
        if (res.status === 200) {
           
        }
    }

    getproductTitle = async () => {
        let res = await productService.GetRentalRates();
        let productTitles= [];
        res.data.map((value) => {
            productTitles.push(value.title)
        })
        let unique =productTitles.filter((val,id,array) => array.indexOf(val) == id) 
        this.setState({ productTitle: unique })
        if (res.status === 200) {
      
        }
    }


    async componentDidMount() {
        await this.getUserName();
        await this.getproductTitle();
        await this.IdS();
        await this.productIdS();

        console.log(this.productIdS);
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
                                    value={this.state.UserData.username}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.UserData, { username: newValue }));
                                    }}
                                    options={this.state.userNameData}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="User Id" />}
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '80px', left: '90px' }}>
                                <Autocomplete
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    value={this.state.productFormData.title}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.productFormData, { title: newValue }));
                                    }}
                                    options={this.state.productTitle}


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