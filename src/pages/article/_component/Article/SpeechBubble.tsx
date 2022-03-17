import Image from "next/image";
import type { VFC } from "react";
import type { SpeechBubbleCustomField } from "src/types/microcms";

// const bubble: SpeechBubbleCustomField = {
//   fieldId: "speechBubble",
//   leftImage: {
//     url: "/author.jpeg",
//     width: 40,
//     height: 40,
//   },
//   leftImageAlt: "author",
//   rightImage: {
//     url: "/account.png",
//     width: 40,
//     height: 40,
//   },
//   rightImageAlt: "user",
//   speechBody: [
//     {
//       fieldId: "bubbleItem",
//       positionRight: false,
//       speechText: "今日はmicroCMSについてお話しマウス",
//     },
//     {
//       fieldId: "bubbleItem",
//       positionRight: true,
//       speechText: "よろしくお願いします",
//     },
//     {
//       fieldId: "bubbleItem",
//       positionRight: false,
//       speechText:
//         "今日はmicroCMSについてお話しマウス今日はmicroCMSについてお話しマウス今日はmicroCMSについてお話しマウス",
//     },
//     {
//       fieldId: "bubbleItem",
//       positionRight: true,
//       speechText: "よろしくお願いします",
//     },
//     {
//       fieldId: "bubbleItem",
//       positionRight: false,
//       speechText: "今日はmicroCMSについてお話しマウス",
//     },
//     {
//       fieldId: "bubbleItem",
//       positionRight: true,
//       speechText:
//         "よろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いしますよろしくお願いします",
//     },
//   ],
// };

export const SpeechBubbleField: VFC<{ bubble: SpeechBubbleCustomField }> = (props) => {
  const bubble = props.bubble;
  return (
    <div className="space-y-4">
      {bubble.speechBody.map((body) => {
        if (body.positionRight) {
          return (
            <div className="grid grid-cols-[1fr,40px] items-start ml-auto w-[90%]">
              <div className="inline-block relative before:absolute before:top-[10px] before:left-[100%] py-2 px-1 mr-4 before:content-[''] rounded-lg border-2 before:border-[10px] before:border-l-[10px] border-white before:border-transparent before:border-l-[#e0edff] before:border-solid">
                <p>{body.speechText}</p>
              </div>
              <Image
                className="bg-white rounded-full"
                src={bubble.rightImage.url}
                alt={bubble.rightImageAlt}
                width={40}
                height={40}
              />
            </div>
          );
        } else {
          return (
            <div className="grid grid-cols-[40px,1fr] items-start w-[90%]">
              <Image
                className="rounded-full"
                src={bubble.leftImage.url}
                alt={bubble.leftImageAlt}
                width={40}
                height={40}
              />
              <div className="inline-block relative before:absolute before:top-[10px] before:left-[-20px] py-2 px-1 ml-4 before:content-[''] rounded-lg border-2 before:border-[10px]  before:border-r-[10px] border-white before:border-transparent before:border-r-[#e0edff] before:border-solid ">
                <p>{body.speechText}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
