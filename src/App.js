import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
const SearchResult = lazy(() => import("./components/SearchResults"));
const WatchPage = lazy(() => import("./components/WatchPage"));

// error - useNavigate() may be used only in the context of a <Router> component.
// for handling this error we need to put header into our approuter & hence we created Layout
const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
