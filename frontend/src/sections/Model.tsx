type RagResponse = {
  ok: boolean;
  query: string;
  topK: number;
  totalLatency: number;
  answer: string;
  retrieveChunks: any[];
  retrieveChunksCount: number;
  sources: any[];
  model: string;
  embeddingModelArn: string;
  vectorStoreType: string;
};

type ModelProps = {
  modelData?: {
    model: string;
    embeddingModel: string;
    vectorStore: string;
  };
  active: boolean;
  error: boolean;
  ragData: RagResponse | null;
};

const Model = ({ modelData, active, error, ragData }: ModelProps) => {
  const items = [
    { id: 1, label: "Model Name", name: modelData?.model },
    { id: 2, label: "Embedding Model", name: modelData?.embeddingModel },
    { id: 3, label: "Vector Store Type", name: modelData?.vectorStore },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="text-gray-700 font-bold">Model</h1>
      </div>
      {ragData !== null ? (
        <>
          {items.map((item) => (
            <div key={item.id} className="text-gray-600 text-sm">
              <p className="font-semibold mb-2">{item.label}:</p>
              <p>{item.name}</p>
            </div>
          ))}
        </>
      ) : (
        <p className="col-span-2 text-gray-400 italic">Enter a query to see model info.</p>
      )}
    </div>
  );
};

export default Model;
