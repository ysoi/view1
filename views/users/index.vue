<template>
    <div class="user-manager">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="table">
        <el-table :data="tableData">
          <el-table-column
            prop="nickname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="个性签名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="180"
          >
          </el-table-column>
          <el-table-column
            label="用户图像"
            width="200"
          >
            <template slot-scope="scope" >
              <img :src="scope.row.avatar" class="avatar">
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="300"
          >
            <template slot-scope="scope">
              <el-button @click="handleDetail" size="small" type="primary">查看详情</el-button>
              <el-button @click="handleDelete(id)" size="small" type="danger" :id="scope.row.id">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tableData: []
        }
      },

      methods: {
        getData() {
          this.$axios.get('/user').then(res => {
            this.tableData = res.data;
            }
          )
        },
        handleDetail() {
          this.$router.push("/layout/userDetail")
        },

        handleDelete(id) {
          this.$confirm('此操作将删除一名用户, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$axios.pust('/user/delete', {userIds: [id]}).then(res => {

              this.$message.success(res.msg);
              this.getData();

            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          })
        }
      },
      created() {
          this.getData();
      }


    }

</script>

<style scoped>
.user-manager .table .avatar{
  height:80px;
  width:80px;
}
</style>
