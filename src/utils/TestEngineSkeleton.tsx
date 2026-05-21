const SkeletonBar = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
);

const SkeletonOption = () => (
  <div className="p-3 rounded-md border border-[#EFEFEF] flex flex-row items-center">
    <div className="h-8 w-8 pr-3 mr-3 border-r border-[#E0E0E0] flex items-center justify-center">
      <SkeletonBar className="h-5 w-5 rounded-full" />
    </div>
    <div className="flex flex-col gap-2 flex-1">
      <SkeletonBar className="h-4 w-3/4" />
      <SkeletonBar className="h-3 w-1/2" />
    </div>
    <SkeletonBar className="h-7 w-7 rounded-full" />
  </div>
);

const TestEngineSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <section className="flex flex-row gap-3 items-center">
        <SkeletonBar className="h-7 w-7 rounded-full" />
        <div className="flex flex-col pl-3 border-l border-[#CBCBCB] flex-1 gap-2">
          <SkeletonBar className="h-4 w-1/2" />
          <SkeletonBar className="h-3 w-1/3" />
        </div>
        <div className="flex gap-3 items-center">
          <SkeletonBar className="h-6 w-6 rounded" />
          <SkeletonBar className="h-6 w-6 rounded" />
        </div>
      </section>

      <div className="flex flex-col gap-2 mt-2">
        <SkeletonBar className="h-4 w-full" />
        <SkeletonBar className="h-4 w-11/12" />
        <SkeletonBar className="h-4 w-10/12" />
        <SkeletonBar className="h-4 w-9/12" />
      </div>

      <SkeletonBar className="h-40 w-2/3 mx-auto my-3 rounded-lg" />

      <div className="flex flex-col gap-3">
        <SkeletonOption />
        <SkeletonOption />
        <SkeletonOption />
        <SkeletonOption />
      </div>
    </div>
  );
};

export default TestEngineSkeleton;
