<template>
<div class="home-container">
<el-container >
    <!-- main -->
    <el-main>
        <!-- <div class="solgan-table">
             <h1 class="solgan">凌厉出鞘 睿意进取</h1>
        </div> -->
        <div class="rank-table">
            <div class="content">
                <div class="rank-font"><i class="el-icon-s-data"></i>Rank</div>
                    <div class="v-divider">
                        <el-divider></el-divider>
                    </div>
                <!-- rank table -->
                <el-tabs v-model="activeName">
                    <!-- total -->
                    <el-tab-pane label="Total" name="first">
                        <el-table :data="totalData" style="width: 100%" class="rank-list" stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :page-size="totalSize" :total="total" @current-change="findPage" ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <!-- web -->
                    <el-tab-pane label="Web" name="second">
                        <el-table :data="webData" style="width: 100%" class="rank-list" stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>                          
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :total="totalWeb" @current-change="findPage" ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <!-- security -->
                    <el-tab-pane label="Security" name="third">
                        <el-table :data="securityData" style="width: 100%" class="rank-list"  stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>                          
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :total="totalSecurity" @current-change="findPage" ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <!-- android -->
                    <el-tab-pane label="Android" name="fourth">
                        <el-table :data="androidData" style="width: 100%" class="rank-list"  stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>                          
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :total="totalAndroid" @current-change="findPage" ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <!-- ml -->
                    <el-tab-pane label="Machine Learning" name="fifth">
                        <el-table :data="mlData" style="width: 100%" class="rank-list"  stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>                          
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :total="totalMl" @current-change="findPage" ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <!-- ui -->
                    <el-tab-pane label="UI" name="sixth">
                        <el-table :data="uiData" style="width: 100%" class="rank-list"  stripe>
                            <el-table-column type="index" :index="indexMethod" label="Rank" width="150" align="center"></el-table-column>                          
                            <el-table-column prop="userId" label="User ID" width="350" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_number" label="Solved" width="300" align="center"></el-table-column>
                            <el-table-column prop="solved_problem_score" label="Scores" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination background layout="total , prev, pager, next, jumper" :total="totalUi" @current-change="findPage"></el-pagination>
                        </div>
                    </el-tab-pane>
                </el-tabs> 
            </div>
        </div>
    </el-main>
    <!-- footer -->
    <el-footer>
        <div class="footer">
			<span> Copyright©</span>
		    <span> 2019-2020 </span>
        </div>
    </el-footer>
</el-container>
</div>
</template>

<script>

export default {
    data() {
        return {
            activeName: 'first',
            totalSize:20,
            //total number
            total:0,
            totalWeb:0,
            totalSecurity:0,
            totalAndroid:0,
            totalMl:0,
            totalUi:0,
            //rank data
            totalData:[],
            webData:[],
            securityData:[],
            androidData:[],
            mlData:[],
            uiData:[],
        }
    },
    methods: {
        indexMethod(index){
            return index+1;
        },
        findPage(page){
            console.log(page);
        },
        async totalRank(){
            this.axios.get('http://d7kixjmw2a.52http.com/totalRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.totalData = response.data.rank;
                    that.total=0;
                    that.total=response.data.total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        webRank:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/webRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.webData = response.data.rank;
                    that.totalWeb=0;
                    that.totalWeb=response.data.web_total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        mlRank:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/mlRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.mlData = response.data.rank;
                    that.totalMl=0;
                    that.totalMl=response.data.ml_total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        androidRank:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/androidRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.androidData = response.data.rank;
                    that.totalAndroid=0;
                    that.totalAndroid=response.data.android_total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        securityRank:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/securityRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.securityData = response.data.rank;
                    that.totalSecurity=0;
                    that.totalSecurity=response.data.security_total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        uiRank:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/uiRank').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    that.uiData = response.data.rank;
                    that.totalUi=0;
                    that.totalUi=response.data.ui_total;
                }else{
                    // this.$router.push('/err');
                }
            }).catch(error => {
                console.log(error.message);
            })
        }
    },
    created(){
        this.totalRank();
        this.mlRank();
        this.androidRank();
        this.securityRank();
        this.uiRank();
        this.webRank();
    }
};
</script>

<style>
.home-container{
    height: 100vh;
    margin: 0;
    padding: 0;
}
.el-container{
    min-height: 100%;
}
.el-main {
    background-color: whitesmoke;
    /* background-color: #C6DFF9; */
    color: #333;
    text-align: center;
    margin:0;
    padding: 0;
}
.el-footer {
    background-color: whitesmoke;
    color: #333;
    text-align: center;
}
/* .solgan-table{
    margin-top: 0;
}
.solgan{
    padding: 0;
    margin-top: 0px;
    font-size: 35px;
    font-family:"STXingkai";
} */
.rank-table{
    margin: auto;
    margin-top: 20px;
    width: 75%;
    box-sizing: inherit;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    overflow: hidden;
}
.content{
    padding: 10px;
}
.rank-list{
    margin-top: 0px;
}
.rank-table:hover{
    box-shadow: 0px 0px 3px gray;
    transition: 0.3s;
}
.footer{
    padding: 20px;
}
.rank-font{
    font-size:30px;
    margin: 0px 10px 10px 10px;
    float: left;
}
.v-divider{
    margin-top: 50px;
    margin-bottom: 0px;
}
.el-divider{
    margin-bottom: 0px;
}
.page{
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
}
.link{
    text-decoration: none;
    color: black;
}
</style>
