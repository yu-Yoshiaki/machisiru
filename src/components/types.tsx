//MicroCMS側の各フィールドに割り当てられた型
export type MicroCMSField = {
  text: string;
  textArea: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  richEditor: string;
};

//カスタムフィールド型
export type MicroCMSCustomField<T, U> = {
  fieldId: T;
} & Partial<U>;

//各カスタムフィールドの型 --------------------------------------------------------------------------------------

export type McCustomImage = MicroCMSCustomField<"image", { image: MicroCMSField["image"]; alt: string }>;
export type ImageSlide = MicroCMSCustomField<"imageSlide", McCustomImage[]>;

//カスタムフィールド --------------------------------------------------------------------------------------

export type MicroCMSContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  author?: string;
  bodys: [];
};
