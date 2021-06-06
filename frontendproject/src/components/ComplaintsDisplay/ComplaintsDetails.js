import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        maxWidth: 125,
    },
    media: {
        height: 125,
    },
    sizes: {
        marginRight: '3rem',
        marginTop: '2rem'
    },
});
export default function ComplaintsDetails() {
    const classes = useStyles();

    return (
        <Box >
            <Box style={{ display: 'flex', marginTop: '2rem' }}>
                <Typography gutterBottom variant="h5" component="h2" style={{ marginRight: '2rem' }}>
                    عنوان الشكوى
          </Typography>
                <Box style={{ border: "1px solid black", width: "5%", marginRight: '3rem', backgroundColor: '#F5F4FA', borderRadius: '40%', height: '4%' }}>
                    <Typography>1234</Typography>
                </Box>
            </Box>

            <Box style={{ border: "1px solid black", width: "80%", marginRight: '3rem', backgroundColor: '#fff', borderRadius: '10%', height: '60%' }}>
                <Typography style={{ paddingRight: '6%', paddingTop: '2%' }}>تقديم شكوى ياعهصضشياهعسشاعياشيعخشسايعخا</Typography>
            </Box>

            <Typography gutterBottom variant="h5" component="h2" style={{ marginRight: '2rem' }}>
                المرفقات
          </Typography>
            <Box style={{ display: 'flex' }}>
                <Card className={classes.root} className={classes.sizes} style={{ marginRight: '2rem' }}>

                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='logo192.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            حفظ
        </Button>
                        <Button size="small" color="primary">
                            عرض
        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} className={classes.sizes}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='logo192.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            حفظ
        </Button>
                        <Button size="small" color="primary">
                            عرض
        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} className={classes.sizes}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='logo192.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            حفظ
        </Button>
                        <Button size="small" color="primary">
                            عرض
        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} className={classes.sizes}  >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='logo192.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            حفظ
        </Button>
                        <Button size="small" color="primary">
                            عرض
        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box >
    );
}