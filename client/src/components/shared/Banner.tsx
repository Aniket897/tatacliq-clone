const Banner = () => {
  return (
    <div className="hidden md:flex items-center justify-between bg-black text-white text-xs p-2 px-8">
      <div>
        <p>Tata CLiQ Luxury</p>
      </div>
      <ul className="flex items-center gap-8">
        <li>CLiQ Cash</li>
        <li>Gift Card</li>
        <li>CLiQ Care</li>
        <li>Track Orders</li>
        <li>Sign In / Sing Up</li>
      </ul>
    </div>
  );
};

export default Banner;
