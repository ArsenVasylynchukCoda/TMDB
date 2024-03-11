const generateLiScore = (min, count, plus, showNum) => {
    let minNum = min
    const liArr = []
    for (let i = 0; i <= count; i++) {
        if (showNum.includes(minNum)) {
            liArr.push(<li className='movies-page__filter-range-list-item long' title={minNum}>{minNum}</li>)
        } else if (!showNum.includes(minNum)) {
            liArr.push(<li className='movies-page__filter-range-list-item' title={minNum}></li>)
        }
        minNum += plus
    }
    return liArr
}

export const dataScore = {
    min: 0,
    max: 10,
    step: 1,
    defaultValue: [0, 10],
    className: 'duo',
    inputs: generateLiScore(0, 10, 1, [0, 5, 10])
}

export const dataVoices = {
    min: 0,
    max: 500,
    step: 50,
    defaultValue: [0, 0],
    className: 'solo',
    inputs: generateLiScore(0, 10, 50, [0, 100, 200, 300, 400, 500])
}

export const dataRuntime = {
    min: 0,
    max: 405,
    defaultValue: [0, 405],
    step: 15,
    className: 'duo',
    inputs: generateLiScore(0, 27, 15, [0, 120, 240, 360])
}