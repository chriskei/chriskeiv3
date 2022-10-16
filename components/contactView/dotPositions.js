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
    { left: -268, top: 434 }, // top left
    { left: -267, top: 429 },
    { left: -266, top: 426 },
    { left: -265, top: 424 },
    { left: -264, top: 423 },
    { left: -262, top: 422 },
    { left: -259, top: 421 },
    { left: -254, top: 420 },

    { left: -249, top: 420 }, // top
    { left: -244, top: 420 },
    { left: -239, top: 420 },
    { left: -234, top: 420 },
    { left: -229, top: 420 },
    { left: -224, top: 420 },
    { left: -219, top: 420 },
    { left: -214, top: 420 },
    { left: -209, top: 420 },

    { left: -204, top: 420 }, // top right
    { left: -199, top: 421 },
    { left: -196, top: 422 },
    { left: -194, top: 423 },
    { left: -193, top: 424 },
    { left: -192, top: 426 },
    { left: -191, top: 429 },
    { left: -190, top: 434 },

    { left: -190, top: 439 }, // right
    { left: -190, top: 444 },
    { left: -190, top: 449 },
    { left: -190, top: 454 },
    { left: -190, top: 459 },
    { left: -190, top: 464 },
    { left: -190, top: 469 },
    { left: -190, top: 474 },
    { left: -190, top: 479 },

    { left: -190, top: 484 }, // bottom right
    { left: -191, top: 489 },
    { left: -192, top: 492 },
    { left: -193, top: 494 },
    { left: -194, top: 495 },
    { left: -196, top: 496 },
    { left: -199, top: 497 },
    { left: -204, top: 498 },

    { left: -209, top: 498 }, // bottom
    { left: -214, top: 498 },
    { left: -219, top: 498 },
    { left: -224, top: 498 },
    { left: -229, top: 498 },
    { left: -234, top: 498 },
    { left: -239, top: 498 },
    { left: -244, top: 498 },
    { left: -249, top: 498 },

    { left: -254, top: 498 }, // bottom left
    { left: -259, top: 497 },
    { left: -262, top: 496 },
    { left: -264, top: 495 },
    { left: -265, top: 494 },
    { left: -266, top: 492 },
    { left: -267, top: 489 },
    { left: -268, top: 484 },

    { left: -268, top: 479 }, // left
    { left: -268, top: 474 },
    { left: -268, top: 469 },
    { left: -268, top: 464 },
    { left: -268, top: 459 },
    { left: -268, top: 454 },
    { left: -268, top: 449 },
    { left: -268, top: 444 },
    { left: -268, top: 439 },

    { left: -244, top: 459 }, // center left

    { left: -243, top: 454 },
    { left: -242, top: 451 },
    { left: -241, top: 449 },
    { left: -240, top: 448 },
    { left: -239, top: 447 },
    { left: -237, top: 446 },
    { left: -234, top: 445 },

    { left: -229, top: 444 }, // center top

    { left: -224, top: 445 },
    { left: -221, top: 446 },
    { left: -219, top: 447 },
    { left: -218, top: 448 },
    { left: -217, top: 449 },
    { left: -216, top: 451 },
    { left: -215, top: 454 },

    { left: -214, top: 459 }, // center right

    { left: -215, top: 464 },
    { left: -216, top: 467 },
    { left: -217, top: 469 },
    { left: -218, top: 470 },
    { left: -219, top: 471 },
    { left: -221, top: 472 },
    { left: -224, top: 473 },

    { left: -229, top: 474 }, // center bottom

    { left: -234, top: 473 },
    { left: -237, top: 472 },
    { left: -239, top: 471 },
    { left: -240, top: 470 },
    { left: -241, top: 469 },
    { left: -242, top: 467 },
    { left: -243, top: 464 },

    { left: -206, top: 436 }, // dot
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
