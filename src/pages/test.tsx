// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/naming-convention */
// import type { GetStaticProps } from "next";
// import type { VFC } from "react";
// import { Layout } from "src/components/layout";
// import { client } from "src/libs/microcms";

// // eslint-disable-next-line react/destructuring-assignment
// const Test: VFC<{ item: Item }> = ({ content }) => {
//   const ite =
//     '<h3 id="hd244e21935">「何をしても良い、何もしなくても良い」</h3><p><img src="https://images.microcms-assets.io/assets/4c3c16c9c8d349c983b585098e0688e6/00a924223bb14d05887d7858ad4b2f4e/pubimg.jpeg" alt></p>';

//   const ans = ite.replace("img", "Image width={500} height={500} ");
//   console.log("replace-------", ans);

//   return (
//     <Layout>
//       <div className="p-3 bg-blue-400">{/* <div dangerouslySetInnerHTML={{ __html: item.bodys }}></div> */}</div>
//       <div dangerouslySetInnerHTML={{ __html: ans }}></div>
//     </Layout>
//   );
// };

// type Item = {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   revisedAt: string;
//   mainTitle: string;
//   bodys: string;
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const item: Item = await client.get({
//     endpoint: "blog",
//     contentId: "z7nyomub5t",
//   });

//   return {
//     props: {
//       content: item,
//     },
//   };
// };

// // eslint-disable-next-line import/no-default-export
// export default Test;
