// import urls from '../../urls';

const { exp } = require("react-native/Libraries/Animated/src/Easing");

// const check_loginURL = urls[7].urls;

// const checkLogin = (token) => (
//     fetch(check_loginURL,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify({ token })
//     })
//     .then(res => res.json())
// );

// export default checkLogin;
const urls = 'http://192.168.2.105:8888/MobileShop/api/check_login.php';
const checkLogin = (token) => (
    fetch(urls,
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
// module.exports = checkLogin;
export default checkLogin;