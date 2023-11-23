import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </>
  );
};
export default App;
