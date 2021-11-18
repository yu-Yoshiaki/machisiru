export const NewsArticleTop = (props: any) => {
  return (
    <div>
      <h1 className="md:p-8 text-xl md:text-2xl font-bold text-center">{props.mainTitle}</h1>
      <p className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</p>
    </div>
  );
};
