import urls from '../../urls';
// const change_infoURL = urls[9].url;
const change_infoURL='http://192.168.2.105:8888/MobileShop/api/change_info.php';

const changeInfoAPI = (token, fullname, birthday, phone_number, address, gender) =>{
    fetch(change_infoURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, fullname, birthday, phone_number, address, gender })
    })
    .then(res => res.json())
}

export default changeInfoAPI;