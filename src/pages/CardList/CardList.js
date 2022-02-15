import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import './CardList.css'

export default function CardList() {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // useEffect(() => {
    //     fetch('http://localhost:5000/newspapers')
    //         .then(res => res.json())
    //         .then(data => setNews(data))
    // }, [])
    // for pageNation
    const size = 20;
    useEffect(() => {
        fetch(`http://localhost:5000/newspapers?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setNews(data.news);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);


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
            <div className="pagination">
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? 'selected' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
            </div>
        </Container>
    )
}
