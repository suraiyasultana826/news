import { getSingleNews } from "@/utilis/getSingleNews";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
    const { data:news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <Image src={news.thumbnail_url} width={800} height={500} alt="thumbnail"></Image>
                    </Grid>
                    <Grid item lg={6}>
                       <h1>detail</h1>
                    </Grid>
                  
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;