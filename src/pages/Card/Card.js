import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from '@mui/icons-material/Flag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LanguageIcon from '@mui/icons-material/Language';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export default function Card({ newsSingleData }) {

    const { published, start_year, end_year, topic, url, added, title, region, country } = newsSingleData
    return (
        <Box sx={{ p: 1 ,boxShadow:3,borderRadius:4}}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '3px' }}>
                <div style={{ display: 'flex' }}>
                    <PublishedWithChangesIcon />
                    <Typography>
                        {published ? published : "No Data Now"}
                    </Typography>
                </div>
                <Typography>
                    Added : {added ? added : "No Data Now"}
                </Typography>
            </Box>


            <div style={{ display: 'flex' }}>

                <Typography sx={{ display: 'flex', justifyContent: '', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }} variant="h6"> * {title}</Typography>
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                </Typography>

                <Button sx={{ m: 1 }}><a style={{ textDecoration: 'none' }} href={url ? url : "#"} rel="noreferrer" target='_blank'>{url ? "Go TO" : "Link isn't available"}</a></Button>

            </Box>
            {/* working here */}
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
                <Typography>
                    <FlagIcon style={{ fontSize:'16px' }} /> {country ? country : "Not Added"}
                </Typography>
                <Typography>

                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
                <Typography>
                    <LanguageIcon style={{ fontSize:'16px' }}/> {region ? region : "Not Added"}
                </Typography>
                <Typography>
                    Topic : {topic}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                <Typography>
                    Start Year : {start_year ? start_year : "No Data Now"}
                </Typography>
                <Typography>
                    End Year : {end_year ? end_year : "No Data Now"}
                </Typography>
            </Box>

        </Box>
    )
}
