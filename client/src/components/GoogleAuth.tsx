import { useAuth } from "../contexts/authContext";
import Loader from "./Loader";

const GoogleAuth = () => {
  const { loading } = useAuth();
  const handleAuth = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  return (
    <div>
      <button
        disabled={loading}
        onClick={handleAuth}
        className="bg-white text-black p-2 rounded-md px-5"
      >
        {loading ? <Loader /> : "Login"}
      </button>
    </div>
  );
};

export default GoogleAuth;
