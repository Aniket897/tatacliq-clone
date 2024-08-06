const categories = [
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg",
    name: "Westside",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg",
    name: "Womenswear",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg",
    name: "Menswear",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg",
    name: "Footware",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg",
    name: "Beauty",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg",
    name: "Watches",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108338718.jpg",
    name: "Jewellery",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108404254.jpg",
    name: "Kids",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg",
    name: "Gadgets",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108535326.jpg",
    name: "Home",
  },
  {
    image:
      "https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg",
    name: "Bags",
  },
];

const Category = () => {
  return (
    <div className="flex items-center justify-between gap-4 text-xs px-4">
      {categories.map((category, index) => {
        return (
          <div
            className="flex flex-col items-center gap-1 bg-white rounded-md shadow-sm"
            key={index}
          >
            <img src={category.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
