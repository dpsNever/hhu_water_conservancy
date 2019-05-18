<template>
  <div class="container">
    <!-- 主体分为三部分  头部 中部和底部
        头部：顶部导航栏
        中部：各种主要信息  轮播图 百度地图
        底部：版权信息
     -->
     <!-- 头
     
     部 -->
      <div class="top">
        <div class="first-line">
          <div class="news">
            <h3>最新关注</h3>
            <ul>
              <li><a href="http://www.mwr.gov.cn/xw/slyw/201905/t20190515_1197349.html" target="_blank">鄂竟平检查指导甘肃省水旱灾...</a></li>
              <li><a href="">蒋旭光检查南水北调中线河南..</a></li>
              <li><a href="">淮河防总在淮委召开工作会议..</a></li>
              <li><a href="">海河水利委员会组织开展海河..</a></li>
              <li><a href="">甘肃省水利厅召开全省山洪灾..</a></li>
              <li><a href="">太湖防总召开专题会议安排部..</a></li>
              <li><a href="">海河水利委员会与天津市气象..</a></li>
              <li><a href="">长江水利委员会完成2019年流..</a></li>
              <li><a href="">安徽省副省长张曙光率队调研..</a></li>
              <li><a href="">水利部专题部署2019年山洪灾..</a></li>
            </ul>
          </div>
          <div class="Real-time-hydrologic">
              <el-tabs v-model="activeName"  stretch="true">
                <el-tab-pane label="用户管理" name="first">用户管理
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="date"
                        label="站名"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="时间"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="水位（m）">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="流量（m³/s）">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="汛情简报" name="second">配置管理
                    <ul>
                      <li><a href="">2018年长江汛情简报第07期</a></li>
                      <li><a href="">2018年长江汛情简报第06期</a></li>
                      <li><a href="">2018年长江汛情简报第05期</a></li>
                      <li><a href="">2018年长江汛情简报第04期</a></li>
                      <li><a href="">2018年长江汛情简报第03期</a></li>
                      <li><a href="">2018年长江汛情简报第02期</a></li>
                      <li><a href="">2018年长江汛情简报第01期</a></li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="水雨晴报告" name="third">角色管理

                </el-tab-pane>
                
              </el-tabs>
          </div>
          <div class="seven-river">
            <h3>中国七大水系</h3>
            <ul>
              <li><a href="">长江水系</a></li>
              <li><a href="">黄河水系</a></li>
              <li><a href="">淮河水系</a></li>
              <li><a href="">海河水系</a></li>
              <li><a href="">珠江水系</a></li>
              <li><a href="">松辽水系</a></li>
              <li><a href="">太湖水系</a></li>
            </ul>
          </div>
        </div>
        <div class="second-line">
          <!-- 今日雨水情部分 实现动态文字滚动 -->
          <h4>今日雨水情</h4>
          <div class="today-rain">
              <div class="marquee-list">
                <p class="marquee-text" v-for="(text,index) in marqueeList" :key="index">{{text}}</p>
              </div>
            </div>
          <div class="hot-info">
            <h3>热点信息</h3>
             <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.src" class="iImg" alt="#">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 热点水情 -->
          <div class="hot-water">
            <h3>省内热点河道实时水情</h3>
            <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="date"
                label="站名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="站址"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="河名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="水位（米）">
              </el-table-column>
              <el-table-column
                prop="address"
                label="流量（米³/秒）">
              </el-table-column>
              <el-table-column
                prop="address"
                label="时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="警戒水位（米）">
              </el-table-column>
            </el-table>
            <h3>省内重点水库实时水情</h3>
            <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="date"
                label="站名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="站址"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="河名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="水位（米）">
              </el-table-column>
              <el-table-column
                prop="address"
                label="流量（米³/秒）">
              </el-table-column>
              <el-table-column
                prop="address"
                label="时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="警戒水位（米）">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="third-line">
          <!-- 其他地方水利网站 -->
          <div class="other-province">
              <h3>其他地方水利网站</h3>
              <ul>
                <li><a href="http://www.bjwater.gov.cn/">北京</a></li>
                <li><a href="">天津</a></li>
                <li><a href="http://slt.hebei.gov.cn/">河北</a></li>
                <li><a href="">山西</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="http://slt.shaanxi.gov.cn/">青海</a></li>
                <li><a href="http://www.dwr.ln.gov.cn/">辽宁</a></li>
                <li><a href="http://slt.jl.gov.cn/">吉林</a></li>
                <li><a href="">黑龙江</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="">上海</a></li>
                <li><a href="">江苏</a></li>
                <li><a href="http://www.zjwater.gov.cn/">浙江</a></li>
                <li><a href="http://www.ahsl.gov.cn/">安徽</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="">福建</a></li>
                <li><a href="http://www.jxwrd.gov.cn/">江西</a></li>
                <li><a href="http://www.sdwr.gov.cn/">山东</a></li>
                <li><a href="http://www.hnsl.gov.cn/">河南</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="http://www.hubeiwater.gov.cn/">湖北</a></li>
                <li><a href="">湖南</a></li>
                <li><a href="http://slt.gd.gov.cn/">广东</a></li>
                <li><a href="http://www.gxwater.gov.cn/">广西</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="http://swt.hainan.gov.cn/sswt/index.shtml">海南</a></li>
                <li><a href="http://slj.cq.gov.cn/Pages/Home.aspx">重庆</a></li>
                <li><a href="">四川</a></li>
                <li><a href="">内蒙古</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="http://www.wcb.yn.gov.cn/">云南</a></li>
                <li><a href="">西藏</a></li>
                <li><a href="http://slt.shaanxi.gov.cn/">陕西</a></li>
                <li><a href="">甘肃</a></li>
              </ul>
              <br>
              <ul>
                <li><a href="">宁夏</a></li>
                <li><a href="http://xjwater.xinjiang.gov.cn/">新疆</a></li>
                <li><a href="http://www.gzmwr.gov.cn/">贵州</a></li>
              </ul>
          </div>
          <!-- 各流域网站 -->
          <div class="basin">
            <h3>流域网站</h3>
              <ul>
                <li><a href="http://www.cjw.gov.cn/">长江流域</a></li>
                <li><a href="http://www.yellowriver.gov.cn/">黄河流域</a></li>
                <li><a href="http://www.slwr.gov.cn/?yikikata=df6893c2-2d46401e834b9337f4fb5567e887e41b">松辽流域</a></li>
                <li><a href="http://www.hwcc.gov.cn/">海河流域</a></li>
                <li><a href="http://www.hrc.gov.cn/">淮河流域</a></li>
                <li><a href="http://www.pearlwater.gov.cn/">珠江流域</a></li>
                <li><a href="http://www.tba.gov.cn/">太湖流域</a></li>
              </ul>
          </div>
          <!-- 友情链接 -->
          <div class="friendly-link">
            <h3>友情链接</h3>
            <ul>
              <li><a href="">自然资源部</a></li>
              <li><a href="">中国气象局</a></li>
              <li><a href="">中国地震局</a></li>
              <li><a href="">国家海洋局</a></li>
            </ul>
          </div>
          <!-- 水文学常识 -->
          <div class="water-knowladge">
            <h3>水雨情常识</h3>
            <ul>
              <li><a href="">水文学</a></li>
              <li>水文</li>
              <li>保证水位</li>
              <li>水文要素</li>
              <li>警戒水位</li>
              <li>水文监测环境</li>
              <li>水温测站</li>
              <li>水文监测设施</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 中部 -->
      <div class="middle"></div>
      <!-- 底部 -->
      <div class="bottom"></div>
  </div>
</template>

<script>
const totalDuration = 1000;
export default {
  name: 'HelloWorld',
  props:[],
  data () {
    return {
      animate:false,
      marqueeList:[
        ' 2019年 第11期 ',
        '5月13日8时至14日8时，湖南中部、江西中部、浙江西南部和东部、福建北部、海南等地降了中到大雨，局部暴雨，最大点海南白沙萌芽77毫米。全国主要江河水情总体平稳。',
      ],
      art_num: 0,
      activeName:'second',
      tableData:[],
      imgList:[
        {index: 0,src:require('../common/images/info1.jpg')},
        {index: 1,src:require('../common/images/guany1.png')},
        {index: 2,src:require('../common/images/guany1.png')},
        {index: 3,src:require('../common/images/guany1.png')},
        {index: 4,src:require('../common/images/guany1.png')},
        {index: 5,src:require('../common/images/guany1.png')},
      ],
    }
  },
  computed:{
    text(){
      return{
        id:this.number,
        val:this.marqueeList[this.number]
      }
    }
  },
  mounted(){
    this.startMove()
  }
  ,
  methods:{
    startMove(){
      let timer = setTimeout(() => {
        if(this.number === 5){
          this.number = 0;
        }else{
          this.number += 1;
        }
        this.startMove();
      },totalDuration)
    },
  },
  components:{},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html,body{
    margin: 0;
    padding: 0;
  }
  a{
    color: #000;
    &:hover{
      color: rgb(107, 106, 106);
    }
  }

  .container{
    position: relative;
    margin-top:100px;
    //background: rgb(233, 233, 233);
    li{
      list-style: none;
    }
    .top{
      display: flex;
      flex-direction: row;
      .first-line{
        width: 25%;
        height: 100%;
        margin-right: 3%;
        .news{
          border-radius:20px;
          background: rgb(32, 128, 192);
          h3{
            padding-top: 10px;
          }
          ul{
            margin-left: -15%;
            padding-bottom: 10px;
            li{
              margin-bottom: 5px;
              a{
                color: rgb(255, 255, 255);
                &:hover{
                  color:#c7c7c7;
                }
              }
            }
          }
        }
        .Real-time-hydrologic{
          height: 300px;
          margin-top: 60px;
          border: #eeeeee solid;
          border-radius: 20px;
        }
        .seven-river{
          border-radius:20px;
          background: #eeeeee;
          h3{
            padding-top: 10px;
          }
          ul{
            padding-bottom: 10px;
            margin-left: -10%;
          }
        }
      }
      .second-line{
        width: 48%;
        height: 100%;
        
        .today-rain{
          height: 100px;
          line-height: 50px;
          margin: 10px auto;
          border: solid #eeeeee;
          overflow: hidden;
          .marquee-list{
            animation: myMove 5s linear infinite;
            animation-fill-mode: forwards;
            .marquee-text{
              margin: 0;
              }
            }
          }
          .hot-info{
            height: 250px;
          }
        }
      }
      .third-line{
        width: 21%;
        height: 100%;
        margin-left: 3%;
        ul{
          width: 100%;
        }
        .other-province{
          border-radius:20px;
          background: #eeeeee;
          height: 340px;
          h3{
            padding-top: 10px;
          }
          li{
            float: left;
            list-style: none;
            padding-right: 20px;
          }
        }
        .basin{
          border-radius:20px;
          background: #eeeeee;
          margin-top: 40px;
          h3{
            padding-top: 10px;
          }
          ul{
            margin-left: -40px;
            padding-bottom: 10px;
            li{
              margin-top: 10px;
            }
          }
        }
        .friendly-link{
          border-radius:20px;
          background: #eeeeee;
          h3{
            padding-top: 10px;
          }
          ul{
            margin-left: -40px;
            padding-bottom: 10px;
            li{
              margin-top: 10px;
            }
          }
        }
        .water-knowladge{
          border-radius:20px;
          background: #eeeeee;
          h3{
            padding-top: 10px;
          }
          ul{
            margin-left: -40px;
            padding-bottom: 10px;
            li{
              margin-top: 10px;
            }
          }
        }

      }
    
  }
  
  // 文字无缝滚动
  @keyframes myMove {
      0% {
        transform: translateY(100px);
      }
      100% {
        transform: translateY(-300px);
      }
    }
  .slide-enter-active, .slide-leave-active {
    transition: all 2s linear;
  }
  .slide-leave-to {
    transform: translateY(-20px);
  }
  .slide-enter{
    transform: translateY(20px);
  }
 
  // element 部分

  /** 
  走马灯部分
  */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .iImg{
    height: 200px;
  }
  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }
  
  // .el-carousel__item:nth-child(2n+1) {
  //   background-color: #d3dce6;
  // }
</style>
