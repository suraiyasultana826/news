import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import news from '@/assets/news.jpg';
import Image from 'next/image';
import tech from '@/assets/technology.jpg'
import { getAllNews } from '@/utilis/getAllNews';
const LatestNews = async () => {
    const { data} = await getAllNews();
    // console.log(data);
    return (

        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={data[0].thumbnail_url} height={500} alt='news' width={800} />
                </CardMedia>
                <CardContent>
                    <p className='
        w-[100px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>{data[0].category}</p>
                    <Typography gutterBottom variant="h5" component="div">
                       {data[0].title}
                    </Typography>
                    <Typography className='my-3' gutterBottom>
                        By {data[0].author.name} - {data[0].author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {data[0].details.length>200? data[0].details.slice(0,200) +"..." : data[0].details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {
                data.slice(0,4).map((news) =>(
                    <Grid key={news.id} item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={news.thumbnail_url} alt='news' height={500} width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='
        w-[100px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>{news.category}</p>
                            <Typography gutterBottom variant="h5" component="div">
                               {news.title}
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))
              }
               

            </Grid>

        </Box>

    );
};

export default LatestNews;