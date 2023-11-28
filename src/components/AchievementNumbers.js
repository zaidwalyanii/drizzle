import React from 'react'

function AchievementNumbers({number , description}) {
    return (
        <div className='achievement-numbers'>
            <h2>{number}</h2>
            <p>{description}</p>
        </div>
    )
}

export default AchievementNumbers