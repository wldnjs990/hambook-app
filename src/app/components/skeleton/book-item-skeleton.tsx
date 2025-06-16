export default function BookItemSkeleton() {
  return (
    <>
      <div className="flex w-full gap-4 border-b-slate-200 px-2.5 py-5">
        <div className="w-1/5 h-[146px] bg-gray-200" />
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full h-12 bg-gray-200"></div>
          <div className="w-full h-6 bg-gray-200"></div>
          <br />
          <div className="text-gray-500"></div>
        </div>
      </div>
    </>
  );
}
