export function checkToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('codeswear-token');
        if (!token) {
            return false;
        }
        return true;
    }
    return false;
}
