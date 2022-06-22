import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Trial</title>
      </Head>
      <div className="container mx-auto font-sans">
        <span className="font-black text-lg">
          Is this a container with a big Title!
        </span>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-[72px] font-black box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </div>
          <div className="height=[100] bg-yellow-600 text-white p-4">
            Restore the world to its former glory!
          </div>
          <div className="font-black text-[40px] height=[100] bg-green-600 border-8 border-pink rounded-xl text-white p-4">
            Tales of loss and fire and faith!
          </div>
          <div className="col-span-2 height=[100] bg-gray-900 text-white p-4">
            My parents died and I had to be strong for Serah. I thought that by
            changing my name I coudl change who I was. Lightning, it flashes
            bright and then fades away. It can't protect, it only destroys.
          </div>
          <Image
            className="object-cover"
            src={"/../public/lightning.jpg"}
            height={300}
            width={300}
          />
          <div className="bg-gray-300 rounded-md  h-100 p-10">
            Say your name:{` `}
            <input className="rounded border-3 " type="text" />
            <br />
            <br />
            <button className="bg-yellow-600 text-white rounded-full px-10">
              Buy me sandwich!
            </button>
          </div>
          <div className="col-span-2 border-8 border-rose-700 rounded bg-red-200 text-blue-900 p-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
