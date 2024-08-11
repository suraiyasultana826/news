import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import news from '@/assets/news.jpg';
import Image from 'next/image';
import tech from '@/assets/technology.jpg'
const LatestNews = () => {
    return (

        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={news} alt='news' width={800} />
                </CardMedia>
                <CardContent>
                    <p className='
        w-[70px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>Politics</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                    </Typography>
                    <Typography className='my-3' gutterBottom>
                        By Suraiya sultana - August 11, 2024
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


            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={tech} alt='news' width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='
        w-[70px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>Politics</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By Suraiya sultana - August 11, 2024
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
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={tech} alt='news' width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='
        w-[70px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>Politics</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By Suraiya sultana - August 11, 2024
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
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={tech} alt='news' width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='
        w-[70px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>Politics</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By Suraiya sultana - August 11, 2024
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
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={tech} alt='news' width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='
        w-[70px]
        bg-red-500
        px-2
        text-white
        my-5
        rounded
        '>Politics</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                            </Typography>
                            <Typography className='my-3' gutterBottom>
                                By Suraiya sultana - August 11, 2024
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

            </Grid>

        </Box>

    );
};

export default LatestNews;