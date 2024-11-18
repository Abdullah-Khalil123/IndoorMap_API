'use client'
import MapScreen from '@/Components/Map Screen'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import floorPlan from '@/public/ground floor_page-0001.jpg'
// import { indexedWayPoints } from '@/constants/points'

import locImage from '@/public/current-location-svgrepo-com.svg'

import { findShortestPath } from '@/utils/pathfinding'
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef,
} from 'react-zoom-pan-pinch'
import style from './page.module.css'
import { indexedWayPoints } from '@/constants/points'

const Home = () => {
  const [startPoint, setStartPoint] = useState<number | undefined>(undefined)
  const [endPoint, setEndPoint] = useState<number | undefined>(undefined)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [shortestPath, setShortestPath] = useState<number[]>([])
  const transformRef = useRef<ReactZoomPanPinchContentRef>(null)

  const handleFindShortestPath = () => {
    if (startPoint !== undefined && endPoint !== undefined) {
      const path = findShortestPath(startPoint, endPoint)
      setShortestPath(path) // Store the shortest path
      console.log('Shortest Path:', path)
    } else {
      console.log('Please select both start and end points.')
    }
  }

  function zoomToPlace() {
    const point: HTMLElement | null = document.getElementById('point')
    if (startPoint) {
      if (point) {
        point.style.backgroundColor = 'blue'
        point.style.left = `${indexedWayPoints[startPoint].x}px`
        point.style.top = `${indexedWayPoints[startPoint].y}px`
      }
      transformRef.current?.zoomToElement('point', 2)
    } else {
      if (point) {
        point.style.backgroundColor = 'transparent'
      }
    }

    // if (transformRef.current && startPoint)
    //   transformRef.current.setTransform(
    //     indexedWayPoints[startPoint].x - 300,
    //     -indexedWayPoints[startPoint].y + 200,
    //     1.5,
    //     2,
    //     'linear'
    //   )
  }

  // This useEffect runs whenever startPoint or endPoint changes
  useEffect(() => {
    if (startPoint !== null && endPoint !== null) {
      handleFindShortestPath()
      zoomToPlace()
    }
  }, [startPoint, endPoint])

  useEffect(() => {
    function handleIncommingData(event: MessageEvent) {
      if (event.data != 'center') {
        setStartPoint(event.data['start'])
        setEndPoint(event.data['end'])
        handleFindShortestPath()
      } else {
        zoomToPlace()
      }
    }

    window.addEventListener('message', handleIncommingData)

    return () => {
      window.removeEventListener('message', handleIncommingData)
    }
  })

  return (
    <div>
      <div className={style.MapView}>
        <TransformWrapper
          centerOnInit
          maxScale={5}
          minScale={0.7}
          ref={transformRef}
        >
          <TransformComponent>
            <MapScreen floorPlan={floorPlan} shortestPath={shortestPath} />
          </TransformComponent>
        </TransformWrapper>
        <div
          className={style.centerButton}
          onClick={() => {
            zoomToPlace()
          }}
        >
          <Image src={locImage} alt={'Current Location'} height={40}></Image>
        </div>
      </div>
    </div>
  )
}

export default Home
