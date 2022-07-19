import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const orgData = [
    {
        id: 101,
        name: "Table",
        quantity: 5000,
        price: "$" + " " + 2500,
        warrenty: 1
    },
    {
        id: 102,
        name: "ALIQUAM LOBORTIS",
        quantity: 1000,
        price: "$" + " " + 3000,
        warrenty: 2021
    },
    {
        id: 103,
        name: " CONDIMENTUM POSUERE",
        quantity: 5000,
        price: "$" + " " + 4000,
        warrenty: 3
    },
    {
        id: 104,
        name: " DONEC EU LIBERO AC",
        quantity: 200,
        price: "$" + " " + 8000,
        warrenty: 1
    },
    {
        id: 105,
        name: " EPICURI PER LOBORTIS",
        quantity: 2500,
        price: "$" + " " + 4500,
        warrenty: 2
    },
    {
        id: 106,
        name: "Table",
        quantity: 5000,
        price: "$" + " " + 2500,
        warrenty: 1
    },
    {
        id: 107,
        name: "ALIQUAM LOBORTIS",
        quantity: 1000,
        price: "$" + " " + 3000,
        warrenty: 2021
    },
    {
        id: 108,
        name: " CONDIMENTUM POSUERE",
        quantity: 5000,
        price: "$" + " " + 4000,
        warrenty: 3
    },
    {
        id: 109,
        name: " DONEC EU LIBERO AC",
        quantity: 200,
        price: "$" + " " + 8000,
        warrenty: 1
    },
    {
        id: 110,
        name: " EPICURI PER LOBORTIS",
        quantity: 2500,
        price: "$" + " " +4500,
        warrenty: 2
    },
]



function Product(props) {
    const [pdata, setPdata] = useState(orgData)

    const Sdata = (val) => {
        const searchdata = orgData.filter((l) => (
            l.name.toLowerCase().includes(val.toLowerCase()) ||
            l.quantity.toString().includes(val) ||
            l.price.includes(val) ||
            l.warrenty.toString().includes(val) ||
            l.id.toString().includes(val)
        ))
        setPdata(searchdata);
    }

    return (
        <div>

            <div class="breadcrumb-section breadcrumb-bg-color--golden">
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="breadcrumb-title">Products</h3>
                                <div class="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li class="active" aria-current="page">Products</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>

                <input className='ms-4 rounded-1 p-2'
                    margin="dense"
                    placeholder='Search'
                    name="name"
                    label="Search"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => Sdata(e.target.value)}
                />

                <div className="row">
                    {
                        pdata.map((p, i) => {
                            return (
                                <Card key={i} className="col-3 m-4"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className='fw-bold fs-2' >
                                            {p.name}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted fs-4"
                                            tag="h6"
                                        >
                                            {p.quantity}
                                        </CardSubtitle>
                                        <CardText className='fs-5'>
                                            {p.warrenty}
                                        </CardText>
                                        <CardText className='fs-5'>
                                            {p.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default Product;
