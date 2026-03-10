type RetrievalProps = {
  retrievalData: any[];
};

const Retrieval = ({ retrievalData }: RetrievalProps) => {
  return (
    <div className="flex flex-col gap-1 border border-blue-400 bg-white rounded-sm overflow-y-auto p-2 h-full">
      <h1 className="font-bold">Retrieval results:</h1>
      {retrievalData.map((chunk, index) => (
        <div key={index} className="bg-gray-100 rounded mb-2 p-2">
          <p>{chunk.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Retrieval;
