import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <AuthContextProvider>

      <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
      </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
