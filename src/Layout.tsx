import Header from './component/RCMP_Header/Header';
import { Outlet } from 'react-router-dom';
import Navigation from './component/RCMP_Navigation/Navigation';
import NavigationBottom from './component/RCMP_Navigation_Bottom/NavigationBottom';

const Layout = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex grow ">
                <Navigation />
                <NavigationBottom />
                <main className="flex-grow p-2 *:shadow *:rounded-md *:h-full *:p-2 *:ps-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;

