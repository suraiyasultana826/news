import { getSingleNews } from "@/utilis/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
    const { data:news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box className='my-5'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <Image src={news.thumbnail_url} width={800} height={500} alt="thumbnail"></Image>
                      <Grid container spacing={2} className="mt-2">
                    <Grid item lg={6} >
                      <Image src={news.image_url} width={800} height={500} alt="thumbnail"></Image>
                      
                    </Grid>
                    <Grid item lg={6}>
                    <Image src={news.image_url} width={800} height={500} alt="thumbnail"></Image>
                    </Grid>
                  
                </Grid>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography variant="h5" component='h2'>{news.title}</Typography>
                      <Box sx={{
                        display:'flex',
                        gap:'3',
                        alignItems:'center',
                      }}>
                      <Avatar alt="author" src={news.author.img}/>
                      <Typography className="mr-2">By {news.author.name}  </Typography>
                      <Typography > Published {news.author.published_date}</Typography>
                      </Box>
                      <Typography style={{
                        textAlign:'justify',
                        whiteSpace:'pre-line',
                        margin:'10px 0px',
                        color:"gray",
                      }} >{news.details}</Typography>
                    </Grid>
                  
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;