import { useRoutes, Link } from "react-router-dom";

import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";

const Header = () => {
  return (
    <header
      className="hero-section bg-cover bg-center bg-no-repeat bg-[url(/images/aHjt.webp)]"
      data-oid="bdsdnqq"
    >
      <h1 className="text-center text-[#050607]" data-oid="7buwny8">
        CREATORVERSE
      </h1>
      <div
        className="header-buttons flex-row flex justify-center m-[10px]"
        data-oid="3qc6:bb"
      >
        <Link to="/creators" data-oid="ovqe5g.">
          <button
            className="m-[10px] w-[400px] text-[#191919]"
            data-oid="g488al8"
          >
            VIEW ALL CREATORS
          </button>
        </Link>
        <Link to="/add" data-oid="ctc85ik">
          <button
            className="w-[400px] m-[10px] text-[#191919]"
            data-oid="x_5nz6z"
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
          data-oid="30c1.gk"
        >
          {/* Stacking the Lego pieces! */}
          <Header data-oid="589u8va" />
          <ShowCreators data-oid="x979:-8" />
        </div>
      ),
    },
    {
      path: "/creators",
      element: <ShowCreators data-oid="5roq.4m" />,
    },
    {
      path: "/add",
      element: <AddCreator data-oid="qpof9i-" />,
    },
    {
      path: "/view/:id", // The :id is the "Net" waiting to catch a number
      element: <ViewCreator data-oid="3mukgh_" />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator data-oid="2xl:3bh" />,
    },
  ]);

  // This simply draws whatever the Map decides is the right page
  return (
    <div className="App bg-[#00000000] bg-none" data-oid=":5kso2a">
      {routing}
    </div>
  );
};

export default App;
