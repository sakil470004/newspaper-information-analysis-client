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
        <Box sx={{ p: 1 }}>

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

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div style={{ display: 'flex' }}>
                        <ArrowForwardIcon sx={{ marginTop: '4px' }} />
                        <Typography sx={{ display: 'flex', justifyContent: '', alignItems: 'flex-start' }} variant="h6"> {title}</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                        </Typography>

                        <Button sx={{ m: 1 }}><a style={{ textDecoration: 'none' }} href={url ? url : "#"} rel="noreferrer" target='_blank'>{url ? "Go TO" : "Link isn't available"}</a></Button>

                    </Box>
                    {/* working here */}
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                        <Typography>
                            <FlagIcon sx={{ marginTop: '6px' }} /> {country ? country : "Not Added"}
                        </Typography>
                        <Typography>

                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                        <Typography>
                            <LanguageIcon /> {region ? region : "Not Added"}
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
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}
