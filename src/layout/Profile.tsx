import Image from "next/image";

export const Profile = () => {
  return (
    <div className="items-center p-10 bg-white">
      <div className="p-1 mx-auto w-1/2 text-center">
        <Image src="/torii.jpg" width={200} height={200} className="rounded-full" />
      </div>
      <h2 className="p-4 text-xl font-bold text-center">
        <p>MACHISIRU</p>
      </h2>
      <h3 className="text-sm tracking-wide leading-7 text-center">
        「暮らしをアップデートする」をミッションに、
        <br />
        　おすすめの街、地域の魅力をお届けします
      </h3>
    </div>
  );
};
