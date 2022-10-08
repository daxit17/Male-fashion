import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddProducts, DeleteProducts, GetProducts, UpdateProducts } from '../../Redux/Actions/Products_Admin_Action';

function Products_Admin(props) {

    const [open, setOpen] = React.useState(false);
    const [dopen, setdOpen] = React.useState(false);
    const [did, setDid] = useState(0);
    const [update, setUpdate] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    const handledClickOpen = () => {
        setdOpen(true);
    };

    const handledClose = () => {
        setdOpen(false);
        formik.resetForm();
    };

    let dispatch = useDispatch();

    const products = useSelector(state => state.products);

    // handleInsert

    const handleInsert = (values) => {
        dispatch(AddProducts(values));
        handleClose();
    }

    // handleDelete

    const handleDelete = () => {
        dispatch(DeleteProducts(did));
        handledClose();
    }

    // handleEdit

    const handleEdit = (params) => {
        handleClickOpen();
        setUpdate(true);
        formik.setValues(params.row)
    }

    // handleUpdate

    const handleUpdate = (values) => {
        dispatch(UpdateProducts(values));
        handleClose();
    }

    // schema

    let schema = yup.object().shape({
        name: yup.string().min(2).max(25).required("Please enter products name..."),
        price: yup.number().required("Please enter products price").positive().integer(),
        quantity: yup.number().required("Please enter products quantity").positive().integer(),
        profile_img: yup.mixed().required("Please select profile image...")
    });

    // formik

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            profile_img: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdate(values);
            } else {
                handleInsert(values);
            }
        },
    });

    // useEffect

    useEffect(() => {
        dispatch(GetProducts());
    }, []);

    // Table columns

    const columns = [
        { field: 'name', headerName: 'NAME', width: 200 },
        { field: 'price', headerName: 'PRICE', width: 200 },
        { field: 'quantity', headerName: 'QUANTITY', width: 200 },
        {
            field: 'profile_img',
            headerName: 'PROFILE-IMG',
            width: 200,
            renderCell: (params) => (
                <img src={params.row.profile_img} width={50} height={50} />
            )
        },
        {
            field: 'action',
            headerName: 'ACTION',
            width: 400,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => { handledClickOpen(); setDid(params.id) }}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => { handleEdit(params) }}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        },
    ];

    let { handleBlur, handleChange, handleSubmit, errors, touched, values, setFieldValue } = formik;

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Products AdminPanel</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Products AdminPanel</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container text-center'>

                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Products
                </Button>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={products.products}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>

                <Dialog
                    open={dopen}
                    fullWidth
                    onClose={handledClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure to delete?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handledClose}>NO</Button>
                        <Button onClick={() => handleDelete()} >
                            YES
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog fullWidth open={open} onClose={handleClose}>
                    <DialogTitle>Add Products</DialogTitle>
                    <Formik value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField
                                    margin="dense"
                                    name="name"
                                    id="name"
                                    label="Enter Products Name"
                                    type="text"
                                    value={values.name}
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <p className='Err'>{errors.name}</p> : ''}

                                <TextField
                                    margin="dense"
                                    name="price"
                                    id="price"
                                    label="Enter Products Price"
                                    type="text"
                                    value={values.price}
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.price && touched.price ? <p className='Err'>{errors.price}</p> : ''}

                                <TextField
                                    margin="dense"
                                    name="quantity"
                                    id="quantity"
                                    label="Enter Products Quantity"
                                    type="text"
                                    value={values.quantity}
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.quantity && touched.quantity ? <p className='Err'>{errors.quantity}</p> : ''}

                                <input
                                    name="profile_img"
                                    id="profile_img"
                                    type="file"
                                    onChange={(e) => setFieldValue("profile_img", e.target.files[0])}
                                />
                                {errors.profile_img && touched.profile_img ? <p className='Err'>{errors.profile_img}</p> : null}
                                <DialogActions>
                                    <Button onClick={handleClose}>NO</Button>
                                    <Button type="submit">YES</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>

                </Dialog>
            </div>
        </>
    );
}

export default Products_Admin;