type ModelProps = {
  modelData: string;
  active: boolean;
  error: boolean;
};

const Model = ({ modelData, active, error }: ModelProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="font-bold">Model:</h1>
      </div>
      <p>{modelData}</p>
    </div>
  );
};

export default Model;
