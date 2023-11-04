const content = [
  {
    img: "/images/store1.png",
  },
  {
    img: "/images/store1.png",
  },
  {
    img: "/images/store1.png",
  },
  {
    img: "/images/store1.png",
  },
  {
    img: "/images/store1.png",
  },
  {
    img: "/images/store1.png",
  },
];
const Store = () => {
  const Card = ({ item }) => {
    return (
      <div>
        <img
          className="border-[1px] w-[500px] border-blue-300 rounded-md"
          src={item.img}
          alt=""
        />
      </div>
    );
  };
  return (
    <div className="mt-[80px] p-8">
      <div>
        <p clasname="font-semibold">BUILD AN ONLINE STORE</p>
        <h1 className="text-6xl font-semibold my-8">Your store, your way</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center gap-3">
          {content.map((item, index) => (
            <div>
              <Card key={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
