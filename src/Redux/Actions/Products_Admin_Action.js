import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Firebase";
import * as ActionTypes from "../ActionTypes";

export const GetProducts = () => async (dispatch) => {

    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });

        dispatch({ type: ActionTypes.GET_PRODUCTS_DATA, payload: data })
    } catch (e) {
        console.log(e);
    }

}

export const AddProducts = (data) => async (dispatch) => {
    try {

        let randomNum = Math.floor(Math.random() * 1000000).toString();

        const productsRef = ref(storage, 'products/' + randomNum);

        uploadBytes(productsRef, data.profile_img)
            .then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const proRef = await addDoc(collection(db, "products"), {
                            ...data,
                            profile_img: url,
                            fileName: randomNum
                        });
                        dispatch({
                            type: ActionTypes.PRODUCTS_ADD, payload: {
                                id: proRef.id,
                                ...data,
                                profile_img: url
                            }
                        })
                    })
            });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const DeleteProducts = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "products", id));
        dispatch({ type: ActionTypes.PRODUCTS_DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const UpdateProducts = (data) => async (dispatch) => {
    try {
        const productsRef = doc(db, "products", data.id);

        if (typeof data.profile_img === "string") {
            await updateDoc(productsRef, {
                name: data.name,
            });
            dispatch({ type: ActionTypes.PRODUCTS_UPDATE, payload: data })
        } else {
            const delproductsRef = ref(storage, "products/" + data.fileName);
            let randomNum = Math.floor(Math.random() * 1000000).toString();
            const updproductsRef = ref(storage, 'products/' + randomNum);

            deleteObject(delproductsRef)
                .then(() => {
                    uploadBytes(updproductsRef, data.profile_img)
                        .then((snapshot) => {
                            getDownloadURL(ref(storage, snapshot.ref))
                                .then(async (url) => {
                                    await updateDoc(productsRef, {
                                        name: data.name,
                                        fileName: randomNum,
                                        profile_img: url
                                    });
                                    dispatch({ type: ActionTypes.PRODUCTS_UPDATE, payload: { ...data, fileName: randomNum, profile_img: url } })
                                })
                        })
                })
        }
    } catch (error) {
        console.log(error);
    }
}
