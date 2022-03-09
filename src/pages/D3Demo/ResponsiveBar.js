import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './ResponsiveBar.css';
import ButtonGroupCustom from './ButtonGroupCustom';
import {  Container, FormControl, FormControlLabel, FormLabel, Grid, LinearProgress, Radio, RadioGroup } from '@mui/material';
import Card from '../Card/Card';



const Chart = () => {

	const d3Chart = useRef()
	const barVariableNames = [
		['region', 'relevance'],
		['region', 'intensity'],
		['region', 'likelihood'],
		['region', 'start_year'],
		['region', 'end_year'],
		['topic', 'relevance'],
		['topic', 'intensity'],
		['topic', 'likelihood'],
		['topic', 'start_year'],
		['topic', 'end_year'],
	]
	// set variable according to user selection
	const [barVariables, setBarVariables] = useState(['region', 'relevance'])
	// const [samples, setSamples] = useState([])
	// Ref for resize event update
	
	const [searchField, setSearchField] = useState('')
	const [news, setNews] = useState([])
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(10);
	const [isLoading, setLoading] = useState(false)
	const [filteredNews, setFilteredNews] = useState([])

	const [pageCount, setPageCount] = useState(0);
	// for button group 
	const [selectButton, setSelectButton] = useState(0)
	const [radioValue, setRadioValue] = React.useState('title');

	// search function
	const handleOnChange = (e) => {
		setSearchField(e.target.value)
	}
	// radio button 


	const handleRadioChange = (event) => {
		setRadioValue(event.target.value);
	};
	useEffect(() => {
		setLoading(true)
		

		fetch(`http://localhost:5000/newspapersSearch?searchField=${searchField}&&searchBy=${radioValue}`)
			.then(res => res.json())
			.then(data => {
				setFilteredNews(data)
				setLoading(false)
			})
	}, [searchField, radioValue])
	useEffect(() => {
		setLoading(true)
		fetch(`https://user-data-collector.herokuapp.com/newspapers?page=${page}&&size=${size}`)
			.then(res => res.json())
			.then(data => {
				const oddData = data.news;
				setNews(oddData)
				const newData = []
				const first = barVariables[0];
				const second = barVariables[1]
				oddData.map(dt => {
					let obj = {
						category: dt[first] ? dt[first] : `No ${first.toUpperCase()} Data`,
						quantity: parseInt(dt[second]) ? parseInt(dt[second]) : 0
					}
					newData.push(obj);
					return obj
				})
				// setSamples(newData);

				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
				// console.log(samples)
				d3.selectAll('g').remove()
				setLoading(false)
				DrawChart(newData)
			})


	}, [page, selectButton])

	const margin = { top: 30, right: 10, bottom: 0, left: 60 }

	function DrawChart(data) {

		// console.log(dimensions.width, dimensions.height)

		const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
		const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom


		const svg = d3.select(d3Chart.current)
			.attr('width', chartwidth + margin.left + margin.right)
			.attr('height', chartheight + margin.top + margin.bottom)

		// x scale
		const x = d3.scaleBand()
			.domain(d3.range(data.length))
			.range([margin.left, chartwidth - margin.right])
			.padding(0.1)

		svg.append('g')
			.attr('transform', 'translate(0,' + chartheight + ')')
			.call(d3.axisBottom(x).tickFormat(i => data[i].category).tickSizeOuter(0))

		const max = d3.max(data, function (d) { return d.quantity })

		// y scale
		const y = d3.scaleLinear()
			.domain([0, max])
			.range([chartheight, margin.top])

		svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',0)')
			.call(d3.axisLeft(y))

		// Draw bars
		svg.append('g')
			.attr('fill', '#6000cb')
			.selectAll('rect')
			.data(data)
			.join('rect')
			.attr('x', (d, i) => x(i))
			.attr('y', d => y(d.quantity))
			.attr('height', d => y(0) - y(d.quantity))
			.attr('width', x.bandwidth())
	}

	return (

		<Container >
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<FormControl >
					<FormLabel id="demo-row-radio-buttons-group-label">Search By {radioValue}</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						value={radioValue}
						onChange={handleRadioChange}
					>
						<FormControlLabel value="title" control={<Radio />} label="Title" />
						<FormControlLabel value="topic" control={<Radio />} label="Topic" />
						<FormControlLabel value="region" control={<Radio />} label="Region" />
						<FormControlLabel value="sector" control={<Radio />} label="Sector" />
						<FormControlLabel value="pestle" control={<Radio />} label="Pestle" />
						<FormControlLabel value="source" control={<Radio />} label="Source" />
						<FormControlLabel value="country" control={<Radio />} label="Country" />

					</RadioGroup>
				</FormControl>
				<input style={{ borderRadius: '15px', padding: '15px', fontSize: '20px', margin: '2rem' }} onChange={handleOnChange} placeholder={`Search for ${radioValue}`}></input>
			</div>
			{isLoading && <LinearProgress />}
			{(searchField.length && !isLoading) &&
				<Grid container spacing={3} style={{ marginBottom: '5px' }}>
					{
						filteredNews.map(newsSingleData =>

							<Grid sx={{ borderRadius: 4 }} item xs={12} sm={6}
								key={newsSingleData._id}
							>
								<Card newsSingleData={newsSingleData} />
							</Grid>
						)
					}
				</Grid>
			}

			{(!isLoading && !searchField.length) &&
				<div>
					<div>
						<Grid container spacing={3} style={{ marginBottom: '5px' }}>
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
						<div style={{ marginTop: '2rem' }}>
							<div style={{ display: 'flex' }}>
								<h3 style={{ width: '70%' }}>The Bar Show {barVariables[0].toLocaleUpperCase()} vs {barVariables[1].toLocaleUpperCase()} Show difference {size} Data </h3>
								<ButtonGroupCustom
									selectButton={selectButton}
									setSelectButton={setSelectButton}
									setBarVariables={setBarVariables}
									barVariableNames={barVariableNames}
								/>
							</div>
							<div id='d3demo'>
								<svg ref={d3Chart}></svg>
							</div>
							<h3> {`${barVariables[0].toUpperCase()} ---->>>>`}</h3>
						</div>
					</div>


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
				</div>
			}
		</Container>

	)
}

export default Chart
