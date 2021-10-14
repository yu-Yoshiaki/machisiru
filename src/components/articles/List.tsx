import type { VFC } from "react";
import type { MicroCMSContent } from "src/types/microcms";

import { Card } from "./Card";

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

export const List: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="flex flex-wrap justify-between md:justify-start items-start p-2 md:p-0">
      {props.items.map((item) => {
        return (
          <Card key={item.id} image="/torii.jpg" title={item.mainTitle} url={item.id} updatedAt={item.updatedAt} />
        );
      })}
    </div>
  );
};
