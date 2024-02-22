import Search from "./Search"
import ShowList from "./ShowList"

const ShowListAndSearch = () => {
  return (
    <div>
        <Search />
        <h2>TV shows</h2>
        <ShowList />
    </div>
  )
}

export default ShowListAndSearch