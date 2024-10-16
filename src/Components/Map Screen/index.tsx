'use client'
import { StaticImageData } from 'next/image'
import React, { useEffect, useRef } from 'react'
import style from './mapScreen.module.css'
import Image from 'next/image'
import { indexedWayPoints } from '@/constants/points'
import { drawLine } from '@/utils/pathfinding' // Import functions

interface MapScreenProps {
  floorPlan: StaticImageData
  shortestPath: number[]
}

const MapScreen = ({ floorPlan, shortestPath }: MapScreenProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    // Clear the canvas
    if (canvas) ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the shortest path if it exists
    if (shortestPath.length > 0) {
      for (let i = 0; i < shortestPath.length - 1; i++) {
        const start = indexedWayPoints[shortestPath[i]]
        const end = indexedWayPoints[shortestPath[i + 1]]
        drawLine(ctx, start, end) // Draw the line only for the shortest path
      }
    }
  }, [shortestPath]) // Redraw when the shortest path changes

  return (
    <div className={style.mapScreen}>
      <Image src={floorPlan} alt="Floor Plan" layout="fill" objectFit="cover" />
      <canvas
        ref={canvasRef}
        className={style.canvas}
        width={800}
        height={600}
      />
    </div>
  )
}

export default MapScreen
