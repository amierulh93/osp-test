import { FunctionComponent } from "react";

const Tabs: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-11 box-border gap-[588px] max-w-full text-center text-41xl text-whitesmoke font-abel mq450:gap-[147px_588px] mq750:gap-[294px_588px] mq750:pb-5 mq750:box-border mq1050:pb-[29px] mq1050:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <button className="cursor-pointer [border:none] py-[26.5px] px-5 bg-gray-100 w-72 flex flex-row items-start justify-center box-border">
          <b className="w-[77px] relative text-6xl inline-block font-abel text-whitesmoke text-center min-w-[77px] mq450:text-xl">
            Phone
          </b>
        </button>
        <button className="cursor-pointer [border:none] py-[26.5px] px-5 bg-darkgray w-72 flex flex-row items-start justify-center box-border">
          <b className="w-[72px] relative text-6xl inline-block font-abel text-gray-100 text-center min-w-[72px] mq450:text-xl">
            Tablet
          </b>
        </button>
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[562px] max-w-full mq450:gap-[20px_40px] mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq750:flex-wrap">
            <button className="cursor-pointer [border:none] py-[26.5px] px-5 bg-darkgray flex-1 flex flex-row items-start justify-center box-border min-w-[151px]">
              <b className="w-[84px] relative text-6xl inline-block font-abel text-gray-100 text-center min-w-[84px] mq450:text-xl">
                Laptop
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[26.5px] px-5 bg-darkgray flex-1 flex flex-row items-start justify-center box-border min-w-[151px]">
              <b className="w-[101px] relative text-6xl inline-block font-abel text-gray-100 text-center min-w-[101px] mq450:text-xl">
                Earbuds
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[26.5px] px-[68.5px] bg-darkgray flex-[0.6089] flex flex-row items-start justify-start box-border min-w-[151px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <b className="flex-1 relative text-6xl font-abel text-gray-100 text-center mq450:text-xl">
                Headphones
              </b>
            </button>
          </div>
          <div className="w-72 flex flex-row items-start justify-start py-0 px-[7px] box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-17xl mq1050:text-29xl">
              Hot Picks
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-11xl">
        <div className="w-[359px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lg mq1050:text-5xl">
            Apple iPhone 14 Pro Max
          </h2>
          <div className="flex flex-row items-start justify-start py-0 px-[71px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button className="cursor-pointer [border:none] py-[15px] px-10 bg-darkgray rounded-3xs flex flex-row items-start justify-start whitespace-nowrap">
              <b className="w-[137px] relative text-6xl inline-block font-abel text-gray-200 text-center">
                Learn more
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
