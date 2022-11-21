import Nav from './components/Nav'
import Home from './components/Home'
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
    </div>
  )
}

export default App
