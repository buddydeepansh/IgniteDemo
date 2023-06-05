// Base url of api rawg.io
const base_url = "https//api.rawg.io/api"
const api_key = "c092407a08ef41b8898ca5a1f011f71c"

//creating date variables
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const currentYr = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDate = getCurrentDay()
const currentfullDate = `${currentYr}-${currentMonth}-${currentDate}`
const lastYearfullDate = `${currentYr - 1}-${currentMonth}-${currentDate}`
const NextYearfullDate = `${currentYr + 1}-${currentMonth}-${currentDate}`

// popular games
const popularGames = `${base_url}/games?dates=${lastYearfullDate},${currentfullDate}&ordering=-rating&page_size=10`

export const popularGamesUrl = () => {
  console.log(popularGames + api_key)
  return popularGames + "&key=" + api_key
}
popularGamesUrl()
