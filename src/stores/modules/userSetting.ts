import { defineStore } from 'pinia'

const useUserSettingStore = defineStore('userSetting', {
  state: () => ({
    isCollapse: false,
  }),
  actions: {
    // 切换侧边栏
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
})

export default useUserSettingStore
