// pathfinding.ts
import { indexedWayPoints, waypointConnections } from '@/constants/points'

// Dijkstra's algorithm to find the shortest path
export const findShortestPath = (start: number, end: number): number[] => {
  const distances: Record<number, number> = {}
  const previous: Record<number, number | null> = {}
  const visited: Set<number> = new Set()
  const pq: { node: number; distance: number }[] = []

  indexedWayPoints.forEach((_, index) => {
    distances[index] = Infinity
    previous[index] = null
  })
  distances[start] = 0
  pq.push({ node: start, distance: 0 })

  while (pq.length > 0) {
    pq.sort((a, b) => a.distance - b.distance)
    const { node } = pq.shift()!

    if (node === end) break

    waypointConnections[node].forEach((neighborIndex: number) => {
      if (!visited.has(neighborIndex)) {
        const newDistance = distances[node] + 1 // Assuming equal weight for simplicity
        if (newDistance < distances[neighborIndex]) {
          distances[neighborIndex] = newDistance
          previous[neighborIndex] = node
          pq.push({ node: neighborIndex, distance: newDistance })
        }
      }
    })
    visited.add(node)
  }

  const path: number[] = []
  let currentNode = end
  while (previous[currentNode] !== null) {
    path.unshift(currentNode)
    currentNode = previous[currentNode]!
  }
  path.unshift(start)

  return path
}

// Drawing functions
export const drawLine = (
  ctx: CanvasRenderingContext2D,
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.strokeStyle = '#4cb3e6'
  ctx.lineWidth = 2
  ctx.stroke()
}

export const drawWaypoint = (
  ctx: CanvasRenderingContext2D,
  point: { x: number; y: number }
) => {
  ctx.beginPath()
  ctx.arc(point.x, point.y, 2, 0, Math.PI * 2, false)
  ctx.fillStyle = 'red'
  ctx.fill()
  ctx.closePath()
}
