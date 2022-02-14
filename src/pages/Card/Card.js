import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Card({ newsSingleData }) {

    const { published, start_year, end_year, topic, url, added, title, region } = newsSingleData
    return (
        <Box sx={{ p: 1 }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    Published : {published}
                </Typography>
                <Typography>
                    Added : {added}
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

                        <Button sx={{ m: 1 }}><a style={{ textDecoration: 'none' }} href={url} rel="noreferrer" target='_blank'>Go TO</a></Button>

                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Region: {region}
                        </Typography>
                        <Typography>
                            Topic : {topic}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Start Year : {start_year}
                        </Typography>
                        <Typography>
                            End Year : {end_year}
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}
