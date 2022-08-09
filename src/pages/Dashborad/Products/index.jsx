import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { Component } from 'react';

import productService from '../../../service/products/productService';


import './products.css'

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FormData: {
                id: 21,
                title: "",
                price: 13.5,
                description: "",
                image: "",
                category: ""
            },
            categoryData: [],
            
        }

    }

    clearFields = () => {
        this.setState({
            FormData: {
                id: '',
                title: "",
                price: '',
                description: "",
                image: "",
                category: ""
            }
        })
    }


    getCategory = async () => {
        let res = await productService.GetRentalRates();
        let tempCategory = [];
        if (res.status === 200) {
            res.data.map((value) => {
                tempCategory.push(value.category)
            })     
            let unique = tempCategory.filter((val,id,array) => array.indexOf(val) == id);
            this.setState({ categoryData: unique })
        }
    }

 
    submitProducts = async () => {
        let data = this.state.FormData;
        console.log(data);
        let res = await productService.postRentalRatesService(data);
    };

    async componentDidMount() {
        await this.getCategory();
        console.log(this.state.categoryData)
    }






    render() {
        return (
            <>
                <main>


                    <section className='productsManageSection'>
                        <div className='ManageSection'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Title" style={{ width: '70%' }}
                                    value={this.state.FormData.title}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.title = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '90px' }}>
                                <Autocomplete
                                    value={this.state.FormData.category}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.FormData, { category: newValue }));
                                    }}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={this.state.categoryData}
                                    sx={{ width: 260 }}

                                    renderInput={(params) => <TextField
                                        {...params} label="Category"
                                    />
                                    }
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '160px' }}>

                                <input
                                    type="file"
                                    name="file"
                                    label="Choose Image"

                                    value={this.state.FormData.image}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.image = e.target.value
                                        this.setState({ formData })
                                    }}

                                />
                            </Box>

                        </div>
                        <div className='ManageSection2'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField id="outlined-name" label="Price" style={{ width: '70%' }}
                                    value={this.state.FormData.price}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.price = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                                <TextareaAutosize
                                    style={{ width: '70%' }}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Description"

                                    value={this.state.FormData.description}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.description = e.target.value
                                        this.setState({ formData })
                                    }}

                                />
                            </Box>
                        </div>

                        <button className='btnProductSave' type='submit' onClick={this.submitProducts}>Save</button>
                        <button type='submit' onClick={this.clearFields} className='btnProductClear'>Clear</button>
                    </section>
                </main>
            </>
        );
    }
}

export default Products;