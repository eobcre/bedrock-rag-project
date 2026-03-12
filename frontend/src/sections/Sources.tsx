type SourceProps = {
  srcData: any[];
  active: boolean;
  error: boolean;
};

const Sources = ({ srcData, active, error }: SourceProps) => {
  const uri = srcData[0]?.s3Location?.uri;

  return (
    <div className="flex flex-col gap-1 break-all">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="font-bold">Sources:</h1>
      </div>
      <p>{uri}</p>
    </div>
  );
};

export default Sources;
