import React, { useState, useEffect } from 'react';
import { useOutletContext, Route, NavLink, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Box, Container, CssBaseline, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { disableLoading, selectTopics, getTopicsStatus, getTopicsError, fetchTopicsById, increment, decrement, incrementByAmount } from '@/store/features/slices/topics/topicsSlice';

import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout';

const navigation_content = {
    // `someData` argument
    headline: 'Contact Us',
    content: `Have a question, comment or concern? 
  Send a message to: info@askmediatech.com`
};

/**
 Customer an subcategory from: read a list of all the subcategory
 */
function TopicsNavigation(props) {
    const [topicsData, setTopicsData] = useState([]);
    let paramsInfo = [];
    let article_path = '';
    // redux
    const dispatch = useDispatch();
    const topicsOfList = useSelector(selectTopics);
    const topicsStatus = useSelector(getTopicsStatus);
    const error = false;;

    const params = useParams();

    let location = useLocation();
    const [searchParams] = useSearchParams();
    const category_id = searchParams.get('category_id');
    const subcategory_id = searchParams.get('subcategory_id');
    console.log('Object.fromEntries:', Object.fromEntries([...searchParams]), params);

    const id_params = Object.fromEntries([...searchParams]);
    paramsInfo.push(id_params, params);
    console.log('Object id_params:', id_params, params);

    useEffect(() => {
        if (!topicsStatus.isLoading) {
            dispatch(fetchTopicsById(paramsInfo));

        }
        setTopicsData(topicsOfList);

        // componentWillUnmount / Unmount functional component / cleanup
        return () => {
            if (!topicsStatus.isLoading) {
                dispatch(disableLoading())
            }
        };

    }, [dispatch]);

    if (!topicsStatus.isLoading) {
        return (
            <>
                <CssBaseline />
                <Container>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <ul>
                            <p>Loading...</p>
                        </ul>

                    </Box>

                    <Outlet />
                </Container>
            </>);
    }

    if (error) {
        return (
            <>
                <CssBaseline />
                <Container>

                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <ul>
                            <p>Error:</p>
                        </ul>

                    </Box>
                    <Outlet />
                </Container>
            </>);
    }

    return (
        <>
            <CssBaseline />
            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        {params.subcategory}
                    </Typography>

                    <ul>
                        {
                            topicsOfList.map((article, index) => {

                                return article.map(function (item, i) {
                                    // console.log('article_ref_ids:', item.article_ref_ids[0])
                                    // console.log('topic_id:', category_id)
                                    // console.log('item:', item)
                                    article_path = `${item.title}/?topic_id=${item._id}&article_title=${item.title}&article_id=${item.article_ref_ids[0]}`;

                                    return (
                                        <li key={i}>
                                            <NavLink to={ article_path } >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            })
                        }
                    </ul>
                </Box>

                <Outlet />
            </Container>
        </>
    );
}

// const TopicsNavigationMenu = withHeaderFooterLayout(TopicsNavigation, navigation_content)

export default TopicsNavigation;
