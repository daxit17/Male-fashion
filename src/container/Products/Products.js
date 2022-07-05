import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Products() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setdOpen] = React.useState(false);
    const [did, setDid] = useState(0);
    const [update, setUpdate] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm()
        setUpdate(false)
    };

    const handleDClickOpen = () => {
        setdOpen(true);
    };

    const handleDClose = () => {
        setdOpen(false);
    };

    // schema

    let schema = yup.object().shape({
        id: yup.number().required("Please Enter Product Id...").positive().integer(),
        name: yup.string().required("Please Enter Product Name..."),
        qantity: yup.number().required("Please Enter Product Quantity...").positive().integer(),
        price: yup.number().required("Please Enter Product Price...").positive().integer(),
    });

    // formik

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            qantity: '',
            price: '',
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            if (update) {
                updatedata(values);
            } else {
                handleInsert(values);
            }
            handleClose();
        },
    });

    // handleInsert

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("products"));

        if (localData === null) {
            localStorage.setItem("products", JSON.stringify([values]))
        } else {
            localData.push(values);
            localStorage.setItem("products", JSON.stringify(localData));
        }
        LoadData();
        handleClose();
        formik.resetForm();
    }

    // Table columns

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'NAME', width: 250 },
        { field: 'qantity', headerName: 'QUANTITY', width: 250 },
        { field: 'price', headerName: 'PRICE', width: 250 },
        {
            field: 'action',
            headerName: 'ACTION',
            width: 250,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => { handleDClickOpen(); setDid(params.id) }}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    // Table rows

    const LoadData = () => {
        let localData = JSON.parse(localStorage.getItem("products"));

        if (localData !== null) {
            setData(localData);
        }
    }

    // useState

    useState(() => {
        LoadData();
    }, [])

    // handleDelete

    const handleDelete = (params) => {
        let localData = JSON.parse(localStorage.getItem("products"));

        let fData = localData.filter((l) => l.id !== did);

        localStorage.setItem("products", JSON.stringify(fData));

        handleDClose();
        LoadData();
    }

    // handleEdit

    const handleEdit = (params) => {
        handleClickOpen();
        setUpdate(true);
        formik.setValues(params.row);
    }

    // localdata

    const localdata = () => {
        const datap = JSON.parse(localStorage.getItem("products"));
        if (datap !== null) {
            setData(datap);
        }
    }

    // updatedata

    const updatedata = (values) => {
        const upddata = JSON.parse(localStorage.getItem("products"))

        const newdata = upddata.map((m) => {
            if (m.id === values.id) {
                return values;
            } else {
                return m;
            }
        });

        localStorage.setItem("products", JSON.stringify(newdata));

        handleClose();
        localdata();
        setUpdate(false);
    }

    const { handleBlur, handleChange, handleSubmit, touched, errors, values } = formik;

    return (
        <div className='products'>

            <h1 className='mt-100'>Products Information</h1>

            <Button variant="outlined" onClick={handleClickOpen}>
                Add Products
            </Button>

            <div style={{ height: 400, width: '100%' }} className='mt-100'>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog
                open={dopen}
                onClose={handleDClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure To Delete ?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>
                    {
                        (update) ?
                            <p>Update Data</p>
                            :
                            <p>Add products</p>
                    }
                </DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                value={values.id}
                                margin="dense"
                                name="id"
                                label="Enter Product Id"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.id && touched.id ? <p className='Err'> {errors.id} </p> : ''}
                            <TextField
                                value={values.name}
                                margin="dense"
                                name="name"
                                label="Enter Product Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <p className='Err'> {errors.name} </p> : ''}
                            <TextField
                                value={values.qantity}
                                margin="dense"
                                name="qantity"
                                label="Enter Product Quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.qantity && touched.qantity ? <p className='Err'> {errors.qantity} </p> : ''}
                            <TextField
                                value={values.price}
                                margin="dense"
                                name="price"
                                label="Enter Product Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.price && touched.price ? <p className='Err'> {errors.price} </p> : ''}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            {
                                (update) ?
                                    <Button type='submit'>Update</Button>
                                    :
                                    <Button type='submit'>Submit</Button>
                            }
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
        </div>
    );
}
