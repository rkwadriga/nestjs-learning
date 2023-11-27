export class ProductModel {
  public image?: string;
  public title?: string;
  public price?: number;
  public oldPrice?: number;
  public credit?: number;
  public calculatedRating?: number;
  public description?: string;
  public advantages?: string;
  public disAdvantages?: string;
  public categories: string[] = [];
  public tags?: string;
  public characteristics: {
    [key: string]: string;
  } = {};
}
