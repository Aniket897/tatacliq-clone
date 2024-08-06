import Divider from "../shared/Divider";

const Infocus = () => {
  return (
    <div>
      <Divider title="In focus: Westside" />
      <div className="w-[90vw] md:w-[80vw] mx-auto space-y-5 py-10">
        <div className="flex items-center justify-between">
          <img
            className="w-[20%]"
            src="https://assets.tatacliq.com/medias/sys_master/images/52677983272990.jpg"
            alt=""
          />
          <img
            className="w-[20%]"
            src="https://assets.tatacliq.com/medias/sys_master/images/52677983338526.jpg"
            alt=""
          />
          <img
            className="w-[20%]"
            src="https://assets.tatacliq.com/medias/sys_master/images/52677983404062.jpg"
            alt=""
          />
          <img
            className="w-[20%]"
            src="https://assets.tatacliq.com/medias/sys_master/images/52677983469598.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between">
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg"
            alt=""
          />
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg"
            alt=""
          />
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Infocus;
