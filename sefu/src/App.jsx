import Navbar from "./components/Navbar"; 

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 max-w-md bg-white rounded-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800">Website in Progress</h1>
          <p className="mt-4 text-gray-500">
            We're working hard to bring you an amazing experience. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
