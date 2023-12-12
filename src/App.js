import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
const SearchResult = lazy(() => import("./components/SearchResults"));
const WatchPage = lazy(() => import("./components/WatchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
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
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
