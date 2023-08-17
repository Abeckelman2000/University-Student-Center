import axios from 'axios';

// Function to verify token
async function verifyToken() {
    try {
        await axios.get('/api/verify-token');
        return true; // Token is valid
    } catch (error) {
        return false; // Token is invalid
    }
}

export { verifyToken };
