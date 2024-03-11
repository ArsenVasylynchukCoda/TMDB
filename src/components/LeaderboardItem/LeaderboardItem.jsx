import './LeaderboardItem.css'

function LeaderboardItem ({props}) {
    const allTimePercent = (props.allTimePerNum / props.maxAllTimePer) * 100
    const weekPercent = (props.weekPerNum / props.maxWeekPer) * 100

    return (
            <div className='leaderboard__block-item'>
                <div className='leaderboard__item-logo'><a href='#'><img
                    src={props.imgLink}
                    alt={props.imgAlt}/></a></div>
                <div className='leaderboard__item-text'>
                    <a href='#' className='leaderboard__item-text-name'>{props.name}</a>
                    <div className='leaderboard__item-text-percent leaderboard__item-text-percent_green'><div className='leaderboard__item-text-percent-line' style={{width: `${allTimePercent}%`}}></div>{props.allTimePer}</div>
                    <div className='leaderboard__item-text-percent leaderboard__item-text-percent_red'><div className='leaderboard__item-text-percent-line' style={{width: `${weekPercent}%`}}></div>
                        {props.weekPer}</div>
                </div>
            </div>
    )
}

export default LeaderboardItem