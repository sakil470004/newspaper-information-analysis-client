import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Card({ newsSingleData }) {

    const { published, start_year, end_year, topic, url, added, title, region } = newsSingleData
    return (
        <Box sx={{ p: 1 }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    Published : {published?published:"No Data Now"}
                </Typography>
                <Typography>
                    Added : {added?added:"No Data Now"}
                </Typography>
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >

                    <Typography variant="h6">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                        </Typography>

                        <Button sx={{ m: 1 }}><a style={{ textDecoration: 'none' }} href={url?url:"#"} rel="noreferrer" target='_blank'>{url?"Go TO":"Link isn't available"}</a></Button>

                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Region: {region?region:"Not Added"}
                        </Typography>
                        <Typography>
                            Topic : {topic}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Start Year : {start_year?start_year:"No Data Now"}
                        </Typography>
                        <Typography>
                            End Year : {end_year?end_year:"No Data Now"}
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}
