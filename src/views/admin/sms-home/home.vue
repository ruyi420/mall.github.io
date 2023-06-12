<template>
    <div class="big">
        <div class="up">

            <div>
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="vertical" :router="true">
                    <el-menu-item index="/home/advertise">首页广告管理</el-menu-item>
                    <el-menu-item index="/home/brand">首页热销品牌管理</el-menu-item>
                    <el-menu-item index="/home/newProduct">首页新品管理</el-menu-item>
                    <el-menu-item index="/home/recommendProduct">首页促销商品管理</el-menu-item>
                    <el-menu-item index="/home/recommendSubject">首页推荐主题管理</el-menu-item>
                </el-menu>
            </div>
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/advertise'
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.s {
    /* font-size: 18px; */
    margin-top: 13px;
}

.up {
    width: 10%;
    height: 100%;
    position: absolute;
    /* padding-right: 20px; */
    border-right: 1px solid gray;
}

.el-menu {}

.el-menu-item {
    font-size: 18px;
}

.down {
    width: 88%;
    height: 85%;
    position: absolute;
    top: 12%;
    left: 11%;
    /* left: 15%; */
    overflow-y: auto;
}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
    display: flex;
}</style>
