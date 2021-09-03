// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props

  const getClassName = () => {
    if (recentDetails.match_status === 'Won') {
      return 'greenColor'
    }
    return 'redColor'
  }

  const colorName = getClassName()

  return (
    <li className="matches-card">
      <img
        className="math-image"
        alt={`competing team ${recentDetails.competing_team} `}
        src={recentDetails.competing_team_logo}
      />
      <p className="match-heading">{recentDetails.competing_team}</p>
      <p className="match-desc">{recentDetails.result}</p>
      <p className={`match-desc ${colorName}`}>{recentDetails.match_status}</p>
    </li>
  )
}

export default MatchCard
