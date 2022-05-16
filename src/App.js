import React, { useEffect, useState } from 'react'

import { fetchResults } from './reduxStore/actions/apiActions'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header'
import Loading from './components/Loading'
import VideoContainer from './components/videoContainer'

import './App.css'

function App() {

  // COMPONENT STATE TO STORING USER INPUT
  const [query, setQuery] = useState('')

  // USEDISPATCH 
  const dispatch = useDispatch()

  // REDUX STATE
  const apiLoading = useSelector(state => state.api.apiLoading)

  // FUNCTION TO FETCH RESULTS FROM ACTIONS
  const callApi = () => {
    dispatch(fetchResults(query))
  }

  // USEEFFECT TO FETCH DATA FROM API ONLY WHEN QUERY IS CHANGED
  useEffect(() => {
    // USE EFFECT TO FETCH RESULTS WHEN QUERY LENGTH IS GREATER THAN 2 
    if (query.length >= 2) {
      // ADDING TIMER TO PREVENT IMMEDIATE API CALLS
      const timer = setTimeout(() => {
        callApi()
      }, 1500)
      // CLEARING TIME OUT 
      return () => clearTimeout(timer)
    }
  }, [query])

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <VideoContainer />
      {/* SPINNER DISPLAYS WHEN API LOADING IS TRUE  */}
      {apiLoading && <Loading />}
    </div>
  )
}

export default App
