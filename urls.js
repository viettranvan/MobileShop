const localhost = 'http://192.168.2.105:8888/';

const urls = [
    {
        index: 0,
        name: 'index_URL',
        url: localhost + 'MobileShop/api/'
    },
    {
        index: 1,
        name: 'images_type_URL',
        url: localhost + 'MobileShop/api/images/type/'
    },
    {
        index: 2,
        name: 'images_product_URL',
        url: localhost + 'MobileShop/api/images/product/'
    },
    {
        index: 3,
        name: 'product_detail_URL',
        url: localhost + 'MobileShop/api/product_detail.php'
    },
    {
        index: 4,
        name: 'register_URL',
        url: localhost + 'MobileShop/api/register.php'
    },
    {
        index: 5,
        name: 'login_URL',
        url: localhost + 'MobileShop/api/login.php'
    },
    {
        index: 6,
        name: 'changeInfo_URL',
        url: localhost + 'MobileShop/api/changeInfo.php'
    },
    {
        index: 7,
        name: 'check_loginURL',
        url: localhost + 'MobileShop/api/check_login.php'
    },
    {
        index: 8,
        name: 'refresh_tokenURL',
        url: localhost + 'MobileShop/api/refresh_token.php'
    },
    {
        index: 9,
        name: 'change_infoURL',
        url: localhost + 'MobileShop/api/change_info.php'
    }
]

export default urls;