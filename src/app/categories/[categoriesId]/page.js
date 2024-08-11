import { getCategoryNews } from "@/utilis/getCategoryNews";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid,  Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({params,searchParams}) => {
    // console.log(searchParams);
    const {data} = await getCategoryNews(searchParams.category);
    console.log(data);
    return (
        <div className="my-5">
         <h1>Total <span className="font-bold">{searchParams.category} </span> news {data.length}</h1>   
         <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               {
                data.map ((news) => (
                    <Grid key={news.id} item xs={6}>
                  <Link href={`/${news.category}/${news._id}`}>
                  <Card>
                        <CardMedia 
                        sx={{
                            "& img":{
                                width:"100%",
                                height:"250px",
                            }
                        }}
                        >
                            <Image src={news.thumbnail_url} alt='news' width={800} height={100} />
                        </CardMedia>
                        <CardContent>
                            <span className='
        
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>{news.category}</span>
                            <Typography gutterBottom variant="h5" component="div">
                               {news.title.length>30? news.title.slice(0,30) + "...": news.title}
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {news.details.length>200? news.details.slice(0,200) +"..." : news.details}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                  </Link>
                </Grid>
                ))
               }
               

            </Grid>
        </div>
    );
};

export default DynamicNewsPage;