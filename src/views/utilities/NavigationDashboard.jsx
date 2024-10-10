import { useEffect, useState, Fragment } from 'react';
import { Routes, Route, NavLink, Outlet, useLocation, useParams, useOutletContext } from 'react-router-dom';

import menuItems from '@/menu-items';
import { Box, Grid, Paper, styled, Typography, ListItemText } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000'
    // border: "none",
    // boxShadow: "none"
}));

// https://mui.com/material-ui/react-grid2/

/**
 Customer an category from: read a list of all the category
 */
export default function NavigationDashboard(props) {
    const [categoriesLinks, setCategoriesLinks] = useState({});
    const context = useOutletContext();
    useEffect(() => {}, [categoriesLinks]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                Services
            </Typography>
            <Grid container item spacing={2}>
                {
                    //  menuItems().items.map((item, i) => {
                    //     switch (item.id) {
                    //         case 'categories':
                    //             console.log('categories:', item.children, i)
                    //             item.children.map((categories, index) => {
                    //                 console.log('categories:', categories.title)

                    //                 if(categories.children !== undefined)
                    //                 {
                    //                     // console.log('categories, index:', categories.children, index)
                    //                     categories.children.map((subcategory, x) => {
                    //                         console.log('topic, x:', subcategory.title, x)
                    //                     })
                    //                 }

                    //               })

                    //             // return item;
                    //         default:
                    //             console.log('error:', item, i)
                    //             // return 'error'
                    //     }
                    // })

                    menuItems().items.map((item, i) => {
                        switch (item.id) {
                            case 'categories':
                                return (
                                    <Fragment key={i}>
                                        {item?.children?.map((categories, index) => {
                                            return (
                                                <Grid item xs={12} md={5} lg={4} key={index}>
                                                    <Item>
                                                        <Box
                                                            id="category-a"
                                                            sx={{ fontSize: '14px', borderBottom: 1, borderColor: 'grey.300' }}
                                                        >
                                                            <Typography display="inline"> {categories.title} </Typography>
                                                        </Box>
                                                        <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, textAlign: 'left' }}>
                                                            {categories.children?.map((subcategory, x) => {
                                                                
                                                                return (
                                                                    <li key={x}>
                                                                        <NavLink
                                                                            style={{ textDecoration: 'none', color: '#7D7D7D' }}
                                                                            to={`${subcategory.url}/?category_id=${categories.id}&subcategory_id=${subcategory.id}`}
                                                                        >
                                                                            {subcategory.title}
                                                                        </NavLink>
                                                                    </li>
                                                                );
                                                            })}
                                                        </Box>
                                                    </Item>
                                                </Grid>
                                            );
                                        })}
                                    </Fragment>
                                );
                            default:
                                // console.log('error in NavigationDashboard:', item, i);
                            return 'error:::'
                        }
                    })
                }
                {/*                 
                <Grid xs={12} md={5} lg={4}>
                    <Item>
                        <Box
                            id="category-a"
                            sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                        >
                            Topic A
                            </Box>
                        <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                            <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                            <li>Subtopic 2</li>
                            <li>Subtopic 3</li>
                            <li><NavLink to="topics-1/subtopic-1">Subtopic 4</NavLink></li>
                            <li><NavLink to="topics-1/subtopic-2">Subtopic 5</NavLink></li>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} md={5} lg={4}>
                    <Item>
                        <Box
                            id="category-a"
                            sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                        >
                            Topic B
                            </Box>
                        <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                            <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                            <li>Subtopic 2</li>
                            <li>Subtopic 3</li>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} md={5} lg={4}>
                    <Item>
                        <Box
                            id="category-a"
                            sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                        >
                            Topic C
                            </Box>
                        <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                            <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                            <li>Subtopic 2</li>
                            <li>Subtopic 3</li>
                        </Box>
                    </Item>
                </Grid>
 */}
            </Grid>
        </Box>
    );
}
