import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="self-stretch h-[94px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-between py-0 pr-[100px] pl-[73px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-lg text-white font-abel mq450:pr-5 mq450:box-border mq750:pl-9 mq750:pr-[50px] mq750:box-border">
      <img
        className="h-[94px] w-24 relative object-cover"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className="h-[63px] w-[808px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-full mq1050:w-0">
        <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px] mq1050:hidden">
          <div className="w-[66px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[66px]">
              Phones
            </b>
          </div>
          <div className="w-[62px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[62px]">
              Tablets
            </b>
          </div>
          <div className="w-[71px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[71px]">
              Laptops
            </b>
          </div>
          <div className="w-[73px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[73px]">
              Earbuds
            </b>
          </div>
          <div className="w-[109px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative">Headphones</b>
          </div>
          <div className="w-[53px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[53px]">
              About
            </b>
          </div>
          <div className="w-[68px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <b className="self-stretch relative inline-block min-w-[68px]">
              Contact
            </b>
          </div>
          <div className="h-[30px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="w-9 h-[29px] relative"
              loading="lazy"
              alt=""
              src="/cart.svg"
            />
          </div>
          <img
            className="h-8 w-[30px] relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/profile.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
