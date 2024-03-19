import { FunctionComponent } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[184px] box-border tracking-[normal] text-center text-11xl text-gray-100 font-abel">
      <Header />
      <div className="self-stretch bg-darkgray overflow-hidden flex flex-row flex-wrap items-start justify-start py-[18px] pr-[380px] pl-[396px] box-border gap-[23px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[198px] mq750:pr-[190px] mq750:box-border">
        <div className="h-[33.7px] w-14 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <img
            className="self-stretch h-[32.7px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/shipping.svg"
          />
        </div>
        <b className="flex-1 relative inline-block min-w-[380px] max-w-full lg:min-w-full mq450:text-lg mq1050:text-5xl">
          Free shipping for all orders above Rm50!
        </b>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/banner@2x.png"
      />
      <Tabs />
    </div>
  );
};

export default Desktop;
