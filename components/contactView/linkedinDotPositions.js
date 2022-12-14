const linkedinDotPositions = [
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
  { left: 37, top: 270 },
  { left: 37, top: 275 },
  { left: 20, top: 230 }, // curve right
  { left: 16, top: 231 },
  { left: 12, top: 233 },
  { left: 8, top: 235 },
  { left: 4, top: 238 },
  { left: 0, top: 244 }, // curve bottom
  { left: 4, top: 239 },
  { left: 9, top: 236 },
  { left: 15, top: 236 },
  { left: 20, top: 239 },
  { left: 24, top: 244 },
  { left: -38, top: 195 }, // top
  { left: -38, top: 201 },
  { left: -38, top: 204 }, // center of dot
  { left: -38, top: 207 },
  { left: -38, top: 213 }, // bottom
  { left: -35, top: 204 },
  { left: -29, top: 204 }, // right
  { left: -41, top: 204 },
  { left: -47, top: 204 }, // left
  { left: -46, top: 200 }, // fill in dot
  { left: -42, top: 196 },
  { left: -34, top: 196 },
  { left: -30, top: 200 },
  { left: -30, top: 208 },
  { left: -34, top: 212 },
  { left: -42, top: 212 },
  { left: -46, top: 208 },
  { left: -44, top: 230 }, // left I
  { left: -44, top: 235 },
  { left: -44, top: 240 },
  { left: -44, top: 245 },
  { left: -44, top: 250 },
  { left: -44, top: 255 },
  { left: -44, top: 260 },
  { left: -44, top: 265 },
  { left: -44, top: 270 },
  { left: -44, top: 275 },
  { left: -38, top: 230 }, // middle I
  { left: -38, top: 235 },
  { left: -38, top: 240 },
  { left: -38, top: 245 },
  { left: -38, top: 250 },
  { left: -38, top: 255 },
  { left: -38, top: 260 },
  { left: -38, top: 265 },
  { left: -38, top: 270 },
  { left: -38, top: 275 },
  { left: -32, top: 230 }, // right I
  { left: -32, top: 235 },
  { left: -32, top: 240 },
  { left: -32, top: 245 },
  { left: -32, top: 250 },
  { left: -32, top: 255 },
  { left: -32, top: 260 },
  { left: -32, top: 265 },
  { left: -32, top: 270 },
  { left: -32, top: 275 },
  { left: -14, top: 230 }, // left N 1
  { left: -14, top: 235 },
  { left: -14, top: 240 },
  { left: -14, top: 245 },
  { left: -14, top: 250 },
  { left: -14, top: 255 },
  { left: -14, top: 260 },
  { left: -14, top: 265 },
  { left: -14, top: 270 },
  { left: -14, top: 275 },
  { left: -8, top: 230 }, // middle N 1
  { left: -8, top: 235 },
  { left: -8, top: 240 },
  { left: -8, top: 245 },
  { left: -8, top: 250 },
  { left: -8, top: 255 },
  { left: -8, top: 260 },
  { left: -8, top: 265 },
  { left: -8, top: 270 },
  { left: -8, top: 275 },
  { left: -2, top: 230 }, // right N 1
  { left: -2, top: 235 },
  { left: -2, top: 240 },
  { left: -2, top: 245 },
  { left: -2, top: 250 },
  { left: -2, top: 255 },
  { left: -2, top: 260 },
  { left: -2, top: 265 },
  { left: -2, top: 270 },
  { left: -2, top: 275 },
  { left: 25, top: 230 }, // left N 2
  { left: 25, top: 235 },
  { left: 25, top: 240 },
  { left: 25, top: 245 },
  { left: 25, top: 250 },
  { left: 25, top: 255 },
  { left: 25, top: 260 },
  { left: 25, top: 265 },
  { left: 25, top: 270 },
  { left: 25, top: 275 },
  { left: 30, top: 231 }, // middle N 2
  { left: 31, top: 235 },
  { left: 31, top: 240 },
  { left: 31, top: 245 },
  { left: 31, top: 250 },
  { left: 31, top: 255 },
  { left: 31, top: 260 },
  { left: 31, top: 265 },
  { left: 31, top: 270 },
  { left: 31, top: 275 },
  { left: 32, top: 232 }, // right N 2
  { left: 34, top: 235 },
  { left: 35, top: 239 },
  { left: 36, top: 244 },
  { left: 37, top: 250 },
  { left: 37, top: 255 },
  { left: 37, top: 260 },
  { left: 37, top: 265 },
];

export { linkedinDotPositions };
