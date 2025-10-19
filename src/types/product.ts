export interface PageProductParams {
    product_name: string
}

export enum EnumCharacteristics {
  id = "id",
  skinType = "Тип кожи",
  fragrance = "Аромат",
  age = "Возраст",
  ph = "pH средства",
  shelfLife = "Срок годности",
  volume = "Объем",
  contraindications = "Противопоказания"
}

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  fullDescription: string;

  category: ICategory;
  characteristics: ICharacteristics;
}

export interface ICharacteristics {
  id: string
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

export interface ICategory {
  id: string
  name: string
  slug: string
}