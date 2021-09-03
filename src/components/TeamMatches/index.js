// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()

    console.log(jsonData)

    const updatedData = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
    }

    this.setState({matchData: updatedData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state

    const {latestMatchDetails, recentMatches, teamBannerUrl} = matchData
    return (
      <div className="match-card">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="body-container">
            <img alt="team banner" className="image" src={teamBannerUrl} />
            <h1 className="heading"> Latest Matches </h1>
            <ul className="latest-match-container">
              <LatestMatch latestDetails={latestMatchDetails} />
            </ul>
            <ul className="list-items">
              {recentMatches.map(eachItem => (
                <MatchCard recentDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
