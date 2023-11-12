import Homepage from "./Pages/Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from "./app/store";
import YourWishesPage from './Pages/yourWishesPage';
import AboutPage from "./Pages/AboutPage";
import EditPage from "./Pages/EditPage";
//routing

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/read",
    element: <YourWishesPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
])

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
