import urls from '../../urls';
import saveToken from  './saveToken';
import getToken from './getToken';

const refresh_tokenURL = urls[8].url; 

const getNewToken = (token) => (
    fetch(refresh_tokenURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text()) 
);

const refreshToken = async () => {
    try {
        const token = await getToken();
        
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('Chua co token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
    } catch (error) {
        console.log(error);
    }
};

export default refreshToken;