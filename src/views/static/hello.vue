<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext" style="margin-top: 200px;">
        <h2 style="color: rgb(82, 166, 226);">welcome</h2>
      </div>

      <div class="formdata">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="acc">
            <!-- <el-input v-model="form.acc" clearable placeholder="请输入账号"></el-input> -->
            <input v-model="form.acc" class="inp"/>
          </el-form-item>
          <el-form-item prop="pwd">
            <input v-model="form.pwd" class="inp"/>
          </el-form-item>
        </el-form>
      </div>

      <div class="butt">
        <div>

        </div>
        <!-- <el-button type="primary"  @click.native.prevent="managerLogin">管理员登录 -->
          <button type="button" @click.native.prevent="managerLogin">管理员登录</button>
        <!-- </el-button> -->
        <!-- <el-button type="primary" @click.native.prevent="userLogin">用户登录 -->
          <button type="button" @click.native.prevent="userLogin">用户登录</button>
        <!-- </el-button> -->
      </div>

    </div>
  </div>
</template>

<script>
import Msg from "@/utils/msg/msg";
export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        acc: '',
        pwd: ''
      },
      rules: {
        acc: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    //管理员登录
    managerLogin() {
      if(this.form.acc != 'admin' || this.form.pwd != '12345'){
        Msg.fail('账号密码错误')
        return
      }
      this.$router.push('/home')
    },
    userLogin() {
        this.$router.push('/first')
    },
  }
}
</script>

<style scoped>
button{
  width:100px;
  height: 30px;
  border-radius: 10px;
  background-color: rgba(30,144,255,0.2);
  margin-left: 12px
}
.ha{
  border: 1px solid rebeccapurple;
}
.inp{
  width: 200px;
  height: 40px;
  border-radius: 20px;
  margin-left: 100px;
}
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url("@/assets/dz.jpg"); 
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.butt {
  margin-top: 10px;
  text-align: center;
  margin-left: -55px;
  width: 500px;
}

.shou {
  cursor: pointer;
  color: #606266;
}

/*ui*/
/* /deep/ .el-form-item__label {
  font-weight: bolder;
  font-size: 15px;
  text-align: left;
}

/deep/ .el-button {
  width: 100%;
  margin-bottom: 10px;

} */
</style>
