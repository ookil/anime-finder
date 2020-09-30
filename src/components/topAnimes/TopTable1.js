import React from 'react'

const TopTable1 = ({topList}) => {
    return (
        <div>
            {topList.map((anime) => <p>{anime.title}</p>)}
        </div>
    )
}

export default TopTable1
