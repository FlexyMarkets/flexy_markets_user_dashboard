import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Icon } from '@iconify/react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const demoAccountDetailsData = {
    "Actual leverage": "1:200 (max 1:200)",
    "Free margin": "10,001.91 USD",
    "Unrealized P&L": "0.00 USD",
    "Equity": "10,001.91 USD"
}

export const demoAccountDetailsID = [
    {
        type: "Server",
        id: "Exness-MT5Trial6",
        icon: <ContentCopyIcon fontSize={"14px"} />
    },
    {
        type: "MT5 login",
        id: "239177571",
        icon: <ContentCopyIcon fontSize={"14px"} />
    }
]

export const totalAmountAndButtons = [
    {
        total: "10,001"
    },
    {
        buttons: [
            {
                name: "Trade",
                icon: <Icon icon="material-symbols-light:candlestick-chart-outline-rounded" />,
                modal: true
            },
            {
                name: "Set Balance",
                icon: <ArrowCircleDownIcon />,
                modal: true
            },
            {
                icon: <MoreVertIcon />,
                // modal: true
            }
        ]
    }
]