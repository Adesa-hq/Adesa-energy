import Image from "next/image";

export default function AdesaLogoWithSlogan() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center space-x-3 mb-6">
      <div>
        <Image
          src="/adesa-energy.png"
          alt="Adesa Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center -ml-3">
        <p className="text-[#59C6E5] text-sm font-inter">Powering Progress,</p>
        <p className="text-[#59C6E5] text-sm font-inter">Fueling tomorrow</p>
        <p className="text-burnt-orange text-[11px] font-medium tracking-wide uppercase mt-1">A subsidiary of Adesa HQ</p>
      </div>
    </div>
  );
}
