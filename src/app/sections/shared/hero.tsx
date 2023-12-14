import flipkartLogo from "../../../../public/images/flipkart.svg";
import amazonLogo from "../../../../public/images/amazon.svg";
import shoeImage from "../../../../public/images/shoe-image.svg";

export default function Hero() {
  return (
    <>
      <div className="h-[30rem] my-20 mx-48">
        <div className="flex">
          <div className="flex-1 h-full">
            <div className="inline-flex flex-col items-start gap-[36px] relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-black text-[108px] tracking-[0] leading-[102px]">
                YOUR FEET <br />
                DESERVE
                <br />
                THE BEST
              </div>
              <p className="relative w-[404px] h-[91px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-gray text-[16px] tracking-[0] leading-[normal]">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] relative flex-[0_0_auto] bg-[#d01c28] all-[unset] box-border">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff] text-[24px] tracking-[0] leading-[normal]">
                    Shop Now
                  </div>
                </button>
                <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] relative flex-[0_0_auto] border border-solid border-black all-[unset] box-border">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray text-[24px] tracking-[0] leading-[normal]">
                    Category
                  </div>
                </button>
              </div>
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Also Available On
                </div>
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[32px] h-[32px]"
                    alt="Flipkart"
                    src={flipkartLogo.src}
                  />
                  <img
                    className="relative w-[32px] h-[32px]"
                    alt="Amazon"
                    src={amazonLogo.src}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full w-[530px]">
            <img
              className="w-[586px] h-[543px] my-10"
              alt="Shoe image"
              src={shoeImage.src}
            />
          </div>
        </div>
      </div>
    </>
  );
}
