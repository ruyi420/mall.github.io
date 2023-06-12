<template>
    <div class="big">
        <div>
            <img :src="product.pic" class="img" />
        </div>

        <div class="down">
            <div class="item">
                <span>{{ product.name }}</span>
            </div>

            <div class="item">
                <span class="sub">{{ product.subTitle }}</span>
            </div>

            <div class="item">
                <span>{{ product.productCategoryName }}</span>
            </div>

            <div class="item">
                <span>￥{{ product.price }}</span>
            </div>

            <div class="item" style="justify-content: space-between;">
                <el-tag v-if="product.publishStatus == 0">上架</el-tag>
                <el-tag v-if="product.publishStatus == 1" type="info">下架</el-tag>
                <!-- <span>{{ product.recommandStatus == 0 ? '不推荐' : '推荐' }}</span> -->

                <el-tag v-if="product.recommandStatus == 0" type="danger">不推荐</el-tag>
                <el-tag v-if="product.recommandStatus == 1" >推荐</el-tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { product: {} },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style scoped>
.sub{
    font-size: 15px;
    color: grey;
}

.item{
    display: flex;
    margin-top: 10px;
}
.down {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px;
}

.img {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    /* border: 1px solid rebeccapurple; */
    /* margin-left: 25px; */
}

.big {
    width: 600px;
    height: 250px;
    margin-left: 50px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    display: flex;
    border-radius: 10px;
}
</style>
