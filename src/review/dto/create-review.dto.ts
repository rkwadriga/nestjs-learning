import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsString()
  public name?: string;

  @IsString()
  public title?: string;

  @IsString()
  public description?: string;

  @IsNumber()
  @Min(1, { message: 'Rating can not be less than 1' })
  @Max(5, { message: 'Rating can not be greater than 5' })
  public rating?: number;

  @IsString()
  public productId?: string;
}
