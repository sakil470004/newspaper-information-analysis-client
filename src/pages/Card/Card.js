import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Card() {
    return (
        <Box sx={{ p: 1 }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    Published : 2000
                </Typography>
                <Typography>
                    Added : 2022
                </Typography>
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >

                    <Typography variant="h5">U.S. natural gas consumption is expected to increase during much of the projection period.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Region: Northern America
                        </Typography>
                        <Typography>
                            Topic : Gas
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                            Start Year : 2000
                        </Typography>
                        <Typography>
                            End Year : 2022
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5">U.S. natural gas consumption is expected to increase during much of the projection period.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
