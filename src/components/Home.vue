<template>
  <div id="HomeContainer">
      <div class="homeHeader">
          <ul>
            <li>
                <img src="../../static/images/One.png" alt="">
                <p>第<span>{{value}}</span>题</p>
            </li>
            <li>
                <img src="../../static/images/Two.png" alt="">
                <p>共<span>{{arr.length}}</span>题</p>
            </li>
            <li @click="first">
                <img src="../../static/images/Three.png" alt="">
                <p>第前一题</p>
            </li>
            <li @click="less">
                <img src="../../static/images/Foru.png" alt="">
                <p>上一题</p>
            </li>
            <li @click="plus">
                <img src="../../static/images/Five.png" alt="">
                <p>下一题</p>
            </li>
            <li @click="last">
                <img src="../../static/images/Six.png" alt="">
                <p>最后一题</p>
            </li>
            <li>
                <img src="../../static/images/Seven.png" alt="">
                <p>须知</p>
            </li>
            <li>
                <img src="../../static/images/Eight.png" alt="">
                <p>待查</p>
            </li>
            <li>
                <img src="../../static/images/Nine.png" alt="">
                <p>交卷</p>
            </li>
            <li>
                <span>剩余考试时间</span>
                <p>
                    <!-- {{`${Timer}${min}`}} -->
                    <!-- <zk-time-down></zk-time-down> -->
                    <zkTimeDown></zkTimeDown>
                </p>
            </li>
        </ul>
      </div>
      <div class="homeContent">
            <div class="contentLeft">
                <div class="leftTop">
                    <span>
                      {{value}}&nbsp;&nbsp;{{arr[value-1].select}}
                    </span>
                </div>
                <div class="leftBottom"  @click="selectQ">
                <!-- <div class="leftBottom"> -->
                    <!-- <ul  @click="test11111111"> -->
                    <ul >
                        <!-- <li v-for="(arr, index) in arr" :key="index">
                            <div>{{arr.Options[index].id}}</div>
                            <span>{{arr.Options[index].name}}</span>
                        </li> -->
                        <!-- <li>
                            <div :class="{active_aaa: this.show_color === true}" >{{arr[value-1].Options[0].id}} </div>
                            <span>{{arr[value-1].Options[0].name}}</span>
                        </li> -->
                        <li>
                            <div>{{arr[value-1].Options[0].id}}</div>
                            <span>{{arr[value-1].Options[0].name}}</span>
                        </li>
                        <li>
                            <div>{{arr[value-1].Options[1].id}}</div>
                            <span>{{arr[value-1].Options[1].name}}</span>
                        </li>
                        <li>
                            <div>{{arr[value-1].Options[2].id}}</div>
                            <span>{{arr[value-1].Options[2].name}}</span>
                        </li>
                        <li>
                            <div>{{arr[value-1].Options[3].id}}</div>
                            <span>{{arr[value-1].Options[3].name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="contentRight">
                <el-container>
                    <el-aside width="319px">
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1" >
                            <template slot="title">
                            <i>>></i>
                            选择题(共{{arr.length}}题)</template>
                            <!-- el-menu-item标签相当li  直接循环遍历即可 -->
                            <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
                            <el-menu-item v-for="(arr,index) in arr" :key="index" v-on:click="say($event)">
                                <p>{{arr.id}}.</p>
                                <!-- <div class="active select"/> -->
                                <!-- <div :class="active:"/> -->
                                <!-- <div :class="[arr.id*1==value*1 ? 'active' : '']"/> -->
                                <!-- <div :class="{active: arr.selected}"/> -->
                                <!-- <div class="test" :class="{active: arr.selected}"/> -->
                                <div :class="[{done:arr.selected},arr.id*1==value*1 ? 'active' : '']"></div>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i>>></i>
                            操作题</template>
                            <el-menu-item index="2-1">选项1<div class="active select"/></el-menu-item>
                            <el-menu-item index="2-2">选项2<div class="active select"/></el-menu-item>
                        </el-submenu>
                    </el-menu>
                    </el-aside>
                </el-container>
                <div class="status">
                    <div class="current">
                        <div></div>
                        <span>当前</span>
                    </div>
                    <div class="notDone">
                        <div></div>
                        <span>未做</span>
                    </div>
                    <div class="done">
                        <div></div>
                        <span>已做</span>
                    </div>
                    <div class="notChecked">
                        <div></div>
                        <span>待查</span>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/ecmascript-6">
import zkTimeDown from './HomeTimer'

export default {
  name: 'App',
  components:{zkTimeDown},
  data(){
    return{
        show_color: true,
        min:'秒',
        Timer: 0,
        endTime : '2020-08-29 9:51:00',
        current:false,
      question:'Number',
      questionAll:'Total',
      nameA:'111',
      flag: -1,
      value:'1',//选中的值
      arr:[
          {
              "id": "1",
              "select": "189 Lefferts Place, Wollochet, Connecticut, 1248",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Diane Whitaker"
                  },
                  {
                      "id": "B",
                      "name": "Harriet Roberts"
                  },
                  {
                      "id": "C",
                      "name": "Ophelia Hampton"
                  },
                  {
                      "id": "D",
                      "name": "Jeanne Wilder"
                  }
              ]
          },
          {
              "id": "2",
              "select": "244 Lott Place, Alafaya, Virginia, 2337",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Alexis Dale"
                  },
                  {
                      "id": "B",
                      "name": "Woods Pollard"
                  },
                  {
                      "id": "C",
                      "name": "Krystal Scott"
                  },
                  {
                      "id": "D",
                      "name": "Richard Maldonado"
                  }
              ]
          },
          {
              "id": "3",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "4",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "5",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "6",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "7",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "8",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "9",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "10",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "11",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "12",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "13",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "14",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "15",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "16",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "17",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "18",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "19",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "20",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "21",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "22",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "23",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "24",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "25",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "26",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "27",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "28",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "29",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "30",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "31",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "32",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "33",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "34",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "35",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "36",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "37",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "38",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "39",
              "select": "419 Benson Avenue, Oneida, New Hampshire, 2298",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Mullins Chambers"
                  },
                  {
                      "id": "B",
                      "name": "Sharp Reese"
                  },
                  {
                      "id": "C",
                      "name": "Brigitte Hicks"
                  },
                  {
                      "id": "D",
                      "name": "Duke Lee"
                  }
              ]
          },
          {
              "id": "40",
              "select": "420 Wolf Place, Bennett, Louisiana, 4827",
              "selected":false,
              "answer":'',
              "Options": [
                  {
                      "id": "A",
                      "name": "Cervantes Meyers"
                  },
                  {
                      "id": "B",
                      "name": "Beverly Gates"
                  },
                  {
                      "id": "C",
                      "name": "Addie Payne"
                  },
                  {
                      "id": "D",
                      "name": "Taylor Whitehead"
                  }
              ]
          }
      ]
    }
  },
//   computed:{
//         },
    // mounted(){
    //     // this.test11111111()
    //     // this.countdown()
    //     console.log(this)
    //     console.log(this.value*1)
    //     console.log(this.arr[0].id*1)
    // },
    methods: {
        // 测试数据
        // test11111111(){
        //     this.show_color = !this.show_color
        //     console.log(this.show_color)
        //     this.arr[this.value*1-1].selected='ture'

        // },
        // 倒计时方法
        countdown(){
            this.Timer = 0
            let countdownId = setInterval(() => {
                this.Timer--
                this.Timer === 0 && clearInterval(countdownId)
            },1000)
        },
        say: function(event) {
                        //获取点击对象      
                        var el = event.$el.innerText;
                        console.log(this.value) 
                        this.value = el
        },
        plus:function(){
            if(this.value<this.arr.length) {
                this.value=this.value*1+1
            }
        },
        less:function(){
          if(this.value>1) {
            this.value=this.value*1-1
          }
        
        },
        first:function(){
            this.value=1
          },
        last:function(){
          this.value=this.arr.length
        },
        selectQ:function(){
            console.log(this)
            console.log(this.value*1)
            console.log(this.arr[this.value*1].selected)
            this.arr[this.value*1-1].selected='ture'
        }

    }
}
</script>

<style lang="stylus">
    #HomeContainer
        height 100%
        width 100%
        .homeHeader
            height 100px
            width 100%
            background-image linear-gradient(#1b67b4, #2b87c6)
            display flex
            align-items center
            overflow hidden
            ul
                margin-left 70px
                white-space:nowrap
                li
                    // background-color red
                    width 70px
                    text-align center
                    color #fff
                    display inline-block
                    margin-right 130px
                    img 
                        margin-bottom 6px
                        cursor pointer
                    p
                        white-space:nowrap
                        font-size 14px
                    span 
                        color #d20000
                li:nth-last-child(2),li:nth-last-child(1)
                    margin-right 0
                li:nth-last-child(1)
                    width 161px
                    padding-top 14px
                    float right
                    // font-size 16px
                    span
                        color #fff
                        line-height 30px
                    span,p
                        font-size 16px
        .homeContent
            width 100%
            height 978px
            .contentLeft
                width calc(100% - 300px)
                float left
                height 100%
                background-color #dcdae8
                font-size 16px
                color #333
                .leftTop
                    padding 40px 0 0 30px
                    height 407px
                    border-bottom 2px solid #aaa8c0
                .leftBottom
                    padding 30px 0 0 30px
                    div
                        height 20px
                        width 20px
                        border 1px solid #333
                        display inline-block
                        text-align center
                        line-height 20px
                        border-radius 50%
                        margin-right 4px
                        margin-bottom 10px
                        cursor pointer
                    .active_aaa
                        background-color #4b83c6
                       
            .contentRight
                float right
                width 300px
                height 100%
                border-top 2px solid #dcdae8
                background-color #dcdae8
                .el-container
                    height 936px
                    border-left 1px solid #c3c1d4
                    font-size 16px
                    .el-submenu__icon-arrow
                        margin-right: -50px;
                    .el-aside
                        overflow-x hidden
                    i
                        color #25b8ee
                        font-size 20px
                    .el-submenu__title
                        background-color #4b83c6
                    .el-menu
                        background-color #dcdae8
                        .el-menu-item:hover,.el-menu-item:focus
                            background-color:transparent
                        .el-menu-item
                            display flex
                            margin-bottom 2px
                            padding-left 70px!important
                            .done
                                background-color #b2b7da
                            .active
                                background-color #0a7307
                            p
                                width 20px
                                text-align center
                            div
                                width: 120px;
                                height: 100%;
                                background-color #ada8b8
                    
                .status
                    height 40px
                    width 300px
                    background-color #dedae8
                    display flex
                    border-left 1px solid #c3c1d4
                    justify-content space-around
                    padding 0 20px 
                    .current
                        div
                            background-color #08720c
                    .notDone
                        div
                            background-color #ada8b8
                    .done
                        div
                            background-color #b2b7da
                    .notChecked
                        div
                            background-color #ce8f0e
                    .current,.notDone,.done,.notChecked
                        margin: auto 0;
                        vertical-align: baseline
                        div
                            height 14px
                            width 14px
                            display inline-block
                            vertical-align middle
                            margin-right 5px
                    

</style>
