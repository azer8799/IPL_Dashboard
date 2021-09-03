// Write your code here
import './index.css'

const LatestMatch = props => {
  //   console.log(props)
  const {latestDetails} = props
  const {venue} = latestDetails
  console.log(latestDetails)
  console.log(venue)
  return (
    <li className="each-latest-card">
      <div className="image-container">
        <div className="details">
          <p className="latest-heading">{latestDetails.competing_team}</p>
          <p className="latest-heading">{latestDetails.date}</p>
          <p className="latest-desc">{latestDetails.venue}</p>
          <p className="latest-desc">{latestDetails.result}</p>
        </div>
        <div className="each-image">
          <img
            className="teams"
            alt={`latest match  ${latestDetails.competing_team} `}
            src={latestDetails.competing_team_logo}
          />
        </div>
      </div>

      <div>
        <p className="latest-desc">First Innings</p>
        <p className="latest-desc">{latestDetails.first_innings}</p>
        <p className="latest-desc">Second Innings</p>
        <p className="latest-desc">{latestDetails.second_innings}</p>
        <p className="latest-desc"> Man Of The Match</p>
        <p className="latest-desc">{latestDetails.man_of_the_match}</p>
        <p className="latest-desc">Umpires</p>
        <p className="latest-desc">{latestDetails.umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
