import LoadingMark from "./src/app/components/svgs/LoadingMark";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <LoadingMark />
    </div>
  );
}
