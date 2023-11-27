export enum TopLevelCategory {
  Cources,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  public _id?: string;
  public firstCategory?: TopLevelCategory;
  public secondCategory?: string;
  public title?: string;
  public category?: string;
  public hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  public advantages: {
    title: string;
    description: string;
  }[] = [];
  public seoText?: string;
  public tagsTitle?: string;
  public tags: string[] = [];
}
