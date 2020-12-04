import getUser from './api/user'
import './styles/App.css'
import UserPage from './User/UserPage'
import getCity from './api/cities'
import { FillingForm } from './FillingForm'

function App() {
    let user = getUser()[0]
    let arrCity = getCity()
    return (
        <div className="App">
            <UserPage user={user} />
            <FillingForm city={arrCity} />
        </div>
    )
}

export default App
