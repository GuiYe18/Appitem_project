 <template>
  <div class="CountDown">
    <p>{{minute}}:{{second}}</p>
  </div>
</template>
    
    <script type="text/ecmascript-6">
export default {
  name: "CountDown",
  data() {
    return {
      minutes: 90,
      seconds: 0
    };
  },
  props: {
    countTime: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.add();
  },
  methods: {
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
          alert('时间到了,别答题了小朋友')
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    }
  },
  watch: {
    countTime: {
      deep: true,
      immediate: true,
      // handler: function(newVal) {
      //   console.log(11111111111111111111111111111111111111)
      //   this.minutes = newVal.minute;
      //   this.seconds = newVal.second;
      // }
    },
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
    
<style lang="stylus" scoped>
.CountDown 
  color: #fff;
</style>
