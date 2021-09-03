// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {iplData} = this.props
    const {id, teamImageUrl, name} = iplData

    return (
      <Link to={`/team-matches/${id}`} className="stylings">
        <li className="each-card">
          <img className="team-image" alt={name} src={teamImageUrl} />
          <p className="team-desc"> {name} </p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
