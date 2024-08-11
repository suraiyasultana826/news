import { getCurrentDate } from "@/utilis/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
    const currentDate = getCurrentDate();
    return (
       <Box className='py-5'>
        <Container>
        <Typography variant='body2' color="gray" textAlign='center'>
        Journalism Without Fear or Favour
          </Typography>
        <Typography  textAlign='center'>
       {currentDate}
          </Typography>
        </Container>
       </Box>
    );
};

export default Header;