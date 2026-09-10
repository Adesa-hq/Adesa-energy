import BrandMarkLoader from "@/components/BrandMarkLoader";

export default function Loading() {
  return (
    <div className="route-loader" aria-live="polite" aria-busy="true">
      <BrandMarkLoader />
    </div>
  );
}
