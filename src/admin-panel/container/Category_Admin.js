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
import { AddCategory, DeleteCategory, GetCategory, UpdateCategory } from '../../Redux/Actions/Category_Admin_Action';
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Category_Admin() {
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

    const categories = useSelector(state => state.category);

    // handleInsert

    const handleInsert = (values) => {
        dispatch(AddCategory(values));
        handleClose();
    }

    // handleDelete

    const handleDelete = () => {
        dispatch(DeleteCategory(did));
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
        dispatch(UpdateCategory(values));
        handleClose();
    }

    // schema

    let schema = yup.object().shape({
        categoryname: yup.string().min(2).max(25).required("Please enter your name..."),
        profile_img: yup.mixed().required("Please select profile image...")
    });

    // formik

    const formik = useFormik({
        initialValues: {
            categoryname: '',
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
        dispatch(GetCategory());
    }, []);

    // Table columns

    const columns = [
        { field: 'categoryname', headerName: 'NAME', width: 400 },
        {
            field: 'profile_img',
            headerName: 'PROFILE-IMG',
            width: 400,
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
                                <h3 className="breadcrumb-title">Category AdminPanel</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Category AdminPanel</li>
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
                    Add Category
                </Button>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={categories.category}
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
                    <DialogTitle>Add Category</DialogTitle>
                    <Formik value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    name="categoryname"
                                    id="categoryname"
                                    label="Enter Category Name"
                                    type="text"
                                    value={values.name}
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.categoryname && touched.categoryname ? <p className='Err'>{errors.categoryname}</p> : ''}
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
