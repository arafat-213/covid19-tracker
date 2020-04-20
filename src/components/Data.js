import React, { Component } from 'react'
import covidData from '../api/covidData'

class Data extends Component {
	render() {
		return <div>Data</div>
	}

	componentDidMount() {
		this.fetchData()
	}

	async fetchData() {
		const res = await covidData.get()
		console.log(res.data)
	}
}

export default Data
