import { useState } from "react";

import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import RetrievalSection from "./sections/Retrieval";
import LLMAnswerSection from "./sections/LLMAnswer";
import Metrics from "./sections/Metrics";
import Model from "./sections/Model";
import Sources from "./sections/Sources";

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
};

const App = () => {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState("");
  const [ragData, setRagData] = useState<RagResponse | null>(null);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const topKOptions = [
    { label: "3", value: 3 },
    { label: "5", value: 5 },
    { label: "10", value: 10 },
  ];

  const API = import.meta.env.VITE_API_URL;

  // send
  const handleSendRag = async () => {
    // console.log(query, retrieval, topK);

    try {
      const res = await fetch(`${API}/api/rag`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          topK: Number(topK),
        }),
      });

      const data = await res.json();
      // console.log("data:", data);
      setRagData(data);
      setActive(true);
      setError(false);
    } catch (err) {
      console.error(err);
      setActive(false);
      setError(true);
    }
  };

  return (
    <div className="grid grid-cols-3 grid-rows-[60px_1fr_1fr] gap-4 bg-gray-100 p-4 h-screen">
      {/* top */}
      <section className="col-span-3 flex items-center p-3">
        <div className="grid grid-cols-5 gap-3 w-full">
          <div className="col-span-3">
            <Input query={query} onChange={setQuery} />
          </div>
          <Dropdown name="topK" value={topK} options={topKOptions} onChange={setTopK} />
          <button onClick={handleSendRag} className="bg-blue-500 text-white rounded cursor-pointer hover:opacity-70 transition-all duration-300 ease-out">
            Send
          </button>
        </div>
      </section>

      {/* middle 1 */}
      <section className="col-span-2 section overflow-scroll">
        <RetrievalSection retrievalData={ragData?.retrieveChunks ?? []} active={active} error={error} />
      </section>

      {/* middle 2 */}
      <section className="col-span-1 section overflow-scroll">
        <LLMAnswerSection answerData={ragData?.answer ?? ""} active={active} error={error} />
      </section>

      {/* bottom */}
      <section className="col-span-3 section">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bottom">
            <Metrics
              metricsData={{
                topK: ragData?.topK,
                retrieveChunksCount: ragData?.retrieveChunksCount,
                totalLatency: ragData?.totalLatency,
              }}
              active={active}
              error={error}
            />
          </div>
          <div className="bottom">
            <Model modelData={ragData?.model ?? ""} active={active} error={error} />
          </div>
          <div className="bottom">
            <Sources srcData={ragData?.sources ?? []} active={active} error={error} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
