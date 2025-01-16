// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import { Icon } from '@iconify/react';
// import { Stack } from '@mui/material';

// const pages = ['tabler:wallet', 'famicons:globe-outline', 'octicon:question-24', 'mage:notification-bell', 'icon-park-outline:application-menu', 'iconoir:profile-circle'];

// function Header() {

//     return (
//         <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none", borderBottom: "1px solid black" }}>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Stack sx={{ display: { xs: 'none', md: 'flex' }, width: "5rem" }}>
//                         <img src='./logo512.png' alt='error' style={{ width: "100%" }} />
//                     </Stack>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <Icon
//                             icon="heroicons-outline:menu-alt-1"
//                             width="24"
//                             height="24"
//                             style={{ color: 'black', cursor: 'pointer' }}
//                         />
//                         <Menu
//                             id="menu-appbar"
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page}>
//                                     <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <Stack sx={{ display: { xs: 'flex', md: 'none' }, width: "5rem" }}>
//                         <img src='./logo512.png' alt='error' style={{ width: "100%" }} />
//                     </Stack>
//                     <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "1.5rem", justifyContent: "flex-end", width: "100%" }}>
//                         {pages.map((page) => (
//                             <Icon
//                                 icon={page}
//                                 width="20"
//                                 height="20"
//                                 style={{ color: 'black', cursor: 'pointer' }}
//                             />
//                         ))}
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// export default Header;


import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './Navigation';
import { useState, useMemo } from 'react';
import MyAccount from '../pages/myAccount/MyAccount';
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
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DashboardLayoutAccountSidebar() {

    const [pathname, setPathname] = useState('/dashboard');

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
            <DashboardLayout>
                {/* <DemoPageContent pathname={pathname} /> */}
                <MyAccount />
                <Footer />
            </DashboardLayout>
        </AppProvider>
    );
}

export default DashboardLayoutAccountSidebar;