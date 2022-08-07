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
            }
        }

    }


    submitProducts = async () => {
        let data = this.state.FormData;
        console.log(data);

    };






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
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Category" />}
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

                        <button className='btnSave' type='submit' onClick={this.submitProducts}>Save</button>
                        <button className='btnClear'>Clear</button>
                    </section>
                </main>
            </>
        );
    }
}

export default Products;