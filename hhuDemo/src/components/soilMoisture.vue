<template>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            
        
        }
    }
}
</script>

<style scoped lang = "scss">
.container{
    width: 100%;
    height: 100%;
    
    margin-top: 100px;
}

</style>
