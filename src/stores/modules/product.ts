import { getProductList } from '@/api/product'
import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
  state: () => ({
    productsInfos: [],
    currPage: 1,
    pageSize: 10,
  }),

  actions: {
    getProductListData() {
      return new Promise((resolve, reject) => {
        getProductList('')
          .then((res) => {
            console.log(res)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})

export default useProductStore
