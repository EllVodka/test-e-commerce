export function saveToken(token) {
    localStorage.setItem("token", token);
    setTimeout(() => {
        removeToken(); 
    }, 3 * 60 * 60  * 1000); 
}

export function removeToken() {
    localStorage.removeItem("token");
}

export function getToken() {
    let token = localStorage.getItem("token");
    if (token === null) {
        return '';
    }
    return token;
}
