const resumeDotPositions = [
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
  { left: 190, top: 493 },
  { left: 190, top: 488 },
  { left: 190, top: 483 },
  { left: 190, top: 478 },
  { left: 190, top: 473 },
  { left: 190, top: 468 },
  { left: 190, top: 463 },
  { left: 190, top: 458 },
  { left: 190, top: 453 },
  { left: 190, top: 448 },
  { left: 190, top: 443 },
  { left: 190, top: 438 },
  { left: 190, top: 433 },
  { left: 190, top: 428 },
  { left: 190, top: 423 },
  { left: 190, top: 420 }, // top left
  { left: 195, top: 420 },
  { left: 200, top: 420 },
  { left: 205, top: 420 },
  { left: 210, top: 420 },
  { left: 215, top: 420 },
  { left: 220, top: 420 },
  { left: 225, top: 420 },
  { left: 230, top: 420 },
  { left: 233, top: 423 }, // corner
  { left: 236, top: 426 },
  { left: 239, top: 429 },
  { left: 242, top: 432 },
  { left: 245, top: 435 },
  { left: 248, top: 438 },
  { left: 226, top: 425 }, // flipped part
  { left: 226, top: 430 },
  { left: 226, top: 435 },
  { left: 226, top: 440 },
  { left: 226, top: 442 },
  { left: 230, top: 442 },
  { left: 235, top: 442 },
  { left: 240, top: 442 },
  { left: 245, top: 442 },
  { left: 203, top: 438 },
  { left: 208, top: 438 },
  { left: 213, top: 438 },
  { left: 203, top: 455 },
  { left: 208, top: 455 },
  { left: 213, top: 455 },
  { left: 218, top: 455 },
  { left: 223, top: 455 },
  { left: 228, top: 455 },
  { left: 233, top: 455 },
  { left: 235, top: 455 },
  { left: 203, top: 470 },
  { left: 208, top: 470 },
  { left: 213, top: 470 },
  { left: 218, top: 470 },
  { left: 223, top: 470 },
  { left: 228, top: 470 },
  { left: 233, top: 470 },
  { left: 235, top: 470 },
  { left: 235, top: 470 },
  { left: 203, top: 485 },
  { left: 208, top: 485 },
  { left: 213, top: 485 },
  { left: 218, top: 485 },
  { left: 223, top: 485 },
  { left: 228, top: 485 },
  { left: 233, top: 485 },
  { left: 235, top: 485 },
  { left: 235, top: 485 },
  { left: 248, top: 443 }, // top right
  { left: 248, top: 448 },
  { left: 248, top: 453 },
  { left: 248, top: 458 },
  { left: 248, top: 463 },
  { left: 248, top: 468 },
  { left: 248, top: 473 },
  { left: 248, top: 478 },
  { left: 248, top: 483 },
  { left: 248, top: 488 },
  { left: 248, top: 493 },
  { left: 248, top: 498 }, // bottom right
  { left: 243, top: 498 },
  { left: 238, top: 498 },
  { left: 233, top: 498 },
  { left: 228, top: 498 },
  { left: 223, top: 498 },
  { left: 218, top: 498 },
  { left: 213, top: 498 },
  { left: 208, top: 498 },
  { left: 203, top: 498 },
  { left: 198, top: 498 },
  { left: 193, top: 498 },
  { left: 190, top: 498 }, // bottom left
];

export { resumeDotPositions };
