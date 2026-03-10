import { useState } from "react";
import Input from "./components/Input";
import Dropdown from "./components/DropDown";
import RetrivalPanel from "./components/RetrivalPanel";

const retrievalOptions = [
  { label: "Semantic", value: "semantic" },
  { label: "Keyword", value: "keyword" },
  { label: "Hybrid", value: "hybrid" },
];

const topKOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
];

const App = () => {
  const [retrieval, setRetrieval] = useState("");
  const [topK, setTopK] = useState("");

  return (
    <div className="grid grid-cols-3 grid-rows-[60px_1fr_1fr] gap-4 bg-gray-100 p-4 min-h-screen">
      {/* top */}
      <section className="col-span-3 flex items-center p-3">
        <div className="grid grid-cols-6 gap-3 w-full">
          <div className="col-span-3">
            <Input />
          </div>
          <Dropdown name="Retrival Options" value={retrieval} options={retrievalOptions} onChange={setRetrieval} />
          <Dropdown name="topK" value={topK} options={topKOptions} onChange={setTopK} />
          <button className="bg-blue-500 text-white rounded cursor-pointer hover:opacity-70 transition-all duration-300 ease-out">Send</button>
        </div>
      </section>

      {/* middle 1 */}
      <section className="col-span-2 section">
        <RetrivalPanel />
      </section>

      {/* middle 2 */}
      <section className="col-span-1 section">
        <div className="border border-blue-400 bg-white rounded-sm p-2 h-full">LLM Answer</div>
      </section>

      {/* bottom */}
      <section className="col-span-3 section">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bottom">Metrics</div>
          <div className="bottom">Model</div>
          <div className="bottom">Sources</div>
        </div>
      </section>
    </div>
  );
};

export default App;
