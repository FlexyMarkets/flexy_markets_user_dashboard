import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Icon } from '@iconify/react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const realAccountDetailsData = {
    "Actual leverage": "1:200 (max 1:200)",
    "Free margin": "0.00 USD",
    "Unrealized P&L": "0.00 USD",
    "Equity": "0.00 USD"
}

export const realAccountDetailsID = [
    {
        type: "Server",
        id: "FlexyMarkets-MT5Real8",
        icon: <ContentCopyIcon fontSize={"14px"} />
    },
    {
        type: "MT5 login",
        id: "404714946",
        icon: <ContentCopyIcon fontSize={"14px"} />
    }
]

export const totalAmountAndButtons = [
    {
        total: "0"
    },
    {
        buttons: [
            {
                name: "Trade",
                icon: <Icon icon="material-symbols-light:candlestick-chart-outline-rounded" />,
                modal: true
            },
            {
                name: "Deposit",
                icon: <ArrowCircleDownIcon />,
                modal: false
            },
            {
                name: "Withdraw",
                icon: <ArrowCircleDownIcon />,
                modal: false
            },
            {
                icon: <MoreVertIcon />
            }
        ]
    }
]