<template>
  <div id="HomeContainer">
    <div class="homeHeader">
      <ul>
        <li>
          <img src="../../static/images/One.png" alt />
          <p>
            第<span style="color: red">{{value}}</span>题
          </p>
        </li>
        <li>
          <img src="../../static/images/Two.png" alt />
          <p>
            共<span style="color: red">{{arr.length}}</span>题
          </p>
        </li>
        <li @click="first">
          <img src="../../static/images/Three.png" alt />
          <p>
            <span>第前一题</span>
          </p>
        </li>
        <li @click="less">
          <img src="../../static/images/Foru.png" alt />
          <p>
            <span>上一题</span>
          </p>
        </li>
        <li @click="plus">
          <img src="../../static/images/Five.png" alt />
          <p>
            <span>下一题</span>
          </p>
        </li>
        <li @click="last">
          <img src="../../static/images/Six.png" alt />
          <p>
            <span>最后一题</span>
          </p>
        </li>
        <li>
          <img src="../../static/images/Seven.png" alt />
          <p>
            <span>须知</span>
          </p>
        </li>
        <li>
          <img src="../../static/images/Eight.png" alt />
          <p>
            <span>待查</span>
          </p>
        </li>
        <li @click="submit" >
          <img src="../../static/images/Nine.png" alt />
          <p>
            <span>交卷</span>
          </p>
          <!-- 遮罩层 -->
          <div class="mask" ref="test_data" ></div>
          <!-- 弹框 -->
          <div class="messageBox " ref="submit">
            <div class="volumeTitle">
              <span>考生交卷</span>
              <img @click="turn" src="../../static/images/Off.png" alt="">
            </div>
            <div class="volumeConcent">
              <div>
                <img src="../../static/images/考试页面-阅读理解交卷_07.png" alt="">
                <span><strong>你确定要交卷吗?</strong></span>
              </div>
              <span class="answers">答题情况统计</span>
              <div class="Clear"></div>
              <table >
                <tr class="alt">
                  <td>题型</td>
                  <td>已答题数</td>
                  <td>未答题数</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>Steven Jobs</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Baidu</td>
                  <td>Li YanHong</td>
                  <td>China</td>
                </tr>
                <tr class="alt altAcelt">
                  <td>
                    待查题目
                  </td>
                  <td colspan="2">
                    共0题
                  </td>
                </tr>
              </table>
              <div class="confirm">
                <button>确认</button>
                <button>返回</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <span>剩余考试时间</span>
          <p>
            <zkTimeDown></zkTimeDown>
          </p>
        </li>
      </ul>
    </div>
    <div class="homeContent">
      <div class="contentLeft">
        <div class="leftTop">
          <span>{{value}}&nbsp;&nbsp;{{arr[value-1].select}}</span>
        </div>
        <div class="leftBottom" @click.stop="selectQ">
          <ul>
            <!-- 模拟循环4次数据 -->
            <li v-for="(arrss,index) in arrs" :key="index" class="pick">
                <div :class="{active_aaa: index+1 === sava_element}"  @click="index_sava(index)"  >{{arr[value-1].Options[index].id}}</div>
                <span>{{arr[value-1].Options[index].name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="contentRight">
        <el-container>
          <el-aside width="319px">
            <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                <template slot="title">
                  <i>>></i>
                  选择题(共{{arr.length}}题)
                </template>
                <!-- el-menu-item标签相当li  直接循环遍历即可 -->
                <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
                <el-menu-item v-for="(arr,index) in arr" :key="index" v-on:click="say(index)">
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
                <template slot="title">
                  <i>>></i>
                  操作题
                </template>
                <el-menu-item index="2-1">
                  选项1
                  <div class="active select" />
                </el-menu-item>
                <el-menu-item index="2-2">
                  选项2
                  <div class="active select" />
                </el-menu-item>
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
import zkTimeDown from "./HomeTimer";

export default {
  name: "App",
  components: { zkTimeDown },
  data() {
    return {
      
      sava_element: {}, //保存下标
      arrs: 4,//选项四个
      data_answer: {}, //答案 属性名和属性值
      current: 2,
      // current:false,
      value: "1", //选中的值
      arr: [
        {
          id: "1",
          select: "189 Lefferts Place, Wollochet, Connecticut, 1248",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Diane Whitaker"
            },
            {
              id: "B",
              name: "Harriet Roberts"
            },
            {
              id: "C",
              name: "Ophelia Hampton"
            },
            {
              id: "D",
              name: "Jeanne Wilder"
            }
          ]
        },
        {
          id: "2",
          select: "244 Lott Place, Alafaya, Virginia, 2337",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Alexis Dale"
            },
            {
              id: "B",
              name: "Woods Pollard"
            },
            {
              id: "C",
              name: "Krystal Scott"
            },
            {
              id: "D",
              name: "Richard Maldonado"
            }
          ]
        },
        {
          id: "3",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "4",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "5",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "6",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "7",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "8",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "9",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "10",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "11",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "12",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "13",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "14",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "15",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "16",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "17",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "18",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "19",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "20",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "21",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "22",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "23",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "24",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "25",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "26",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "27",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "28",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "29",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "30",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "31",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "32",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "33",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "34",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "35",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "36",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "37",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "38",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "39",
          select: "419 Benson Avenue, Oneida, New Hampshire, 2298",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Mullins Chambers"
            },
            {
              id: "B",
              name: "Sharp Reese"
            },
            {
              id: "C",
              name: "Brigitte Hicks"
            },
            {
              id: "D",
              name: "Duke Lee"
            }
          ]
        },
        {
          id: "40",
          select: "420 Wolf Place, Bennett, Louisiana, 4827",
          selected: false,
          answer: "",
          Options: [
            {
              id: "A",
              name: "Cervantes Meyers"
            },
            {
              id: "B",
              name: "Beverly Gates"
            },
            {
              id: "C",
              name: "Addie Payne"
            },
            {
              id: "D",
              name: "Taylor Whitehead"
            }
          ]
        }
      ]
    };
  },
  methods: {
        //答案选项点击事件 传入下标
        index_sava(e) {
            console.log("选项", e+1);
            console.log("属性名", this.value * 1);
            //选中的答案以第几题为对象属性  答案为属性值存取到对象当中
            this.data_answer[this.value * 1] = e+1;
            console.log('第几题',this.data_answer,'答案',e+1);
                // 判断答案对象里面是否有写过的题   有则显示 无则不显示
                if(this.data_answer[this.value*1]){
                    console.log(111111111111111111)
                    console.log(e)
                        // 赋值给sava_element做class对比  让class为ture 高亮
                        this.sava_element = e+1;
                    }else{
                        // 没有的话赋值  让class为false   不让高亮
                        this.sava_element=''
                    }
        },
        // 右侧点击显示
        say: function(event) {
            // 读取下标标识并记录
            // 获取的下标永远比第几道题小于一   所以加一  为了保持一致
            this.value = event+1
            this.sava_element = this.data_answer[this.value];
            // 右侧点击回退
            this.$nextTick(()=>{
                // 判断答案对象里面是否有写过的题
                if(this.data_answer[event+1]){
                        console.log(22222222222222222222)
                        // 有写过的给予赋值给sava_element做class对比  让class为ture 高亮
                        this.sava_element = this.data_answer[this.value];
                        // console.log(this.data_answer[event])
                    }else{
                        // 没有的话赋值  让class为false   不让高亮
                        this.sava_element=''
                    }
                })
        },
        
        plus: function() {
            if (this.value < this.arr.length) {
                this.value = this.value * 1 + 1;
                this.say(this.value-1)
            }
        },
        less: function() {
            if (this.value > 1) {
                this.value = this.value * 1 - 1;
                this.say(this.value-1)
            }
        },
        first: function() {
            this.value = 1;
            this.say(this.value-1)

        },
        last: function() {
            this.value = this.arr.length;
            this.say(this.value-1)
        },
        selectQ: function(event) {
            this.arr[this.value * 1 - 1].selected = "ture";
        },

        // 点击交卷弹窗方法
        submit:function(){
            this.$refs.submit.style.display = 'block'
        },
        turn:function(){
            this.$refs.submit.style.display = 'none'
        }
    },
    updated:{
      
    }
};
</script>

<style lang="stylus">
#HomeContainer {
  height: 100%;
  width: 100%;

  .homeHeader {
    height: 100px;
    width: 100%;
    background-image: linear-gradient(#1b67b4, #2b87c6);

    ul {
      height: 100%;
      margin-left: 70px;
      display: flex;
      align-items: center;
      overflow: hidden;
      li {
        // background-color red
        width: 70px;
        text-align: center;
        color: #fff;
        display: inline-block;
        margin-right: 130px;
        img {
          margin-bottom: 6px;
          cursor: pointer;
        }
        p {
          white-space: nowrap;
          font-size: 14px;
        }
        .hide{
          display none
        }
        .mask,.messageBox{
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .mask{
          width 100%
          height 1080px
          background-color #0033ff
          z-index 1
          opacity: 0.2
          display none
        }
        .messageBox{
          margin: auto;
          height 308px
          width 446px
          background-color #fff
          z-index 2
          display none
          .volumeTitle{
            width 100%
            height 32px
            background-image: linear-gradient(#2c79c2, #3696d9);
            line-height 32px
            font-size 14px
            span{
              margin-right: 360px;            }
            img{
              margin-bottom: 0px;
            }
          }
          .volumeConcent{
            padding 0 20px
            div{
              height 48px
              line-height 48px
              font-size 18px
              img{
                vertical-align:middle;
                margin-right 8px
              }
              span{
                color #3085cd
              }
            }
            .answers{
                font-size 18px
                color #333
                font-weight: bolder;
                float left
              }
            .Clear{
              height 30px
            }
            table{
              color #454545
              border-collapse:collapse;
              tr{
                td{
                  border 1px solid #c3c5cd
                  height 35px
                }
                td:nth-child(1){
                  width 142px
                }
                td:nth-child(2){
                  width 125px
                }
                td:nth-child(3){
                  width 129px
                }
              }
              tr:nth-child(2){
                background-color #f5f5f5
              }
              tr:nth-child(3){
                background-color #eae8ef
              }
              .alt{
                background-color #d2e8f5
              }
              .altAcelt>td:nth-child(1){
                border-right 1px solid #d2e8f5
              }
              
            }
            .confirm{
              margin-top 8px
              button{
                  height 30px
                  width 78px
                  background-color #2c79c2
                  border-radius: 2px;
                  display: inline;
                  margin 0 30px
                  font-size 16px
                  color #fff
              }

            }

          }
        }
        
      }

      li:nth-last-child(2) {
        margin-right: 0;
      }

      li:nth-last-child(1) {
        margin-right: 0;
        width: 100px;
        white-space: nowrap;
        width: 161px;

        span {
          color: #fff !important;
          line-height: 30px;
        }

        span, p {
          font-size: 16px;
        }
      }
    }
  }

  .homeContent {
    width: 100%;
    height: 978px;

    .contentLeft {
      width: calc(100% - 300px);
      float: left;
      height: 100%;
      background-color: #dcdae8;
      font-size: 16px;
      color: #333;

      .leftTop {
        padding: 40px 0 0 30px;
        height: 407px;
        border-bottom: 2px solid #aaa8c0;
      }

      .leftBottom {
        padding: 30px 0 0 30px;

        .active {
          background-color: red;
        }

        div {
          height: 20px;
          width: 20px;
          border: 1px solid #333;
          display: inline-block;
          text-align: center;
          line-height: 20px;
          border-radius: 50%;
          margin-right: 4px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .active_aaa {
          background-color: #4b83c6;
        }
      }
    }

    .contentRight {
      float: right;
      width: 300px;
      height: 100%;
      border-top: 2px solid #dcdae8;
      background-color: #dcdae8;

      .el-container {
        height: 936px;
        border-left: 1px solid #c3c1d4;
        font-size: 16px;

        .el-submenu__icon-arrow {
          margin-right: -50px;
        }

        .el-aside {
          overflow-x: hidden;
        }

        i {
          color: #25b8ee;
          font-size: 20px;
        }

        .el-submenu__title {
          background-color: #4b83c6;
        }

        .el-menu {
          background-color: #dcdae8;

          .el-menu-item:hover, .el-menu-item:focus {
            background-color: transparent;
          }

          .el-menu-item {
            display: flex;
            margin-bottom: 2px;
            padding-left: 70px !important;

            .done {
              background-color: #b2b7da;
            }

            .active {
              background-color: #0a7307;
            }

            p {
              width: 20px;
              text-align: center;
            }

            div {
              width: 120px;
              height: 100%;
              background-color: #ada8b8;
            }
          }
        }
      }

      .status {
        height: 40px;
        width: 300px;
        background-color: #dedae8;
        display: flex;
        border-left: 1px solid #c3c1d4;
        justify-content: space-around;
        padding: 0 20px;

        .current {
          div {
            background-color: #08720c;
          }
        }

        .notDone {
          div {
            background-color: #ada8b8;
          }
        }

        .done {
          div {
            background-color: #b2b7da;
          }
        }

        .notChecked {
          div {
            background-color: #ce8f0e;
          }
        }

        .current, .notDone, .done, .notChecked {
          margin: auto 0;
          vertical-align: baseline;

          div {
            height: 14px;
            width: 14px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
