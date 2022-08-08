import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './home.css'

class Home extends Component {
    render() {
        return (
            <>



                <section>
                    <div className='cardSection'>
                        <Card  style={{ width:'300px', position: "relative", top: "120px",boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1 style={{textAlign:'center',fontSize:'40px'}}>Products</h1><br />
                                <h1 style={{textAlign:'center',position:'relative',top:'60px',fontSize:'40px'}}>15</h1>
                            </CardActionArea>
                        </Card>

                        <Card  style={{ width:'300px', height:"250px",position: "relative", top: "120px" ,left:'40px', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1 style={{textAlign:'center',fontSize:'40px'}}>Carts</h1><br />
                                <h1 style={{textAlign:'center',position:'relative',top:'60px',fontSize:'40px'}}>15</h1>
                            </CardActionArea>
                        </Card>


                        <Card  style={{ width:'300px', position: "relative", top: "120px",left:'80px', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1 style={{textAlign:'center',fontSize:'40px'}}>Users</h1><br />
                                <h1 style={{textAlign:'center',position:'relative',top:'60px',fontSize:'40px'}}>15</h1>

                            </CardActionArea>
                        </Card>

                    </div>
                </section>
            </>
        );
    }
}

export default Home;