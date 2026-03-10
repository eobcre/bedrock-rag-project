type ModelProps = {
  modelData: string;
};

const Model = ({ modelData }: ModelProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold">Model:</h1>
      <p>{modelData}</p>
    </div>
  );
};

export default Model;
