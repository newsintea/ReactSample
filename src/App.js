import { RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import router from './router';

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
