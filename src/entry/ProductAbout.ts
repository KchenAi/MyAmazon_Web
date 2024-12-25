export class ProductAbout {
  public content: string
  public contentZh: string

  constructor(content: string, contentZh: string) {
    this.content = content
    this.contentZh = contentZh
  }

  public static fromJson(json: any): ProductAbout {
    return new ProductAbout(json.piAbout, json.piAboutZh)
  }

  public static fromJsonArray(jsonArray: any): ProductAbout[] {
    return (jsonArray as any[]).map(ProductAbout.fromJson)
  }
}
