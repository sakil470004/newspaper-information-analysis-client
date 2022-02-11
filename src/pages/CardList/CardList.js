import { Container, Grid } from '@mui/material'
import React from 'react'
import Card from '../Card/Card'

export default function CardList() {
    return (
        <Container>

            <Grid container spacing={1} style={{ marginBottom: '5px' }}>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>
                <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                    key=''
                >
                    <Card />
                </Grid>

            </Grid>
        </Container>
    )
}
