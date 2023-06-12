<template>
    <div>
        <el-page-header @back="goBack">
        </el-page-header>
        <div class="spDiv">
            <span>热销品牌</span>
        </div>
        <div class="up" style="margin-top: 20px;">
            <div class="imgDiv">
                <el-carousel type="card" height="400px" width="800px">
                    <el-carousel-item v-for="item in advertiseArr" :key="item">
                        <img :src="item.pic" class="ha im" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="cen">
            <div class="ha">
                <div class="spDiv">
                    <span>新品商品</span>
                </div>
                <div class="item">
                    <template v-for="p in newArr">
                        <FirstProduct :product="p"></FirstProduct>
                    </template>
                </div>
            </div>
        </div>

        <div class="cen">
            <div class="ha">
                <div class="spDiv">
                    <span>促销商品</span>
                </div>
                <div class="item">
                    <template v-for="p in recArr">
                        <FirstProduct :product="p"></FirstProduct>
                    </template>
                </div>
            </div>
        </div>

        <div class="cen">
            <div class="ha">
                <div class="spDiv">
                    <span>推荐主题</span>
                </div>
                <div class="subDiv">
                    <template v-for="sub in subArr">
                        <div class="sub">
                            <span>{{ sub.subjectName }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    allProduct,
    allAdvertise,
    allRecommendProduct,
    allNewProduct,
    allSub
} from "@/http/sms/firts";
import FirstProduct from "../../../components/sms/firstProduct.vue";
export default {
    mounted() {
        this.getAllAdv()
        this.getRec()
        this.getAllSub()
    },
    data() {
        return {
            advertiseArr: [],
            productArr: [],
            recArr: [],
            newArr: [],
            subArr: []
        };
    },
    methods: {
        getAllSub() {
            console.log('执行了')
            allSub().then(resp => {
                console.log('所有主题:' + JSON.stringify(resp))
                this.subArr = resp.data.page.records
                console.log('主题:' + JSON.stringify(this.subArr[0]))
            })
        },
        goBack() {
            this.$router.push('/home')
        },
        //获取广告
        getAllAdv() {
            allAdvertise().then(resp => {
                resp.data.page.records.forEach(item => {
                    if (item.pic != "" && isNaN(parseInt(item.pic))) {
                        this.advertiseArr.push(item);
                    }
                });
            });
        },
        //获取推荐
        getRec() {
            let ha = this;
            allProduct().then(resp => {
                let product = resp.data.page.records;
                console.log('商品:' + JSON.stringify(product[0]))
                let arr = [];
                allRecommendProduct().then(a => {
                    arr = a.data.page.records;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < product.length; j++) {
                            if (arr[i].productId == product[j].id) {
                                product[j].recommandStatus = arr[i].recommendStatus
                                ha.recArr.push(product[j]);
                            }
                        }
                    }
                    ha.getNew();
                });
            });
        },
        //获取新品
        getNew() {
            let ha = this
            allProduct().then(resp => {
                let product = resp.data.page.records;
                let arr = [];
                allNewProduct().then(a => {
                    arr = a.data.page.records;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < product.length; j++) {
                            if (arr[i].productId == product[j].id) {
                                product[j].recommandStatus = arr[i].recommendStatus
                                ha.newArr.push(product[j]);
                            }
                        }
                    }
                });
            });
        }
    },
    components: { FirstProduct }
}
</script>
<style  scoped>
.sub {
    /* height: 50px; */
    width: 400px;
    padding: 10px 25px;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 12px 10px 15px -3px rgba(0,0,0,0.1);
}

.subDiv {
    margin-left: 100px;
    width: 1500px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 30px;
}

.cen {
    display: flex;
    justify-content: center;
}

.ha {
    padding-left: 30px;
    margin-top: 50px;
}

.im{
    width: 900px;
    height: 400px;
}

.item {
    margin-left: 100px;
    width: 1500px;
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 50px;

}

.spDiv {
    display: flex;
    margin-top: 30px;
}

.spDiv span {
    font-weight: bold;
    font-size: 20px;
    font-family: Kaiti;
}

.imgDiv {
    width: 80%;
    height: 400px;
    /* border: 1px solid rebeccapurple; */
}

.img {
    width: 120px;
    height: 90px;
    margin-left: -8px;
}

.up {
    display: flex;
    justify-content: center;
}
</style>
