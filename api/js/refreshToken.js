import urls from '../../urls';
import saveToken from  './saveToken';

const refresh_tokenURL = urls[8].url; 

const refreshToken = (token) => {
    fetch(refresh_tokenURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text())
    .then(newToken => saveToken(newToken));
};

export default refreshToken;