<template>
  <van-tabbar route>
    <van-tabbar-item :to="item.url" v-for="item in tabs" :key="item.url">
      {{ item.label }}
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? item.iconActive : item.icon"
      />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          label: "Today",
          url: "/home",
          icon: require("@/assets/menus/smile.png"),
          iconActive: require("@/assets/menus/smile_active.png")
        },
        {
          label: "日常习惯",
          url: "/habit",
          icon: require("@/assets/menus/favor.png"),
          iconActive: require("@/assets/menus/favor_active.png")
        },
        {
          label: "更多",
          url: "/more",
          icon: require("@/assets/menus/more.png"),
          iconActive: require("@/assets/menus/more_active.png")
        }
      ]
    };
  }
};
</script>


