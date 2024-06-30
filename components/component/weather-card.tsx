export function WeatherCard({ response, name }: any) {
  return (
    <div className="bg-background rounded-lg border p-6 mt-6 w-full max-w-md flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-7xl md:text-8xl font-bold">{response.slice(0, 3)}°C</div>
          <div className="flex flex-col">
            <div className="text-2xl font-medium">{response.slice(3)}</div>
            <div className="text-sm text-muted-foreground">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
