export interface PageProductParams {
    product_name: string
}

export enum EnumCharacteristics {
  skinType = "Тип кожи",
  fragrance = "Аромат",
  age = "Возраст",
  ph = "pH средства",
  shelfLife = "Срок годности",
  volume = "Объем",
  contraindications = "Противопоказания"
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  categories: string;
  fullDescription: string;
  characteristics: ICharacteristics;
}

export interface ICharacteristics {
  skinType: string;
  fragrance: string;
  age: number;
  ph: string;
  shelfLife: {
    beforeOpening: string;
    afterOpening: string;
  };
  volume: string;
  contraindications?: string;
}