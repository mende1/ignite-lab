export function LoadingCard() {
  return (
    <div className="flex flex-col motion-safe:animate-pulse gap-1">
      <div className="h-4 w-10/12 rounded-md bg-gray-600"></div>
      <div className="rounded border mt-2 p-4 border-gray-500">
        <header className="flex flex-col gap-4">
          <div className="h-6 w-12/12 rounded-md bg-gray-600"></div>
          <div className="h-6 w-10/12 rounded-md bg-gray-600"></div>
        </header>
      </div>
    </div>
  );
}
