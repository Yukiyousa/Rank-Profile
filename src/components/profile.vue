<template>
<div class="home-container">
    <el-container>
        <!-- main -->
        <el-main>
            <!-- summary -->
            <div class="center-summary">
                <div class="content">
                    <div class="user-id">
                        <i class="el-icon-user"></i>{{username}}
                    </div>
                    <div class="v-divider">
                        <el-divider></el-divider>
                    </div>
                    <div class="summary"><i class="el-icon-document"></i><span class="summary-font">Summary</span></div>
                    <el-divider class="sum-divider"></el-divider>
                    <div class="summary-show">
                        <el-table :data="profileSolve" stripe style="width: 100%">
                            <el-table-column prop="direction" label="Direction" width="200" align="center" ></el-table-column>
                            <el-table-column prop="number" label="Solved" width="400" align="center"></el-table-column>
                            <el-table-column prop="rank" label="Rank" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <!-- solved -->
            <div class="center-solved">
                <div class="content">
                    <div class="solved"><i class="el-icon-s-flag"></i><span class="solved-font">Solved</span></div>
                    <el-divider class="el-dicider"></el-divider>
                    <div class="solved-show">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="Web" name="first">
                                <el-table :data="webSolve" stripe style="width: 100%">
                                <el-table-column prop="solve_problem_id" label="Problem ID" width="200" align="center"></el-table-column>
                                <el-table-column prop="solve_problem_category" label="Direction" width="400" align="center"></el-table-column>
                                <el-table-column prop="single_solve_problem_score" label="Scores" align="center"></el-table-column></el-table>
                            </el-tab-pane>
                            <el-tab-pane label="Security" name="second">
                                <el-table :data="securitySolve" stripe style="width: 100%">
                                <el-table-column prop="solve_problem_id" label="Problem ID" width="200" align="center"></el-table-column>
                                <el-table-column prop="solve_problem_category" label="Direction" width="400" align="center"></el-table-column>
                                <el-table-column prop="single_solve_problem_score" label="Scores" align="center"></el-table-column></el-table>
                            </el-tab-pane>
                            <el-tab-pane label="Android" name="third">
                                <el-table :data="androidSolve" stripe style="width: 100%">
                                <el-table-column prop="solve_problem_id" label="Problem ID" width="200" align="center"></el-table-column>
                                <el-table-column prop="solve_problem_category" label="Direction" width="400" align="center"></el-table-column>
                                <el-table-column prop="single_solve_problem_score" label="Scores" align="center"></el-table-column></el-table>
                            </el-tab-pane>
                            <el-tab-pane label="Machine Learning" name="fourth">
                                <el-table :data="mlSolve" stripe style="width: 100%">
                                <el-table-column prop="solve_problem_id" label="Problem ID" width="200" align="center"></el-table-column>
                                <el-table-column prop="solve_problem_category" label="Direction" width="400" align="center"></el-table-column>
                                <el-table-column prop="single_solve_problem_score" label="Scores" align="center"></el-table-column></el-table>
                            </el-tab-pane>
                            <el-tab-pane label="UI" name="fifth">
                                <el-table :data="uiSolve" stripe style="width: 100%">
                                <el-table-column prop="solve_problem_id" label="Problem ID" width="200" align="center"></el-table-column>
                                <el-table-column prop="solve_problem_category" label="Direction" width="400" align="center"></el-table-column>
                                <el-table-column prop="single_solve_problem_score" label="Scores" align="center"></el-table-column></el-table>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </el-main>
        <!-- footer -->
        <el-footer>
            <div class="footer">
				<span> Copyright©</span>
			    <span> 2020-2021 </span>
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
            username:'',
            //summary data
            profileSolve:[],
            //solve data
            webSolve:[],
            securitySolve:[],
            androidSolve:[],
            mlSolve:[],
            uiSolve:[]
        }
    },
    methods: {
        profileList:function(){
            this.axios.get('http://d7kixjmw2a.52http.com/profile').then(response => {
                var that=this;
                if(response.status === 200 && response.statusText === 'OK'){
                    console.log(response.data);
                    that.username=response.data.userId;
                    that.profileSolve=response.data.summary;
                    that.webSolve=response.data.web;
                    that.securitySolve=response.data.security;
                    that.androidSolve=response.data.android;
                    that.mlSolve=response.data.ml;
                    that.uiSolve=response.data.ui;
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
        this.profileList();
    }
};
</script>

<style >
.home-container{
    background-color: whitesmoke;
    margin: 0;
    padding: 0;
}
.el-container{
    min-height: 100%;
}
.el-main{
    background-color: whitesmoke;
    color: #333;
    text-align: center;
}
.center-summary:hover,.center-solved:hover{
    box-shadow: 0px 0px 3px gray;
    transition: 0.3s;
}
.center-summary,.center-solved{
    margin: auto;
    margin-top: 30px;
    width: 60%;
    background-color: #fff;
    border: 1px solid #ebeef5;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 2px;
    overflow: hidden;
}
.content{
    padding: 12px;
}
.user-id{
    font-size:30px;
    margin: 0px 10px 10px 10px;
    float: left;
}
.summary,.solved{
    font-size:20px;
    margin: 0px 10px 0px 10px;
    float: left;
}
.solved-show,.summary-show{
    margin-top: 0px;
    padding: 10px;
}
.summary-font,.solved-font{
    margin-left: 5px;
}
.v-divider{
    margin-top: 50px;
}
.sum-divider{
    margin-bottom: 0px;
    margin-top: 60px;
}
.el-dicider{
    margin-bottom: 0px;
    margin-top: 30px;
}
</style>
