import GoogleAuth from "./GoogleAuth";

const AuthRequired = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center flex-col gap-y-2">
      <h1>You Need to Login First</h1>
      <GoogleAuth />
    </div>
  );
};

export default AuthRequired;
