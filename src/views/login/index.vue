<template>
    <el-row class="login" type="flex" justify="center" align="middle">
        <el-form class="loginForm" :model="loginFormData">
            <div style="text-align: center;margin: 1rem 0">
                <el-avatar size="large"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <el-form-item>
                <el-select v-model="loginFormData.schId" placeholder="请选择学校">
                    <el-option
                            v-for="item in schList"
                            :key="item.schId"
                            :label="item.schName"
                            :value="item.schId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginFormData.stuId" placeholder="学号">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginFormData.stuPwd" placeholder="密码">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                schList: [
                    {
                        schId: 1,
                        schName: 'xxxxx学校'
                    },
                    {
                        schId: 2,
                        schName: 'ss学校'
                    }
                ],
                loginFormData: {
                    schId: null,
                    stuId: "",
                    stuPwd: ""
                }
            }
        },
        methods: {
            onSubmit() {

            }
        },
    }
</script>

<style lang="scss" scoped>
    .login {
        min-height: 100vh;
        background: #d9d9d9;
        .loginForm {
            border: 1px solid #ccc;
            background: #fff;
            border-radius: 1rem;
            padding: 1rem;
        }
    }
</style>