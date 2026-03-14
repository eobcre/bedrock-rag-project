type RetrievalProps = {
  retrievalData: any[];
  active: boolean;
  error: boolean;
};

const Retrieval = ({ retrievalData, active, error }: RetrievalProps) => {
  return (
    <div className="flex flex-col gap-1 border border-blue-400 bg-white rounded-sm overflow-y-auto p-4 h-full">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="text-gray-700 font-bold">Retrieval results</h1>
      </div>
      {retrievalData.map((chunk, index) => (
        <div key={index} className="bg-gray-100 rounded mb-2 p-2">
          <p>{chunk.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Retrieval;
