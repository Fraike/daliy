<template>
  <div class="today_page">
    <div class="scroll_content">
      <scroll
        class="content"
      >
        <van-collapse v-model="activeNames">
          <van-collapse-item 
            title="标题1" 
            name="1"
            value="value"
            value-class="home_page_subtitle"
          >
            晚饭后一小时
          </van-collapse-item>
          <van-collapse-item 
            title="标题2" 
            name="2"
          >
            内容
          </van-collapse-item>
          <van-collapse-item 
            title="标题3" 
            name="3" 
            disabled
          >
            内容
          </van-collapse-item>
        </van-collapse>
      </scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import BScroll from 'better-scroll'
import Scroll from '@/components/base/scroll.vue'
import { Collapse, CollapseItem } from 'vant';
export default {
  name: "Home",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    Scroll
  },
  data(){
    return {
      activeNames: ['1']
    }
  },
  mounted(){
  }
}
</script>

<style lang="scss">

.scroll_content{
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  .content{
    height: 100%;
    overflow: hidden
  }
  .van-collapse{
    height: 101%;
    overflow: hidden
  }
}
.home_page_subtitle{
  color: #000
}
</style>

