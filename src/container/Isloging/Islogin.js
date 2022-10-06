const Islogin = () => {

    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return true;
    } else {
        return false;
    }

}
export default Islogin;