import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full px-2 overflow-hidden min-h-screen flex items-center flex-col relative z-10">
      <Skeleton className="w-full h-20 border border-[var(--ring)]" />

      <div className="w-full p-2 px-4 flex justify-center items-center relative">
        <Skeleton className="p-10 rounded-full border-2 border-[var(--ring)]" />
        <div className="w-full gap-y-2 flex justify-center items-center flex-col relative">
          <Skeleton className="w-full h-10 border-2 border-[var(--ring)]" />
          <Skeleton className="w-full h-10 border-2 border-[var(--ring)]" />
        </div>
      </div>
      <div className="w-full p-2 px-4 flex justify-center items-center relative">
        <div className="w-full gap-y-2 flex justify-center items-center flex-col relative">
          <Skeleton className="w-full h-10 border-2 border-[var(--ring)]" />
          <Skeleton className="w-full h-10 border-2 border-[var(--ring)]" />
        </div>
        <Skeleton className="p-10 rounded-full border-2 border-[var(--ring)]" />
      </div>

      <div className="w-full p-2 px-4 flex justify-between items-center relative">
        <Skeleton className="px-20 h-80 border-2 border-[var(--ring)]" />
        <div className="w-full gap-y-2 flex justify-center items-center flex-col">
          <Skeleton className="p-20 border-2 border-[var(--ring)]" />
          <Skeleton className="p-20 border-2 border-[var(--ring)]" />
        </div>
      </div>

      <Skeleton className="w-full py-10 border border-[var(--ring)]" />
      <Skeleton className="w-full my-2 py-10 border border-[var(--ring)]" />
    </div>
  );
};

export default Loading;
