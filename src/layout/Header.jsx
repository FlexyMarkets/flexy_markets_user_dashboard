import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './Navigation';
import { useState, useMemo } from 'react';
import MyAccount from '../pages/myAccount/MyAccount';
import { useMediaQuery } from '@mui/material';
import Footer from './Footer';

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DashboardLayoutAccountSidebar() {

    const [pathname, setPathname] = useState('/dashboard');

    const isMobile = useMediaQuery('(max-width:900px)');

    const router = useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return (
        <AppProvider
            branding={{
                title: "",
                logo: <img src="/logo512.png" alt="My Logo" />,
            }}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
        // window={demoWindow}
        //   authentication={authentication}
        //   session={session}
        >
            <DashboardLayout
                sidebarExpandedWidth={290}
            >
                {/* <DemoPageContent pathname={pathname} /> */}
                <MyAccount />
                <Footer />
            </DashboardLayout>
        </AppProvider >
    );
}

export default DashboardLayoutAccountSidebar;