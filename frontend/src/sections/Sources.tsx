type SourceProps = {
  srcData: any[];
};

const Sources = ({ srcData }: SourceProps) => {
  const uri = srcData[0]?.s3Location?.uri;

  return (
    <div className="flex flex-col gap-1 overflow-y-auto">
      <h1 className="font-bold">Sources:</h1>
      <p>{uri}</p>
    </div>
  );
};

export default Sources;
