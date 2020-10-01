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
    }
]

export default urls;