import { useRoutes, Link } from 'react-router-dom';

import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';

const Header = () => {
    return (
        <header className="hero-section">
            <h1>CREATORVERSE</h1>
            <div className="header-buttons">
                <Link to="/creators"><button>VIEW ALL CREATORS</button></Link>
                <Link to="/add"><button>ADD A CREATOR</button></Link>
            </div>
        </header>
    );
};

const App = () => {
    const routing = useRoutes([
        {
            path: "/", 
            element: (
                <div>
                    {/* Stacking the Lego pieces! */}
                    <Header /> 
                    <ShowCreators />
                </div>
            )
        },
        {
            path: "/creators",
            element: <ShowCreators /> 
        },
        {
            path: "/add",
            element: <AddCreator />
        },
        {
            path: "/view/:id", // The :id is the "Net" waiting to catch a number
            element: <ViewCreator />
        },
        {
            path: "/edit/:id",
            element: <EditCreator />
        }
    ]);

    // This simply draws whatever the Map decides is the right page
    return (
        <div className="App">
            {routing}
        </div>
    );
};

export default App;