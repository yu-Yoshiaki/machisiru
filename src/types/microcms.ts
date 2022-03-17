export type textField = string;
export type textArea = string;
export type image = {
  url: string;
  height: number;
  width: number;
};
export type richEditor = string;

//MicroCMSのレスポンスに既定で存在する型
type Base = {
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

export type SpeechBubbleCustomField = {
  fieldId: "speechBubble";
  leftImage: image;
  leftImageAlt: textField;
  rightImage: image;
  rightImageAlt: textField;
  speechBody: {
    fieldId: "bubbleItem";
    positionRight: boolean;
    speechText: textArea;
  }[];
};

//カスタムフィールド --------------------------------------------------------------------------------------
export type NewsResponse = Base & {
  mainTitle: textField;
  author?: textField;
  mainImage?: ImageCustomField;
  bodys: [ImageCustomField | ParagraphCustomField | SpeechBubbleCustomField];
  season?: ["春" | "夏" | "秋" | "冬"];
};
