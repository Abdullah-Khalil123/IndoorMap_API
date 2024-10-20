const doorPoints: { x: number; y: number }[] = [
  { x: 198.5, y: 464 },
  { x: 236.5, y: 388.7 },
  { x: 217.5, y: 553.7 },
  { x: 247.5, y: 366.5 },
  { x: 263.5, y: 431.5 },
  { x: 310.5, y: 383.5 },
  { x: 325.5, y: 368.5 },
  { x: 372.5, y: 321.5 },
  { x: 310.5, y: 308.5 },
  { x: 328.5, y: 291.5 },
  { x: 408.5, y: 260.5 },
  { x: 583.5, y: 303.5 },
  { x: 584.5, y: 403.5 },
  { x: 621.5, y: 368.5 },
  { x: 622.5, y: 302.5 },
  { x: 185.5, y: 488.5 },
  { x: 165.5, y: 495.5 },
  { x: 149.5, y: 517.5 },
  { x: 199.5, y: 543.5 },
  { x: 269.5, y: 504.5 },
  { x: 284.5, y: 489.5 },
  { x: 478.5, y: 253.69 },
  { x: 413.5, y: 304.69 },
  { x: 461.5, y: 292.699 },
  { x: 459.5, y: 352.7 },
  { x: 474.5, y: 352.7 },
  { x: 602.5, y: 413.7 },
  { x: 639.5, y: 413.7 },
  { x: 663.5, y: 413.7 },
  { x: 716.5, y: 382.7 },
  { x: 710.5, y: 289.7 },
  { x: 621.5, y: 267.7 },
  { x: 603.5, y: 258.7 },
  { x: 555.5, y: 258.7 },
  { x: 515.5, y: 243.7 },
  { x: 556.9, y: 204.9 },
]

const waypoints: { x: number; y: number }[] = [
  { x: 217.5, y: 542.7 },
  { x: 217.5, y: 501.7 },
  { x: 221.5, y: 484.7 },
  { x: 195.5, y: 477.7 },
  { x: 186.5, y: 475.7 },
  { x: 169.5, y: 472.7 },
  { x: 162.5, y: 510.7 },
  { x: 150.5, y: 508.7 },
  { x: 148.5, y: 526.7 },
  { x: 254.5, y: 488.7 },
  { x: 269.5, y: 474.7 },
  { x: 229.5, y: 464.7 },
  { x: 236.5, y: 442.7 },
  { x: 249.5, y: 419.7 },
  { x: 267.5, y: 396.7 },
  { x: 242.5, y: 377.7 },
  { x: 228.5, y: 402.7 },
  { x: 202.5, y: 450.7 },
  { x: 259.5, y: 354.7 },
  { x: 297.5, y: 318.7 },
  { x: 320.5, y: 302.7 },
  { x: 338.5, y: 327.7 },
  { x: 363.5, y: 308.7 },
  { x: 399.5, y: 345.7 },
  { x: 310.5, y: 354.7 },
  { x: 353.5, y: 396.7 },
  { x: 294.5, y: 368.7 },
  { x: 277.5, y: 443.7 },
  { x: 325.5, y: 396.7 },
  { x: 406.5, y: 287.5 },
  { x: 420.5, y: 323.5 },
  { x: 457.5, y: 275.5 },
  { x: 466.5, y: 315.5 },
  { x: 466.5, y: 340.5 },
  { x: 467.5, y: 370.5 },
  { x: 478.5, y: 273.5 },
  { x: 514.5, y: 270.5 },
  { x: 555.5, y: 273.5 },
  { x: 603.5, y: 275.5 },
  { x: 603.5, y: 267.5 },
  { x: 603.5, y: 301.5 },
  { x: 603.5, y: 242.5 },
  { x: 639.5, y: 266.5 },
  { x: 560.5, y: 303.5 },
  { x: 639.5, y: 301.5 },
  { x: 604.5, y: 368.5 },
  { x: 639.5, y: 368.5 },
  { x: 601.5, y: 402.5 },
  { x: 564.5, y: 403.5 },
  { x: 602.5, y: 431.5 },
  { x: 639.5, y: 402.5 },
  { x: 639.5, y: 429.5 },
  { x: 663.5, y: 428.5 },
  { x: 663.5, y: 401.5 },
  { x: 715.5, y: 367.5 },
  { x: 716.5, y: 398.5 },
  { x: 710.5, y: 300.5 },
  { x: 710.5, y: 276.5 },
  { x: 602.7, y: 204.7 },
  { x: 570.7, y: 204.7 },
  { x: 572.3, y: 242.3 },
  { x: 427.75, y: 282.5 },
  { x: 420.75, y: 256.5 },
  { x: 390.75, y: 266.5 },
  { x: 343.75, y: 284.5 },
  { x: 299.5, y: 505.5 },
  { x: 283.5, y: 517.5 },
]

const roomPoints: { x: number; y: number }[] = [
  { x: 215.5, y: 425.5 },
  { x: 304.5, y: 424.5 },
  { x: 277.5, y: 335.5 },
  { x: 370.5, y: 273.5 },
  { x: 374.5, y: 372.5 },
  { x: 562.17, y: 339.17 },
  { x: 641.17, y: 337.17 },
  { x: 589.83, y: 204.83 },
  { x: 624.83, y: 433.17 },
  { x: 663.83, y: 392.17 },
  { x: 701.83, y: 398.17 },
  { x: 693.83, y: 275.83 },
  { x: 654.83, y: 266.83 },
  { x: 554.83, y: 236.83 },
  { x: 553.83, y: 204.83 },
  { x: 446.5, y: 319.5 },
  { x: 183.5, y: 503.83 },
  { x: 183.5, y: 542.83 },
  { x: 154.5, y: 499.83 },
  { x: 131.5, y: 525.83 },
]

const waypointConnections: { [key: number]: number[] } = {
  0: [1],
  1: [0, 2, 9],
  2: [1, 9, 11, 3],
  3: [2, 4, 17],
  4: [3, 17, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7],
  9: [2, 11, 10, 66],
  10: [2, 9, 11, 12, 66, 65],
  11: [2, 9, 10, 12],
  12: [11, 9, 10, 13],
  13: [12, 14, 27],
  14: [13, 15, 26],
  15: [14, 16, 18],
  16: [15, 17],
  17: [3, 16],
  18: [15, 19],
  19: [18, 20],
  20: [64, 21, 19],
  21: [20, 22, 24],
  22: [21, 23, 29],
  23: [22, 25],
  24: [26, 21, 25],
  25: [24, 23],
  26: [14, 28, 24],
  27: [13, 28],
  28: [27, 26],
  29: [22, 61, 30],
  30: [29, 32, 33],
  31: [61, 35, 32],
  32: [30, 33, 31],
  33: [30, 32, 34],
  34: [33],
  35: [31, 36],
  36: [35, 37],
  37: [36, 38],
  38: [37, 39, 40],
  39: [41, 38, 42],
  40: [38, 44, 43, 45],
  41: [39, 60, 58, 59],
  42: [39],
  43: [40, 48],
  44: [40, 46, 54, 56],
  45: [40, 46, 47],
  46: [45, 54, 44, 56],
  47: [45, 50, 48, 49],
  48: [47, 43],
  49: [47, 51],
  50: [47, 51],
  51: [50, 49, 52],
  52: [53, 51],
  53: [52],
  54: [55, 56, 46, 44],
  55: [54],
  56: [44, 46, 54, 57],
  57: [56],
  58: [41, 60, 59],
  59: [60, 41, 58],
  60: [41, 58, 59],
  61: [29, 31, 62],
  62: [61, 63],
  63: [62, 64],
  64: [20, 63],
  65: [10],
  66: [9],
}

const indexedDoorPoints = doorPoints.map((point, index) => {
  return { name: index, x: point.x, y: point.y }
})
////////////////////////////////////////

const indexedWayPoints = waypoints.map((point, index) => {
  return { name: index, x: point.x, y: point.y }
})

////////////////////////////////////////

const indexedRoomPoints = roomPoints.map((point, index) => {
  return { name: index, x: point.x, y: point.y }
})
////////////////////////////////////////

export {
  doorPoints,
  waypointConnections,
  waypoints,
  roomPoints,
  indexedDoorPoints,
  indexedRoomPoints,
  indexedWayPoints,
}
