import { ProductAbout } from './ProductAbout'
export class ProductInfo {
  public id: string
  public asin: string
  public title: string
  public price1: string
  public price2: string
  public abouts: ProductAbout[]
  public image: string
  public titleZh: string

  constructor(
    id: string,
    asin: string,
    title: string,
    price1: string,
    price2: string,
    abouts: ProductAbout[],
    image: string,
    titleZh: string,
  ) {
    this.id = id
    this.asin = asin
    this.title = title
    this.price1 = price1
    this.price2 = price2
    this.abouts = abouts
    this.image = image
    this.titleZh = titleZh
  }

  static fromJson(json: any): ProductInfo {
    return new ProductInfo(
      json.piId,
      json.piAsin,
      json.piTitle,
      json.piPrice1,
      json.piPrice2,
      ProductAbout.fromJsonArray(json.abouts),
      json.piImg,
      json.piTitleZh,
    )
  }

  static fromJsonArray(jsonArray: any): ProductInfo[] {
    return (jsonArray as any[]).map((json) => ProductInfo.fromJson(json))
  }
}
