import Divider from "../shared/Divider";

const Blockbluster = () => {
  return (
    <div>
      <Divider title="Blockbuster Deals" />
      <div className="w-[90vw] md:w-[80vw] mx-auto space-y-5 py-10">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/51869116956702.jpg"
            alt=""
          />
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/51869117022238.jpg"
            alt=""
          />
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/51869117087774.jpg"
            alt=""
          />
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/51869117153310.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blockbluster;
