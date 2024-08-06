const Footer = () => {
  return (
    <div className="space-y-5 bg-white p-7 mt-10 pb-[200px]">
      <div className="flex items-center justify-center">
        <img
          src="https://www.tatacliq.com/src/general/components/img/trustFrame.png"
          alt=""
        />
      </div>
      <div className="flex flex-wrap gap-[100px] w-[90vw] md:w-[80vw] mx-auto">
        <div>
          <p className="font-bold">Tata MarketPlace</p>
          <ul className="mt-4 flex flex-col gap-y-3">
            <li>About Us</li>
            <li>Careers</li>
            <li>Sell With Us</li>
            <li>Terms of Use</li>
            <li>Privancy Policy</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Customer Service</p>
          <ul className="mt-4 flex flex-col gap-y-3">
            <li>Shopping</li>
            <li>Offers & Promotions</li>
            <li>Payments</li>
            <li>Cancellation</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">My Tata CLiQ</p>
          <ul className="mt-4 flex flex-col gap-y-3">
            <li>My Account</li>
            <li>My Orders</li>
            <li>My Shopping Bag</li>
            <li>My Shopping Whishlist</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
