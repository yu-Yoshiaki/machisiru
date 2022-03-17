//MicroCMSの ベース型
export type textField = string;
export type textArea = string;
export type image = {
  url: string;
  height: number;
  width: number;
};
export type richEditor = string;

//MicroCMSのレスポンスに既定で存在する型
type MicroCMSBaseResponse = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
};

//カスタムフィールド「画像」の型
export type ImageCustomField = {
  fieldId: "image";
  image: image;
  alt: string;
};

export type ParagraphCustomField = {
  fieldId: "paragraph";
  h2_title: textField;
  h2_content: richEditor;
};

//カスタムフィールド --------------------------------------------------------------------------------------
export type NewsResponse = MicroCMSBaseResponse & {
  mainTitle: textField;
  author?: textField;
  mainImage?: ImageCustomField;
  bodys: (ImageCustomField | ParagraphCustomField)[];
  season?: ["春"] | ["夏"] | ["秋"] | ["冬"];
};
