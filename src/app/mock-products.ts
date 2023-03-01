import { Products } from './products';
import { Sorts } from './sort';
import Utils from './utils'

export const SORTS: Sorts[] = [
    {
        "id": 1,
        "name": " Featured",
        "key": "isFavorite",
        "type" : "number",
        "desc" : true
    },{
        "id": 2,
        "name": " Best Selling",
        "key": "sellNo",
        "type" : "number",
        "desc" : true
    },{
        "id": 3,
        "name": " Alphabetically, A-Z",
        "key": "title",
        "type" : "string",
        "desc" : false
    },{
        "id": 4,
        "name": " Alphabetically, Z-A",
        "key": "title",
        "type" : "string",
        "desc" : true
    },{
        "id": 5,
        "name": " Price, low to high",
        "key": "price",
        "type" : "number",
        "desc" : false
    },{
        "id": 6,
        "name": " Price, high to low",
        "key": "price",
        "type" : "number",
        "desc" : true
    },{
        "id": 7,
        "name": " Date, new to old",
        "key": "openDate",
        "type" : "number",
        "desc" : true
    },{
        "id": 8,
        "name": " Date, old to new",
        "key": "openDate",
        "type" : "number",
        "desc" : false
    }
];

export const PRODUCTS: Products[] = [
    {
        "id": 1,
        "title": "iPhone 14 - 128GB - Starlight, 6.1-inch Super Retina XDR display",
        "price": 999.99,
        "description": "iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light.",
        "category": "Apple iPhones",
        "image": "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Apple-iPhone-14-Starlight-4.jpg",
        "isFavorite": 1,
        "sellNo": 52,
        "openDate": 20230301
    },{
        "id": 2,
        "title": " iPhone 128 GB Green 6.7-inch ",
        "price": 700,
        "description": "Released 2021, September 24 204g, 7.7mm thickness iOS 15, up to iOS 16.3 128GB/256GB/1TB storage, no card slot",
        "category": "Apple iPhones",
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-3.jpg",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20220301
    }, {
        "id": 2,
        "title": " iPhone 13 Pro Max - 1TB Blue 6.7-inch ",
        "price": 2000,
        "description": "Released 2021, September 24 240g, 7.7mm thickness iOS 15, up to iOS 16.3 128GB/256GB/1TB storage, no card slot",
        "category": "Apple iPhones",
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20230301
    },  {
        "id": 2,
        "title": "iPhone 14 - 256GB - Midnight, 6.1-inch Super Retina XDR display ",
        "price": 2000,
        "description": "iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light. Crash Detection, a new safety feature, calls for help when you can’t.",
        "category": "Apple iPhones",
        "image": "https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Midnight-1.jpg",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20230101
    }, {
        "id": 3,
        "title": "iPhone 14 - 128GB - Purple",
        "price":999.99,
        "description": "iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light.",
        "category": "Apple iPhones",
        "image": "https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Purple-4.jpg",
        "isFavorite": 0,
        "sellNo": 63,
        "openDate": 20230201
    }, {
        "id": 4,
        "title": "iPhone 14 - 256GB - Blue",
        "price": 2000,
        "description": "iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light. Crash Detection, a new safety feature, calls for help when you can’t.",
        "category": "Apple iPhones",
        "image": "https://shekem-df.co.il/media/catalog/product/cache/6b2f4d2b8c238597c4864fc429fa65dd/2/9/292947_1_2.jpg",
        "isFavorite": 1,
        "sellNo": 39,
        "openDate": 20230205
    }, {
        "id": 5,
        "title": "Xiomi Smart Phone Poco X5 Pro 6.67'' ",
        "price": 695,
        "description": "Released 2023, February 07181g, 7.9mm thickness ,Android 12, MIUI 14 for POCO 128GB/256GB storage, no card slot",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x5-pro-5g-1.jpg",
        "isFavorite": 0,
        "sellNo": 2,
        "openDate": 20230205
    },{
        "id": 6,
        "title": "Xiaomi Redmi K60E 6.67'' ",
        "price": 500,
        "description": "Released 2022, December 27 202g, 8.5mm thickness Android 12, MIUI 13 128GB/256GB/512GB storage, no card slot",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k60e-1.jpg",
        "isFavorite": 1,
        "sellNo": 450,
        "openDate": 20210502
    },{
        "id": 6,
        "title": "Xiaomi 13 Lite 6.55'' ",
        "price": 500,
        "description": "Exp. release 2023, March 08 171g, 7.2mm thickness Android 12, MIUI 14 128GB/256GB storage, no card slot",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-13-lite-1.jpg",
        "isFavorite": 1,
        "sellNo": 450,
        "openDate": 20210502
    },{
        "id": 6,
        "title": "Xiomi Smart Phone Poco X5 6.67'' ",
        "price": 700,
        "description": "Released 2023, February 07 189g, 8mm thickness ,Android 12, MIUI 13 for POCO 128GB/256GB storage, microSDXC",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x5-5g-1.jpg",
        "isFavorite": 1,
        "sellNo": 450,
        "openDate": 20220502
    },  {
        "id": 7,
        "title": "Xiaomi Redmi Note 12 Pro Speed 6.67''",
        "price": 549.99,
        "description": "Released 2022, December 27 181g, 7.9mm thickness Android 13, MIUI 14 128GB/256GB storage, no card slot",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/redmi-note-12-5g-international-0.jpg",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20220201
    }, {
        "id": 8,
        "title": "Xiaomi Redmi K60 Pro 6.67 ''",
        "price": 699.99,
        "description": "Released 2023, January 01 201g or 205g, 8.6mm thickness Android 13, MIUI 14 128GB/256GB/512GB storage, no card slot",
        "category": "Xiaomi",
        "image": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k60-pro-1.jpg",
        "isFavorite": 1,
        "sellNo": 2,
        "openDate": 20210127
    }, {
        "id": 9,
        "title": "Samsung Galaxy F04 6.5'' ",
        "price": 400,
        "description": "Released 2023, February 17 234g, 8.9mm thickness Android 13, One UI 5.1 128GB/256GB/1TB storage, no card slot",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-f04-2.jpg",
        "isFavorite": 0,
        "sellNo": 30,
        "openDate": 20220702
    }, {
        "id": 9,
        "title": "Samsung Galaxy S23 Ultra 6.8 '' ",
        "price": 900,
        "description": "Released 2023, February 17 234g, 8.9mm thickness Android 13, One UI 5.1 128GB/256GB/1TB storage, no card slot",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg",
        "isFavorite": 0,
        "sellNo": 30,
        "openDate": 20220702
    }, {
        "id": 10,
        "title": "Samsung Galaxy Z Flip4 6.7 ''",
        "price": 1500,
        "description": "Released 2022, August 25 187g, 6.9mm thickness Android 12, up to Android 13, One UI 5.1 128GB/256GB/512GB storage, no card slot",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip4-5g-01.jpg",
        "isFavorite": 0,
        "sellNo": 1,
        "openDate": 20220201
    }, {
        "id": 11,
        "title": "Samsung Galaxy Z Fold4 7.6'' ",
        "price": 1009,
        "description": "Released 2022, August 25 263g, 6.3mm thickness Android 12L, up to Android 13, One UI 5.1 256GB/512GB/1TB storage, no card slot",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold4-5g-1.jpg",
        "isFavorite": 1,
        "sellNo": 44,
        "openDate": 20210201
    },{
        "id": 12,
        "title": "Samsung Galaxy A14 5G 6.6'' ",
        "price": 499.99,
        "description": "Released 2023, January 12 202g, 9.1mm thickness Android 13, One UI Core 5 64GB/128GB storage, microSDXC",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a14-5g-1.jpg",
        "isFavorite": 0,
        "sellNo": 3,
        "openDate": 20211111
    } , {
        "id": 12,
        "title": "Samsung Galaxy S23+ 6.6'' ",
        "price": 799.99,
        "description": "Released 2023, February 17 196g, 7.6mm thickness Android 13, One UI 5.1 256GB/512GB storage, no card slot",
        "category": "Samsung",
        "image": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-plus-5g-1.jpg",
        "isFavorite": 0,
        "sellNo": 3,
        "openDate": 20221111
    } , {
        "id": 15,
        "title": "Google Pixel 7 Pro 6.7'' ",
        "price": 899.99,
        "description": "Released 2022, October 13 212g, 8.9mm thickness Android 13 128GB/256GB/512GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-pro-2.jpg",
        "isFavorite": 1,
        "sellNo": 34,
        "openDate": 20230201
    }, {
        "id": 16,
        "title": "Google Pixel 4 XL 6.3'' ",
        "price": 699.99,
        "description": "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 13 64GB/128GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-xl-1.jpg",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20220415
    },{
        "id": 16,
        "title": "Google Pixel 6a 6.1'' ",
        "price": 699.99,
        "description": "Released 2022, July 21 178g, 8.9mm thickness Android 12, up to Android 13 128GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6a-0.jpg",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20220415
    }, {
        "id": 17,
        "title": "Google Pixel 7 6.3''",
        "price": 650,
        "description": "Released 2022, October 13 197g, 8.7mm thickness Android 13 128GB/256GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-2.jpg",
        "isFavorite": 0,
        "sellNo": 8,
        "openDate": 20230521
    }, {
        "id": 18,
        "title": "Google Pixel 6 Pro 6.7'' ",
        "price": 700,
        "description": "Released 2021, October 28 210g, 8.9mm thickness Android 12, up to Android 13 128GB/256GB/512GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg",
        "isFavorite": 0,
        "sellNo": 12,
        "openDate": 20210201
    }, {
        "id": 18,
        "title": "Google Pixel 5 6.0'' ",
        "price": 500,
        "description": "Released 2020, October 15 151g, 8mm thickness Android 11, up to Android 13 128GB storage, no card slot",
        "category": "Google",
        "image": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg",
        "isFavorite": 0,
        "sellNo": 12,
        "openDate": 20210201
    }, 
];
                        
export const CATEGORIES = Object.keys(Utils.groupBy(PRODUCTS, 'category'));