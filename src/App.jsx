import { useRoutes, Link } from "react-router-dom";

import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";

const Header = () => {
  return (
    <header
      className="hero-section bg-cover bg-center bg-no-repeat bg-[url(/images/aHjt.webp)]"
      data-oid="9l3l8hz"
    >
      <h1 className="text-center text-[#050607]" data-oid="o:13-dz">
        CREATORVERSE
      </h1>
      <div
        className="header-buttons flex-row flex justify-center m-[10px]"
        data-oid="h1wd7z2"
      >
        <Link to="/creators" data-oid="8.cl6ze">
          <button
            className="m-[10px] w-[400px] text-[#191919]"
            data-oid="r78tml-"
          >
            VIEW ALL CREATORS
          </button>
        </Link>
        <Link to="/add" data-oid="-ym73lr">
          <button
            className="w-[400px] m-[10px] text-[#191919]"
            data-oid="i6fi2wu"
          >
            ADD A CREATOR
          </button>
        </Link>
      </div>
    </header>
  );
};

const App = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: (
        <div
          className="bg-cover bg-center bg-no-repeat bg-none"
          data-oid="huhrx3j"
        >
          {/* Stacking the Lego pieces! */}
          <Header data-oid="u11.tl5" />
          <ShowCreators data-oid="xzbh_7j" />
        </div>
      ),
    },
    {
      path: "/creators",
      element: <ShowCreators data-oid="c6hw8k4" />,
    },
    {
      path: "/add",
      element: <AddCreator data-oid="vt95ek3" />,
    },
    {
      path: "/view/:id", // The :id is the "Net" waiting to catch a number
      element: <ViewCreator data-oid=":qazcp6" />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator data-oid="n-m0lzr" />,
    },
  ]);

  // This simply draws whatever the Map decides is the right page
  return (
    <div className="App bg-[#00000000] bg-none" data-oid="s6.97da">
      {routing}
    </div>
  );
};

export default App;
