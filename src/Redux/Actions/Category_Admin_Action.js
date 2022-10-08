import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Firebase";
import * as ActionTypes from "../ActionTypes";

export const GetCategory = () => async (dispatch) => {

    try {
        const querySnapshot = await getDocs(collection(db, "category"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });

        dispatch({ type: ActionTypes.GET_CATEGORY_DATA, payload: data })
    } catch (e) {
        console.log(e);
    }

}

export const AddCategory = (data) => async (dispatch) => {
    try {

        let randomNum = Math.floor(Math.random() * 1000000).toString();

        const categoryRef = ref(storage, 'category/' + randomNum);

        uploadBytes(categoryRef, data.profile_img)
            .then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const catRef = await addDoc(collection(db, "category"), {
                            ...data,
                            profile_img: url,
                            fileName: randomNum
                        });
                        dispatch({
                            type: ActionTypes.ADD_CATEGORY_DATA, payload: {
                                id: catRef.id,
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

export const DeleteCategory = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "category", id));
        dispatch({ type: ActionTypes.DELETE_CATEGORY_DATA, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const UpdateCategory = (data) => async (dispatch) => {
    try {
        const categoryRef = doc(db, "category", data.id);

        if (typeof data.profile_img === "string") {
            await updateDoc(categoryRef, {
                name: data.name,
            });
            dispatch({ type: ActionTypes.UPDATE_CATEGORY_DATA, payload: data })
        } else {
            const delcategoryRef = ref(storage, "category/" + data.fileName);
            let randomNum = Math.floor(Math.random() * 1000000).toString();
            const updcategoryRef = ref(storage, 'category/' + randomNum);

            deleteObject(delcategoryRef)
                .then(() => {
                    uploadBytes(updcategoryRef, data.profile_img)
                        .then((snapshot) => {
                            getDownloadURL(ref(storage, snapshot.ref))
                                .then(async (url) => {
                                    await updateDoc(categoryRef, {
                                        name: data.name,
                                        fileName: randomNum,
                                        profile_img: url
                                    });
                                    dispatch({ type: ActionTypes.UPDATE_CATEGORY_DATA, payload: { ...data, fileName: randomNum, profile_img: url } })
                                })
                        })
                })
        }
    } catch (error) {
        console.log(error);
    }
}
