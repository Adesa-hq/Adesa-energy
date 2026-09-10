import Image from "next/image";

export default function BrandMarkLoader({ label = "Loading Adesa Energy" }) {
  return (
    <div className="brand-loader" role="status" aria-label={label}>
      <div className="brand-loader__mark" aria-hidden="true">
        <span className="brand-loader__ring brand-loader__ring--outer" />
        <span className="brand-loader__ring brand-loader__ring--inner" />
        <Image
          src="/adesa-energy.png"
          alt=""
          width={88}
          height={88}
          priority
          className="brand-loader__logo"
        />
      </div>
      <div className="brand-loader__copy">
        <span>Adesa Energy</span>
        <small>Powering progress</small>
      </div>
    </div>
  );
}

