// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()

    const updatedData = jsonData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, iplData} = this.state

    return (
      <div className="bg-container">
        <div className="header">
          <img
            className="logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading"> IPL Dashboard </h1>
        </div>
        <div className="body-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul className="card-container">
              {iplData.map(eachTeam => (
                <TeamCard iplData={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
