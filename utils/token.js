export function checkToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return true;
    }
    return false;
}
