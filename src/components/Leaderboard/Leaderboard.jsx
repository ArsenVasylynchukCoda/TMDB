import {data} from "./data";
import LeaderboardItem from "../LeaderboardItem/LeaderboardItem";
import './Leaderboard.css'

function Leaderboard () {
    return (
        <section className='leaderboard'>
            <div className='leaderboard__title-block'>
                <h2 className='leaderboard__title'>Leaderboard</h2>
                <div className='leaderboard__edits-block'>
                    <p className='leaderboard__edit-text leaderboard__edit-text_green'><span></span> All Time Edits</p>
                    <p className='leaderboard__edit-text leaderboard__edit-text_red'><span></span> Edits This Week</p>
                </div>
            </div>
            <div className='leaderboard__block'>
                {
                    data && data.map(person => {
                        return <LeaderboardItem props={person} />
                    })
                }
            </div>
        </section>
    )
}

export default Leaderboard