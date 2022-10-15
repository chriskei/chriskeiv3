const dotPositions = {
  contact: [
    { left: 0, top: 0 },
    { left: 118, top: 118 },
  ],
  github: [
    { left: -260, top: 208 }, // left before head
    { left: -261, top: 203 },
    { left: -260, top: 198 },
    { left: -253, top: 195 },
    { left: -258, top: 193 }, // tip of left ear
    { left: -250, top: 198 },
    { left: -248, top: 201 },
    { left: -241, top: 200 },
    { left: -236, top: 199 },
    { left: -231, top: 198 }, // left top head midpoint
    { left: -225, top: 198 }, // right top head midpoint
    { left: -220, top: 199 },
    { left: -215, top: 200 },
    { left: -210, top: 201 },
    { left: -208, top: 198 },
    { left: -200, top: 193 }, // tip of right ear
    { left: -205, top: 195 },
    { left: -198, top: 198 },
    { left: -197, top: 203 },
    { left: -198, top: 208 }, // right before head

    { left: -263, top: 213 }, // left start head
    { left: -265, top: 218 },
    { left: -266, top: 223 },
    { left: -267, top: 228 },
    { left: -267, top: 233 },
    { left: -265, top: 238 },
    { left: -262, top: 242 },
    { left: -258, top: 246 },
    { left: -253, top: 249 },
    { left: -248, top: 250 },
    { left: -243, top: 251 }, // left end head

    { left: -195, top: 213 }, // right start head
    { left: -193, top: 218 },
    { left: -192, top: 223 },
    { left: -191, top: 228 },
    { left: -191, top: 232 },
    { left: -193, top: 238 },
    { left: -196, top: 242 },
    { left: -200, top: 246 },
    { left: -205, top: 249 },
    { left: -210, top: 250 },
    { left: -215, top: 251 }, // right end head

    { left: -245, top: 256 }, // left start body
    { left: -246, top: 261 },
    { left: -247, top: 266 },
    { left: -247, top: 271 },
    { left: -247, top: 276 },
    { left: -247, top: 281 },

    { left: -213, top: 256 }, // right start body
    { left: -212, top: 261 },
    { left: -211, top: 266 },
    { left: -211, top: 271 },
    { left: -211, top: 276 },
    { left: -211, top: 281 },

    { left: -250, top: 267 }, // tail
    { left: -255, top: 270 },
    { left: -260, top: 271 },
    { left: -265, top: 270 },
    { left: -268, top: 267 },
    { left: -271, top: 264 },
    { left: -274, top: 262 },
    { left: -278, top: 261 },
  ],
  linkedin: [
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
  ],
  email: [
    { left: 180, top: 206 }, // top left
    { left: 258, top: 206 }, // top right
    { left: 180, top: 264 }, // bottom left
    { left: 258, top: 264 }, // bottom right

    { left: 185, top: 206 }, // top
    { left: 190, top: 206 },
    { left: 195, top: 206 },
    { left: 200, top: 206 },
    { left: 205, top: 206 },
    { left: 210, top: 206 },
    { left: 215, top: 206 },
    { left: 220, top: 206 },
    { left: 225, top: 206 },
    { left: 230, top: 206 },
    { left: 235, top: 206 },
    { left: 240, top: 206 },
    { left: 245, top: 206 },
    { left: 250, top: 206 },
    { left: 255, top: 206 },

    { left: 185, top: 264 }, // bottom
    { left: 190, top: 264 },
    { left: 195, top: 264 },
    { left: 200, top: 264 },
    { left: 205, top: 264 },
    { left: 210, top: 264 },
    { left: 215, top: 264 },
    { left: 220, top: 264 },
    { left: 225, top: 264 },
    { left: 230, top: 264 },
    { left: 235, top: 264 },
    { left: 240, top: 264 },
    { left: 245, top: 264 },
    { left: 250, top: 264 },
    { left: 255, top: 264 },

    { left: 180, top: 211 }, // left
    { left: 180, top: 216 },
    { left: 180, top: 221 },
    { left: 180, top: 226 },
    { left: 180, top: 231 },
    { left: 180, top: 236 },
    { left: 180, top: 241 },
    { left: 180, top: 246 },
    { left: 180, top: 251 },
    { left: 180, top: 256 },
    { left: 180, top: 261 },

    { left: 258, top: 211 }, // right
    { left: 258, top: 216 },
    { left: 258, top: 221 },
    { left: 258, top: 226 },
    { left: 258, top: 231 },
    { left: 258, top: 236 },
    { left: 258, top: 241 },
    { left: 258, top: 246 },
    { left: 258, top: 251 },
    { left: 258, top: 256 },
    { left: 258, top: 261 },

    { left: 219, top: 245 }, // middle

    { left: 215, top: 241 }, // left upper bridge
    { left: 211, top: 237 },
    { left: 207, top: 233 },
    { left: 203, top: 229 },
    { left: 199, top: 225 },
    { left: 195, top: 221 },
    { left: 191, top: 217 },
    { left: 187, top: 213 },

    { left: 223, top: 241 }, // right upper bridge
    { left: 227, top: 237 },
    { left: 231, top: 233 },
    { left: 235, top: 229 },
    { left: 239, top: 225 },
    { left: 243, top: 221 },
    { left: 247, top: 217 },
    { left: 251, top: 213 },

    { left: 187, top: 257 }, // left lower bridge
    { left: 191, top: 253 },
    { left: 195, top: 249 },
    { left: 199, top: 245 },
    { left: 203, top: 241 },

    { left: 251, top: 257 }, // right lower bridge
    { left: 247, top: 253 },
    { left: 243, top: 249 },
    { left: 239, top: 245 },
    { left: 235, top: 241 },
  ],
  instagram: [
    { left: -288, top: 400 },
    { left: -170, top: 518 },
  ],
  tiktok: [
    { left: -64, top: 400 },
    { left: 54, top: 518 },
  ],
  coffee: [
    { left: 160, top: 400 },
    { left: 278, top: 518 },
  ],
};

export { dotPositions };
