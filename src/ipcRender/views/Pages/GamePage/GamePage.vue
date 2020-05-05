<template>
  <div id="gameContainer" class='GamePage'>
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

    mounted (): void {
      this.game = new Phaser.Game({
        width: '100%',
        height: '100%',
        parent: 'gameContainer',
        type: Phaser.AUTO,
        scene: {
          preload: this.gamePreload,
          create: this.gameCreate,
          update: this.gameUpdate
        }
      });
    }

    gamePreload (): void {
      console.log('gamePreload ---- gamePreload');
    }

    gameCreate (): void {
      console.log('gameCreate ---- gameCreate');
    }

    gameUpdate (): void {
      console.log('gameUpdate ---- gameUpdate');
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
