import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Provider } from "react-redux";
import { auth } from "../../Firebase";

export const SignUpApi = (data) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Please check your email..." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        });
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({ payload: "Email is already used..." })
                } else {
                    reject({ payload: errorMessage })
                }
            })

    })
}

export const SignInApi = (data) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    resolve({ payload: "You are successfully login..." })
                } else {
                    reject({ payload: "Please verify your email..." })
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Please Check Your Email." });
                } else if (errorCode.localeCompare("auth/user-not-found") == 0) {
                    reject({ payload: "Please Check Your Password" });
                } else {
                    reject({ payload: errorCode });
                }

            });
    })
}

export const LogOutApi = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => {
                resolve({ payload: "You are succesfully logout..." })
            })
            .catch((error) => {
                reject({ payload: error });
            })
    })
}

export const GoogleSignInApi = () => {
    return new Promise((resolve, reject) => {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                resolve({ payload: user })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

                reject({ payload: error })
            });
    })
}

export const ForgotPasswordApi = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Forgot PassWord SuccessFully and Check Your Email" })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject({ payload: "Email Is Wrong" })
            });

    })
}