<template>
  <div class="habit_page">
    <van-tabs v-model="active" animated swipeable>
      <van-tab v-for="(item,index) in tabs" :title="item.label" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tab, Tabs } from 'vant';
export default {
  name: 'Habit',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      active: 2,
      tabs: [
        {
          label: '早上'
        },
        {
          label: '午间'
        },
        {
          label:'晚上'
        }
      ]
    };
  }
}
</script>
