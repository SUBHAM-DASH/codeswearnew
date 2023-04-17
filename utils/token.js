export function checkToken() {
    if (typeof window !== 'undefined') {
        // const token = localStorage.getItem('codeswear-token');

        // Check if the cookie is available
        const codeswearToken = getCookie('codeswear-token');
        // console.log("codeswearToken",codeswearToken)

        if (!codeswearToken) {
            return false;
        }
        return true;
    }
    return false;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}
