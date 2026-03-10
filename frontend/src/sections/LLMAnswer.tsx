type AnswerProps = {
  answerData: string;
};

const LLMAnswer = ({ answerData }: AnswerProps) => {
  return (
    <div className="flex flex-col gap-1 border border-blue-400 bg-white rounded-sm overflow-y-auto p-2 h-full">
      <h1 className="font-bold">LLM Answer:</h1>
      <p>{answerData}</p>
    </div>
  );
};

export default LLMAnswer;
