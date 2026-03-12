type MetricsProps = {
  metricsData?: {
    topK?: number;
    retrieveChunksCount?: number;
  };
};

const Metrics = ({ metricsData }: MetricsProps) => {
  const metrics = [
    { id: 1, label: "topK", value: metricsData?.topK },
    { id: 2, label: "Retrieved Chunks Count", value: metricsData?.retrieveChunksCount },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">Metrics:</h1>
      {metrics.map((item) => (
        <div key={item.id} className="border-b-2 border-gray-100">
          <span className="text-sm font-bold mr-2">{item.label}:</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
