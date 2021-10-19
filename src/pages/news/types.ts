//MicroCMS側の各フィールドに割り当てられた型
export type MicroCMSField = {
  textField: string;
  textArea: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  richEditor: string;
};

//MicroCMSのレスポンスに既定で存在する型
type MicroCMSBaseResponse = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
};

//カスタムフィールド「画像」の型
type ImageCustomField = MicroCMSCustomField<"image", { image: MicroCMSField["image"]; alt: string }>;
//カスタムフィールド「paragraph」の型
type ParagraphCustomField = MicroCMSCustomField<
  "paragraph",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  { h2_title: MicroCMSField["textField"]; h2_content: MicroCMSField["richEditor"] }
>;

//カスタムフィールド型
export type MicroCMSCustomField<T, U> = {
  fieldId: T;
} & U;

//カスタムフィールド --------------------------------------------------------------------------------------
type MicroCMSResponse<U> = MicroCMSBaseResponse & U;

export type NewsResponse = MicroCMSResponse<{
  mainTitle: MicroCMSField["textField"];
  author?: MicroCMSField["textField"];
  mainImage?: ImageCustomField;
  bodys: (ImageCustomField | ParagraphCustomField)[];
}>;
