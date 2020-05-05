
import Vue from 'vue'
import localForage from 'localforage';
import { ipcRenderer } from 'electron';

declare module 'vue/types/vue' {
  interface Vue {
    // @ts-ignore
    $localForage: localForage
    // @ts-ignore
    $ipcRenderer: ipcRenderer
  }
}
