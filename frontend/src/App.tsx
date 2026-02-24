import Input from './components/Input';
import RetrivalPanel from './components/RetrivalPanel';

const App = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-[60px_1fr_1fr] gap-4 bg-gray-100 p-4 min-h-screen'>
      {/* top */}
      <section className='col-span-3 flex items-center p-3'>
        <div className='grid grid-cols-6 gap-3 w-full'>
          <div className='col-span-3'>
            <Input />
          </div>
          <div className='top'>Options</div>
          <div className='top'>topK</div>
          <div className='top'>Send</div>
        </div>
      </section>

      {/* middle 1 */}
      <section className='col-span-2 section'>
        <RetrivalPanel />
      </section>

      {/* middle 2 */}
      <section className='col-span-1 section'>
        <div className='border border-blue-400 bg-white rounded-sm p-2 h-full'>LLM Answer</div>
      </section>

      {/* bottom */}
      <section className='col-span-3 section'>
        <div className='grid grid-cols-3 gap-3 h-full'>
          <div className='bottom'>Metrics</div>
          <div className='bottom'>Model</div>
          <div className='bottom'>Sources</div>
        </div>
      </section>
    </div>
  );
};

export default App;
