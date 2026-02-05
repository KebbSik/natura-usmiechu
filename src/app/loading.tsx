import LoadingMark from "./components/svgs/LoadingMark";
import Logo from "./components/svgs/Logo";
import Mark from "./components/svgs/Mark";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <LoadingMark />
    </div>
  );
}
