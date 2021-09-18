import type { VFC } from "react";
import { ArticleTab } from "src/components/articleTab";
import type { MicroCMSContent } from "src/pages";

// const items = [
//   { mainTitle: "hello", id: "1" },
//   { mainTitle: "today", id: "2" },
//   { mainTitle: "monkey", id: "3" },
//   { mainTitle: "rainy", id: "4" },
//   { mainTitle: "good", id: "5" },
//   { mainTitle: "bye", id: "6" },
//   { mainTitle: "apple", id: "7" },
//   { mainTitle: "banana", id: "8" },
//   { mainTitle: "issue", id: "6" },
//   { mainTitle: "collect", id: "7" },
//   { mainTitle: "hello", id: "8" },
//   { mainTitle: "hello", id: "6" },
//   { mainTitle: "hello", id: "7" },
//   { mainTitle: "hello", id: "8" },
//   { mainTitle: "hello", id: "1" },
//   { mainTitle: "today", id: "2" },
//   { mainTitle: "monkey", id: "3" },
//   { mainTitle: "rainy", id: "4" },
//   { mainTitle: "good", id: "5" },
//   { mainTitle: "bye", id: "6" },
//   { mainTitle: "apple", id: "7" },
//   { mainTitle: "banana", id: "8" },
//   { mainTitle: "issue", id: "6" },
//   { mainTitle: "collect", id: "7" },
//   { mainTitle: "hello", id: "8" },
//   { mainTitle: "hello", id: "6" },
//   { mainTitle: "hello", id: "7" },
//   { mainTitle: "dxcfgvhbjnkml,.;,mnbvfghjkll,kmjnhgfghjk,mknjbhgvffghjk", id: "8" },
//   { mainTitle: "dxcfgvhbjnkml,.;,mnbvfghjkll,kmjnhgfghjk,mknjbhgvffghjk", id: "8" },
// ];

export const ArticleList: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="flex flex-wrap justify-between md:justify-start items-start p-3 md:p-0">
      {props.items.map((item) => {
        // const topImageURL = item.bodys.map((body) => {
        //   return body.fieldId;
        // });

        // .fieldIdimages
        //   ? item.images[0].image.url
        //   : "/snow.jpg";
        // eslint-disable-next-line react/jsx-key
        return <ArticleTab image="/snow.jpg" title={item.mainTitle} url={item.id} />;
      })}
    </div>
  );
};
