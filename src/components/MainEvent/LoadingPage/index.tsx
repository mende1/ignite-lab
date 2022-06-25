export function LoadingPage() {
  return (
    <div className="flex flex-col flex-1 gap-1 motion-safe:animate-pulse">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[60vw] max-h-[60vh] bg-gray-700 aspect-video"></div>
      </div>
      <div className="flex mt-4 p-4 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-4 w-[60vw]">
          <div className="h-6 w-7/12 rounded-md bg-gray-600"></div>
          <div className="h-6 w-5/12 rounded-md bg-gray-600"></div>
          <div className="flex items-center gap-10">
            <div className="rounded-full bg-gray-600 h-16 w-16 mt-4"></div>
            <div className="flex flex-col flex-1 gap-3 mt-4">
              <div className="flex flex-col gap-3">
                <div className="h-6 w-3/12 rounded-md bg-gray-600"></div>
                <div className="h-6 w-2/12 rounded-md bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
