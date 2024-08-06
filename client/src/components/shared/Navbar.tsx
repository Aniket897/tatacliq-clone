import { BaggageClaim, Heart, Search } from "lucide-react";
import Banner from "./Banner";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import { useAuth } from "../../contexts/authContext";

const Searchbox = () => {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!text) return;
    navigate(`/search?q=${text}`);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") return handleSearch();
  };

  return (
    <div className="relative hidden md:block">
      <Search size={20} className="absolute top-[15px] left-3 text-gray-400" />
      <input
        onKeyDown={handleKey}
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="bg-[#4A4A4A] p-3 rounded-md w-[500px] pl-[40px]"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

const Navbar = () => {
  const { isAuth, userData } = useAuth();
  return (
    <div>
      <Banner />
      <div className="bg-[#212121] text-white flex items-center justify-between px-5 md:px-[200px] p-4">
        <Link to={"/"}>
          <img
            src="https://www.tatacliq.com/src/general/components/img/group.svg"
            alt=""
            // className="w-[70px]"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <div>Categories</div>
          <div>Brands</div>
        </div>
        <div className="flex items-center gap-[50px]">
          <Searchbox />
          <div className="flex items-center gap-8">
            <Link to={"/cart"}>
              <Heart size={20} />
            </Link>
            <button>
              <BaggageClaim size={20} />
            </button>
            <button>
              <Search size={20} />
            </button>
            {!isAuth && <GoogleAuth />}
            {isAuth && (
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img src={userData?.avatar} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
