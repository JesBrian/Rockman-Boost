<template>
  <div class='GamePage'>
    Game Page <br/>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  import Phaser from 'phaser';

  @Component
  export default class GamePage extends Vue {

    game: any = () => {
      return {};
    };

    created (): void {
      this.game = new Phaser.Game({
      });
    }

    testClick (val: string = '') {
      console.log(val);
    }

    testClose () {
      console.log('testClose');
    }
  };
</script>

<style lang='less' scoped>
  @import 'GamePage.less';
</style>
