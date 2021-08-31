import Image from "next/image";

export const Profile = () => {
  return (
    <div className="items-center p-10 bg-white ">
      <div className="p-1 mx-auto w-1/2 text-center">
        <Image src="/torii.jpg" width={200} height={200} className="rounded-full" />
      </div>
      <h1 className="p-4 text-xl font-bold text-center">YUMOTO YOSHIAKI</h1>
      <h3 className="text-center">
        高校卒業後、仕事を始める。ヒッチハイクで東京→屋久島行ったり、バスケ、プログラミング、スノーボードが趣味です。
      </h3>
    </div>
  );
};
