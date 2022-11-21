import Nav from './components/Nav'
import Home from './components/Home'
import AllStudents from './components/AllStudents'
function App() {
  return (
    <div className="App">
      <p>app.js hogwartz</p>
      <Nav />
      <Home />

      <main>
        <Routes>
        <Route
						path="/search-results/:student"
						element={<SearchResults />}
					/>
        </Routes>
      </main>

      <AllStudents />

    </div>
  )
}

export default App
