import { Container, Stack, Typography } from "@mui/material";
import PaymentMethods from "./paymentMethods/PaymentMethods";

function Deposit() {
    return (
        <Stack>
            <Container>
                <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"} mt={"2rem"} mb={"1rem"}>Deposit</Typography>
                <PaymentMethods />
            </Container>
        </Stack>
    )
}

export default Deposit;