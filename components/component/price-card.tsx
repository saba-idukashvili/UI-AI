export function PriceCard({ price, name }: any) {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-md flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-lg font-bold text-center">{name} Price</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold text-primary">{price}</div>
      </div>
    </div>
  );
}
