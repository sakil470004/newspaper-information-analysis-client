import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card/Card'

export default function CardList() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/newspapers')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <Container>

            <Grid container spacing={1} style={{ marginBottom: '5px' }}>
                {
                    news.map(newsSingleData =>

                        <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
                            key={newsSingleData._id}
                        >
                            <Card newsSingleData={newsSingleData} />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}
