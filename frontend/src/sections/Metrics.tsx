type MetricsProps = {
  metricsData?: {
    topK?: number;
    retrieveChunksCount?: number;
    totalLatency?: number;
  };
  active: boolean;
  error: boolean;
};

const Metrics = ({ metricsData, active, error }: MetricsProps) => {
  const metrics = [
    { id: 1, label: "topK", value: metricsData?.topK },
    { id: 2, label: "Retrieved Chunks Count", value: metricsData?.retrieveChunksCount },
    { id: 3, label: "Total Latency", value: metricsData?.totalLatency },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="text-gray-700 font-bold mb-1">Metrics</h1>
      </div>
      <div className="flex flex-col gap-2">
        {metrics.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span className="text-gray-700 text-sm">{item.label}</span>
            <span className="text-gray-700 text-sm font-medium">
              {item.value}
              {item.label === "Total Latency" && item.value !== undefined && " ms"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
