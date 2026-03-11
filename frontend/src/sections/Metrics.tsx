type MetricsProps = {
  metricsData?: {
    topK?: number;
    retrieveChunksCount?: number;
  };
};

const Metrics = ({ metricsData }: MetricsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold">Metrics:</h1>
      <p>topK: {metricsData?.topK}</p>
      <p>Retrieved Chunks Count: {metricsData?.retrieveChunksCount}</p>
    </div>
  );
};

export default Metrics;
