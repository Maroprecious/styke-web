export const Footer = () => {
  return (
    <div className="w-full bg-blue h-full lg:px-20 md:px-10 px-8 lg:py-16 py-8">
      <img
        src="/assets/svg/logo2.svg"
        className="lg:w-[13rem] lg:h-[5rem] w-[11rem] h-[4rem] object-center object-cover"
      />
      <div className="w-full gap-[6%] flex lg:flex-row flex-col">
        <div className="lg:w-[25%]  md:w-[50%] w-[75%]">
          <p className="lg:text-[20px] text-[17px] text-white font-semibold">
            Address:
          </p>
          <p className="lg:text-[20px] text-[17px] text-white font-normal">
            {" "}
            999, My address, street, Lagos State, Nigeria.
          </p>
          <div className="flex gap-[.8rem] pt-4">
            <img
              src="/assets/svg/twitter.svg"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            <img
              src="/assets/svg/insta.svg"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            <img
              src="/assets/svg/facebook.svg"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        </div>
        <div className="lg:w-[70%] w-full md:mt-8 lg:mt-0 mt-6">
          <div className="w-full flex lg:flex-row md:flex-row flex-col items-center justify-start gap-[1.5%]">
            <input
              className="lg:w-[70%] md:w-[70%] w-full bg-white h-[44px] md:h-[60px] lg:h-[72px] p-4 rounded-[.5rem] border-0 outline-none"
              type="text"
              name=""
              placeholder="Email Address"
            />
            <button className="lg:w-[28%] mt-2 lg:mt-0 w-[60%] ml-[-40%] lg:ml-0 px-8 bg-red rounded-[.5rem] text-white h-[44px] md:h-[60px] lg:h-[72px] font-normal">
              Subscribe Now
            </button>
          </div>
          <div className="flex lg:justify-end justify-start items-center lg:ml-0 lg:mt-[-1.2rem] gap-[-.9rem]">
            <img
              src="/assets/svg/playstore.svg"
              className="lg:w-[13rem] lg:h-[8rem] w-[8rem] h-[4rem]"
            />
            <img
              src="/assets/svg/appstore.svg"
              className="lg:w-[13rem] lg:h-[8rem] w-[8rem] h-[4rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2">
        <img src="/assets/svg/copyright.svg" className="w-[1rem] lg:w-[1.5rem]" />
        <p className="text-white lg:text-[19px] text-[12px]">
          2023 by Styke. All right reserved!
        </p>
      </div>
    </div>
  );
};
