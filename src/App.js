import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <ProductContextProvider>

      <Navbar />
      <MainRoutes />
      </ProductContextProvider>
    </>
  );
}

export default App;
