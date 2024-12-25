import { getProductList } from '@/api/product'
import { defineStore } from 'pinia'
import { ProductInfo } from '@/entry/ProductInfo'

const useProductStore = defineStore('product', {
  state: () => ({
    isChinese: false,
    productsInfos: [] as ProductInfo[],
    currPage: 1,
    pageSize: 10,
  }),

  actions: {
    getProductListData() {
      return new Promise((resolve, reject) => {
        getProductList('')
          .then((res) => {
            this.productsInfos = ProductInfo.fromJsonArray(res)
            console.log(res)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    changeLanguage() {
      this.isChinese = !this.isChinese
    },

    changeIndexTitle(index: number) {
      // this.productsInfos[index].title = this.isChinese ? '中文标题' : 'English Title'
      this.productsInfos[index].title = this.productsInfos[index].title + index
      this.productsInfos[index].titleZh = this.productsInfos[index].titleZh + index
    },
  },
})

export default useProductStore
