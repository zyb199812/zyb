<template>
  <div>
    <el-row class="wp-list">
      <el-button
        v-for="item in wpList"
        :key="item.name"
        :class="{active : active == item.name}"
        @click="selected(item.name)"
      >{{item.name}}</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methods: {
        selected(name) {
          this.active = name;
        }
      },
      wpList: [
        {
          name: "食品饮料"
        },
        {
          name: "鲜花"
        },
        {
          name: "蛋糕"
        },
        {
          name: "水果生鲜"
        },
        {
          name: "服装鞋帽"
        },
        {
          name: "其它"
        }
      ]
    };
  }
};
</script>

<style>
.active {
  background: #fd7522;
  border: 1px solid #fd7522;
  color: #fff;
}
</style>