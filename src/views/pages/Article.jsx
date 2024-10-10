import React, { useState, useEffect } from 'react';
import { useOutletContext, Route, NavLink, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Box, CardMedia, Container, CssBaseline } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';

import { useSelector, useDispatch } from 'react-redux';

import { articlesStoreReseted, disableLoading, enableLoading, updateArticles, fetchArticlesData, selectAllArticles, selectArticlesById } from '@/store/features/slices/articles/articlesSlice';

// Customer an Article from
function Article(props) {
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.users.entities.find(u => u.id === userId));
    const articleItem = useSelector(selectAllArticles);
    const articlesStatus = useSelector((state) => state.articles);
    const error = useSelector((state) => state.articles);


    const params = useParams();
    const topicsParams = [];
    let location = useLocation();
    const [searchParams] = useSearchParams();

    for (const paramsItem of searchParams.entries()) {
        // console.log(paramsItem);
        topicsParams.push(paramsItem)
    }
    // console.log('topicsParams:', topicsParams)
    console.log('...searchParams:', [...searchParams]);
    // console.log('Object.fromEntries:', Object.fromEntries([...searchParams]));

    useEffect(() => {
        console.log('articlesStatus:', articlesStatus)
        if (!articlesStatus.isLoading) {
            dispatch( fetchArticlesData(Object.fromEntries([...searchParams])) );
        }

        // componentWillUnmount / Unmount functional component / cleanup
        return () => {
            
            if (!articlesStatus.isLoading) {
                dispatch( articlesStoreReseted() );
            }
        };

    }, [status, dispatch]);
    return (
        <>

            <CssBaseline />
            <Container>
                {/* {console.log('articleItem title:', articleItem, topicsParams)} */}
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <h2> Article title: {topicsParams[1][1]} </h2>
                    <article >
                        {
                            articleItem.articles.map((topic, index) => {
                                return (
                                    <div key={index} >
                                        <h3> title:{ topicsParams[1][1] } </h3>
                                        <CardMedia
                                                component="div"
                                                sx={{
                                                    // 16:9
                                                    pt: '26.25%',
                                                    width: '50%',
                                                    height: '40%',
                                                    // padding: "30% 30% 30% 30%", 
                                                    // objectFit: "contain"
                                                }}
                                                image="https://source.unsplash.com/random?wallpapers"
                                            />
                                        {topic}
                                    </div>);
                            })
                        }
                    </article>
                </Box>
            </Container>
        </>
    );
}

export default Article;
