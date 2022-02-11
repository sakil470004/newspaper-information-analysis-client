import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Card() {
    return (
        <Box sx={{ p: 1 }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    Published : 2000 may
                </Typography>
                <Typography>
                    Added : 2022 may
                </Typography>
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >

                    <Typography variant="h6">U.S. natural gas consumption is expected to increase during much of the projection period.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>
                        </Typography>

                        <Button sx={{ m: 1 }}><a style={{ textDecoration: 'none' }} href='http://www.google.com' rel="noreferrer" target='_blank'>Go TO</a></Button>

                    </Box>
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
         
        </Box>
    )
}
