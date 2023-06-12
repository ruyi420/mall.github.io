import { post, get } from "./index"

let page = {
    current:1,
    size:300
}

const allRecommendProduct = () =>{
    return post('sms-home-recommend-product/page',page)
}

const allNewProduct = () =>{
    return post('sms-home-new-product/page',page)
}

const allAdvertise = () =>{
    return post('sms-home-advertise/page',page)
}

const allProduct = () =>{
    return post('pms-product/page',page)
}

const allSub = () =>{
    return post('sms-home-recommend-subject/page',page)
}

export{
    allProduct,
    allAdvertise,
    allRecommendProduct,
    allNewProduct,
    allSub
}