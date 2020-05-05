<template>
  <div class="TopBar">
    <!-- LOGO -->
    <img class="logo" :src="logoImg"/>
    <span class="label">Rockman Boost</span>

    <!-- 应用设置/控制窗口 -->
    <div class="operationBar ">
      <div class="dotBtn min" @click="minApp">-</div>
      <div class="dotBtn close" @click="closeApp">×</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  import LogoImg from '@/assets/image/Logo.png';

  @Component
  export default class TopBar extends Vue {
    logoImg = LogoImg;

    minApp(): void {
      this.$ipcRenderer.send('minApp');
    }

    closeApp(): void {
      this.$ipcRenderer.send('quitApp');
    }
  };
</script>

<style lang="less" scoped>
  @import 'TopBar.less';
</style>
