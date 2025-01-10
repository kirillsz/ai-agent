import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container mx-auto h-full h-svh flex flex-col items-center justify-between pb-8">
      <Header />
      <img
        className="w-full max-w-48 lg:max-w-64 "
        src="/agents/trinity.webp"
        alt="Agent image"
      />
      <Footer />
    </div>
  );
}

export default App;
