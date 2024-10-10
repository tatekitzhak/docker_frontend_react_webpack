import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {
    Button, Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Tooltip, Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'ui-component/cards/SubCard';

import { set_font_family, set_border_radius } from '@/store/features/customizationCreateSlice';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
    return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Feedback = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - border radius
    const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
    const handleBorderRadius = (event, newValue) => {
        setBorderRadius(newValue);
    };

    useEffect(() => {
        // dispatch({ type: SET_BORDER_RADIUS, borderRadius });
        dispatch(set_border_radius(borderRadius));
    }, [dispatch, borderRadius]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
        // dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
        dispatch(set_font_family(newFont));
    }, [dispatch, fontFamily]);

    return (
        <>
            {/* toggle button */}
            <Tooltip title="Leave Feedback">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="#e0f2f1"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial,
                        backgroundColor: '#FD7F51',
                        '&:hover': {
                            color: '#FD7F51',
                            border: 2,
                            borderColor: '#FD7F51'
                        }
                    }}
                >
                    <IconButton color="inherit" size="large" disableRipple >
                        <AddReactionIcon  sx={{ color: "#fff", 
                        '&:hover': {
                            color: '#FD7F51'
                        } }}/>
                    </IconButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            <SubCard title="Writing Center to Leave Feedback">
                                <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
                                    How useful did you find the information or instuction on this page
                                </Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        value={fontFamily}
                                        onChange={(e) => setFontFamily(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <AddReactionIcon />
                                        <FormControlLabel
                                            value="Very useful"
                                            control={<Radio />}
                                            label="Very useful"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <AddReactionIcon />
                                        <FormControlLabel
                                            value="Somewhat useful"
                                            control={<Radio />}
                                            label="Somewhat useful"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Not that useful"
                                            control={<Radio />}
                                            label="Not that useful"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                    </RadioGroup>
                                    <Button type="submit" variant="contained" color="success">
                                        Submit
                                    </Button>
                                </FormControl>
                            </SubCard>
                        </Grid>

                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Feedback;
