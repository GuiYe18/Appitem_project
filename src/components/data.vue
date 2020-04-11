<template>
	<div class="hello">
		<p>{{minute}}分{{second}}秒</p>
	</div>
</template>
           
<script>
export default {
    data(){
        return {
            minutes: 29,   // 此处修改分钟数量
                seconds: 59,     // 此处修改秒数数量
        }
    },
    methods:{
        num: function (n) {
            return n < 10 ? '0' + n : '' + n
            },
            add: function () {
            var _this = this;
            var time = window.setInterval(function () {
                if (_this.seconds === 0 && _this.minutes !== 0) {
                _this.seconds = 59
                _this.minutes -= 1
                } else if (_this.minutes === 0 && _this.seconds === 0) {
                _this.seconds = 0
                window.clearInterval(time)
                } else {
                _this.seconds -= 1
                }
                console.log(1)
            }, 1000)
        },
    },
    watch: {
        second: {
        handler(newVal) {
            this.num(newVal)
        }
        },
        minute: {
        handler(newVal) {
            this.num(newVal)
        }
        }
    },
    computed: {
        second: function () {
        return this.num(this.seconds)
        },
        minute: function () {
        // console.log(this.minutes, this.seconds);
        if(this.num(this.minutes)=='00' && this.num(this.seconds)=='00'){
            this.paystatus = 0
        }
        return this.num(this.minutes);
        }
    }
}
</script>