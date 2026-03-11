import { useState } from "react";

import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import RetrievalSection from "./sections/Retrieval";
import LLMAnswerSection from "./sections/LLMAnswer";
import Model from "./sections/Model";
import Sources from "./sections/Sources";

const topKOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
];

type RagResponse = {
  ok: boolean;
  query: string;
  topK: number;
  answer: string;
  retrieveChunks: any[];
  sources: any[];
  model: string;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState("");
  const [ragData, setRagData] = useState<RagResponse | null>(null);

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
    } catch (err) {
      console.error(err);
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
        <RetrievalSection retrievalData={ragData?.retrieveChunks ?? []} />
      </section>

      {/* middle 2 */}
      <section className="col-span-1 section overflow-scroll">
        <LLMAnswerSection answerData={ragData?.answer ?? ""} />
      </section>

      {/* bottom */}
      <section className="col-span-3 section">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bottom">Metrics</div>
          <div className="bottom">
            <Model modelData={ragData?.model ?? ""} />
          </div>
          <div className="bottom">
            <Sources srcData={ragData?.sources ?? []} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
