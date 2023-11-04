import Image from "next/image";
import { AiOutlineShop } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsInfinity } from "react-icons/bs";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiUsersLight } from "react-icons/pi";
const community = [
  {
    id: 1,
    icon: <HiOutlineSquare3Stack3D />,
    heading: "Enterprise",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?",
  },
  {
    id: 5,
    icon: <BsInfinity />,
    heading: "Plus",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?",
  },
  {
    id: 2,
    icon: <PiUsersLight />,
    heading: "Partners",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?",
  },
  {
    id: 3,
    icon: <BiCodeAlt />,
    heading: "Developers",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?",
  },
  {
    id: 4,
    icon: <AiOutlineShop />,
    heading: "Retail Stores",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?",
  },
];
const Network = () => {
  const Card = ({ c_item }) => {
    const { icon, heading, details } = c_item;
    return (
      <div>
        <div className="w-[200px] border-[1px] shadow-xl px-3 py-6 rounded-lg">
          <div className="text-2xl bg-blue-400 rounded-full  w-[40px] h-[40px] border-4 flex justify-items-center items-center justify-center">
            {icon}
          </div>
          <h1 className="text-2xl font-semibold my-4">{heading}</h1>
          <p>{details}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-[80px]">
      {/* container */}
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/network.jpg"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold leading-[50px] font-mono">
            Discover why millions of entrepreneurs chose Shopify <br /> to build
            their business — <br /> from hello world to IPO.
          </h1>
          <div className="grid grid-cols-2 my-6">
            <div className="border-l-[6px] rounded-md p-3 mb-[30px] border-blue-500">
              <h1 className="text-4xl font-bold">Millions</h1>
              <p>of merchants worldwide</p>
            </div>
            <div className="border-l-[6px] rounded-md p-3 mb-[30px] border-blue-500">
              <h1 className="text-4xl font-bold">170+</h1>
              <p>countries represented</p>
            </div>
            <div className="border-l-[6px] rounded-md p-3 mb-[30px] border-blue-500">
              <h1 className="text-4xl font-bold">10%</h1>
              <p>of total US ecommerce</p>
            </div>
            <div className="border-l-[6px] rounded-md p-3 mb-[30px] border-blue-500">
              <h1 className="text-4xl font-bold">$444B</h1>
              <p>global economic activity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-semibold mt-3 mb-8">
          EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-center justify-items-center">
          {community.map((item, index) => (
            <div>
              <Card c_item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
