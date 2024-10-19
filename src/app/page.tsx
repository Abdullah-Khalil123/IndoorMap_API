'use client'
import MapScreen from '@/Components/Map Screen'
import React, { useEffect, useRef, useState } from 'react'
import floorPlan from '@/public/ground floor_page-0001.jpg'
import { indexedWayPoints } from '@/constants/points'
import { findShortestPath } from '@/utils/pathfinding'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import style from './page.module.css'

const Home = () => {
  const [startPoint, setStartPoint] = useState<number | null>(null)
  const [endPoint, setEndPoint] = useState<number | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [shortestPath, setShortestPath] = useState<number[]>([])

  const handleFindShortestPath = () => {
    if (startPoint !== null && endPoint !== null) {
      const path = findShortestPath(startPoint, endPoint)
      setShortestPath(path) // Store the shortest path
      console.log('Shortest Path:', path)
    } else {
      console.log('Please select both start and end points.')
    }
  }

  useEffect(() => {
    function handleIncommingData(event: MessageEvent) {
      console.log(event.data)
    }
    window.addEventListener('message', handleIncommingData)
  })

  return (
    <div>
      <div className={style.MapView}>
        <TransformWrapper centerOnInit maxScale={5} minScale={0.7}>
          <TransformComponent>
            <MapScreen floorPlan={floorPlan} shortestPath={shortestPath} />
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div>
        <label>Start Point:</label>
        <select
          onChange={(e) => setStartPoint(Number(e.target.value))}
          value={startPoint ?? ''}
        >
          <option value="">Select Start</option>
          {indexedWayPoints.map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>

        <label>End Point:</label>
        <select
          onChange={(e) => setEndPoint(Number(e.target.value))}
          value={endPoint ?? ''}
        >
          <option value="">Select End</option>
          {indexedWayPoints.map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>

        <button onClick={handleFindShortestPath}>Find Shortest Path</button>
      </div>
    </div>
  )
}

export default Home
