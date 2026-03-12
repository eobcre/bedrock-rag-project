type AnswerProps = {
  answerData: string;
  active: boolean;
  error: boolean;
};

const LLMAnswer = ({ answerData, active, error }: AnswerProps) => {
  return (
    <div className="flex flex-col gap-1 border border-blue-400 bg-white rounded-sm overflow-y-auto p-3 h-full">
      <div className="flex items-center gap-2">
        {active && <span className="inline-block bg-green-500 rounded-full w-2 h-2"></span>}
        {error && <span className="inline-block bg-red-500 rounded-full w-2 h-2"></span>}
        <h1 className="font-bold">LLM Answer:</h1>
      </div>
      <p>{answerData}</p>
    </div>
  );
};

export default LLMAnswer;
