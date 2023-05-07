import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Components from './Components/index';

const routes = [
    {
        path: 'dashboard', element: Components.Users,
    }, {
        path: '/', element: Components.Home,
    }
]
export const router = createBrowserRouter(
    createRoutesFromElements(
        // https://reactrouter.com/en/main/routers/create-browser-router
        <>
            {routes.map(({ path, element }) => {
                const E = element;
                return <Route key={path} path={path} element={<E />} />
            })}
        </>
    )
);
export default router