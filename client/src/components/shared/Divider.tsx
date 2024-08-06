type dividerPropTypes = {
  title: string;
};

const Divider = ({ title }: dividerPropTypes) => {
  return (
    <div className="md:w-[70vw] mx-auto border-b-2 border-white py-14">
      <h1 className="text-6xl text-center font-bold">{title}</h1>
    </div>
  );
};

export default Divider;
