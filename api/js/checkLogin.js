import urls from '../../urls';
const check_loginURL = urls[7].url;
const checkLogin = (token) => (
    fetch(check_loginURL,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);
export default checkLogin;
