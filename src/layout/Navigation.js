import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from '@iconify/react';

export const NAVIGATION = [
    {
        segment: '/',
        title: 'My accounts',
        icon: <DashboardIcon />,
    },
    {
        segment: 'deposit',
        title: 'Deposit',
        icon: <DashboardIcon />,
    },
    {
        segment: 'withdrawal',
        title: 'Withdrawal',
        icon: <DashboardIcon />,
    },
    {
        segment: 'transactionHistory',
        title: 'Transaction history',
        icon: <DashboardIcon />,
    },
];