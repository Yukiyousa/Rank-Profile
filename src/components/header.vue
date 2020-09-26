<template>
    <div class="header-table">
    <el-container>
        <el-header class="header-box">
            <div class="header">
		        <ul class="menu">
                    <li class="icon"><a><i class="el-icon-s-home"></i>Home</a></li>
                    <li class="icon"><a><router-link to="/rank"><i class="el-icon-s-data"></i>Rank</router-link></a></li>
                    <li style="float:right" class="icon"><router-link to="/profile"><i class="el-icon-user-solid"></i>{{username}}</router-link></li>
                </ul>
            </div>
        </el-header>
    </el-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username:'',
        }
    },
    methods: {
        getUsername:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/profile').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.username=response.data.userId;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                // this.$router.push('/err');
                console.log(error.message);
            })
        }
    },
    created(){
        this.getUsername();
    }
};
</script>

<style>
.el-header {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.header ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.header li {
    float: left;
    padding: 0px;
}
.header a {
    display: block;
    color: white;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    font-size:17px
}
.header li:hover{
    background-color: rgb(119, 188, 252);
    /* background-color: rgba(0,68,187,0.7); */
}
</style>
