import request from '@/utils/request'

// 获取商品列表
export function getProductList(params: any) {
  return request({
    url: '/product/list',
    method: 'get',
    params,
  })
}
