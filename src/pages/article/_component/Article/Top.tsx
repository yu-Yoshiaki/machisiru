export const Top = (props: any) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-left md:p-8 md:text-4xl ">{props.mainTitle}</h1>
      <p className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</p>
    </div>
  );
};
