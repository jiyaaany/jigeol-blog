import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from '../plugins/axios';
import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    setPosts(await axios.get('/posts'));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          posts.map(post => (
              <Grid item xs={3}>
              <PostCard key={post.id} post={post} />
              </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await axios.get('/posts');

  return {
    props: {
      posts,
    },
  }
}


export default Home;
