const puzzles =
[
    {
        date: "01/11/2026",
        devName: "SetPuzzle1", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 1],   // row 0
            [0, 1, 1, 1, 1],   // row 1
            [1, 1, 0, 0, 1],   // row 2
            [1, 0, 0, 1, 1],   // row 3
            [1, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 0 },   // square has to be visible
        end:   { row: 0, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win
                
                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "right",        // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 4, column: 4 },
                multiply: { row: 1, column: 4 },
                square: null,

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "down",          // move 8
                    "right",           // move 9
                    "up",        // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1 },
                multiply: { row: 4, column: 4 },
                square: { row: 0, column: 3 },

                targetScore: 46,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",        // move 11
                    "up",          // move 12
                    "right",           // move 13
                    "right",        // move 14
                    "up",        // move 15
                    "right",        // move 16 - move to end square
                ]
            }
        }
    },

    {
        date: "02/11/2026",
        devName: "SetPuzzle2", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 1, 0],   // row 0
            [1, 0, 1, 1, 1],   // row 1
            [1, 1, 1, 0, 1],   // row 2
            [1, 1, 0, 1, 1],   // row 3
            [0, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 2, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 5,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "right",          // move 8
                    "down",           // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3 },
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 51,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "right",           // move 9
                    "down",        // move 10
                    "left",         // move 11
                    "down",         // move 12 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2 },
                multiply: { row: 2, column: 0},
                square: { row: 0, column: 3},

                targetScore: 58,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "left",          // move 7
                    "up",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",           // move 11
                    "down",           // move 12
                    "right",           // move 13
                    "right",           // move 14 - move to end square
                ]
            }
        }
    },

    {
        date: "03/11/2026",
        devName: "SetPuzzle3", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 0, 0],   // row 0
            [1, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 1],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 1,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 30,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "down",          // move 7                            #2 left
                    "left",          // move 8 - move to end square       #2 down
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 0, column: 2},
                square: null,

                targetScore: 17,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 0, column: 0},
                square: { row: 4, column: 2},

                targetScore: 72,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "down",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "up",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            }
        }
    },

    {
        date: "04/11/2026",
        devName: "SetPuzzle4", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 2, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 2,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "up",          // move 6
                    "right",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 3, column: 2},
                square: null,

                targetScore: 42,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: { row: 2, column: 1},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "down",          // move 3
                    "down",          // move 4
                    "down",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "05/11/2026",
        devName: "SetPuzzle5", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 0, 0, 0],   // row 3
            [0, 1, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 6,
            south: 3,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 33,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",        // move 7
                    "up",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3},
                multiply: { row: 2, column: 3},
                square: null,

                targetScore: 48,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "down",        // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "up",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 1, column: 1},

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "up",          // move 8
                    "left",         // move 9                           - or up
                    "up",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "06/11/2026",
        devName: "SetPuzzle6", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 1, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [1, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 0 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 4,
            south: 5,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "left",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 19,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 4, column: 2},
                multiply: { row: 2, column: 4},
                square: { row: 2, column: 2},

                targetScore: 85,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "left",        // move 7
                    "left",          // move 8
                    "up",         // move 9                           - or up
                    "left",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "07/11/2026",
        devName: "SetPuzzle7", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 1, 0, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [1, 1, 1, 1, 1],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 2, column: 2 },   // square has to be visible
        end:   { row: 4, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 6,
            west: 4
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 28,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "left",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 20,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 0, column: 1},
                square: { row: 2, column: 3},

                targetScore: 13,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "08/11/2026",
        devName: "SetPuzzle8", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 0, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 3, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 4,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 38,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 2},
                multiply: { row: 1, column: 2},
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "down",         // move 4
                    "left",          // move 5       - index 4
                    "right",          // move 6
                    "right",          // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 2, column: 2},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "09/11/2026",
        devName: "SetPuzzle9", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 6,
            west: 2
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",         // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "up",          // move 5       - index 4
                    "left",          // move 6
                    "left",          // move 7
                    "up",        // move 8
                    "left",          // move 9 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",         // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",          // move 7
                    "left",          // move 8
                    "left",         // move 9 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 2},
                multiply: { row: 2, column: 1},
                square: { row: 2, column: 2},

                targetScore: 43,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "left",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "up",          // move 8
                    "left",          // move 9 - move to end square
                ]
            }
        }
    },

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //







// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //








// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

//                              DUPLICATE PUZZLES                                   //
    {
        date: "10/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 1],   // row 0
            [0, 1, 1, 1, 1],   // row 1
            [1, 1, 0, 0, 1],   // row 2
            [1, 0, 0, 1, 1],   // row 3
            [1, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 0 },   // square has to be visible
        end:   { row: 0, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win
                
                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "right",        // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 4, column: 4 },
                multiply: { row: 1, column: 4 },
                square: null,

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "down",          // move 8
                    "right",           // move 9
                    "up",        // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1 },
                multiply: { row: 4, column: 4 },
                square: { row: 0, column: 3 },

                targetScore: 46,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",        // move 11
                    "up",          // move 12
                    "right",           // move 13
                    "right",        // move 14
                    "up",        // move 15
                    "right",        // move 16 - move to end square
                ]
            }
        }
    },

    {
        date: "11/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 1, 0],   // row 0
            [1, 0, 1, 1, 1],   // row 1
            [1, 1, 1, 0, 1],   // row 2
            [1, 1, 0, 1, 1],   // row 3
            [0, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 2, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 5,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "right",          // move 8
                    "down",           // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3 },
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 51,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "right",           // move 9
                    "down",        // move 10
                    "left",         // move 11
                    "down",         // move 12 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2 },
                multiply: { row: 2, column: 0},
                square: { row: 0, column: 3},

                targetScore: 58,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "left",          // move 7
                    "up",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",           // move 11
                    "down",           // move 12
                    "right",           // move 13
                    "right",           // move 14 - move to end square
                ]
            }
        }
    },

    {
        date: "12/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 0, 0],   // row 0
            [1, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 1],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 1,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 30,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "down",          // move 7                            #2 left
                    "left",          // move 8 - move to end square       #2 down
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 0, column: 2},
                square: null,

                targetScore: 17,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 0, column: 0},
                square: { row: 4, column: 2},

                targetScore: 72,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "down",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "up",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            }
        }
    },

    {
        date: "13/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 2, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 2,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "up",          // move 6
                    "right",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 3, column: 2},
                square: null,

                targetScore: 42,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: { row: 2, column: 1},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "down",          // move 3
                    "down",          // move 4
                    "down",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "14/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 0, 0, 0],   // row 3
            [0, 1, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 6,
            south: 3,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 33,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",        // move 7
                    "up",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3},
                multiply: { row: 2, column: 3},
                square: null,

                targetScore: 48,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "down",        // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "up",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 1, column: 1},

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "up",          // move 8
                    "left",         // move 9                           - or up
                    "up",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "15/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 1, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [1, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 0 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 4,
            south: 5,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "left",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 19,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 4, column: 2},
                multiply: { row: 2, column: 4},
                square: { row: 2, column: 2},

                targetScore: 85,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "left",        // move 7
                    "left",          // move 8
                    "up",         // move 9                           - or up
                    "left",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "16/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 1, 0, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [1, 1, 1, 1, 1],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 2, column: 2 },   // square has to be visible
        end:   { row: 4, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 6,
            west: 4
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 28,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "left",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 20,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 0, column: 1},
                square: { row: 2, column: 3},

                targetScore: 13,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "17/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 0, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 3, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 4,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 38,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 2},
                multiply: { row: 1, column: 2},
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "down",         // move 4
                    "left",          // move 5       - index 4
                    "right",          // move 6
                    "right",          // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 2, column: 2},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "18/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 6,
            west: 2
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",         // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "up",          // move 5       - index 4
                    "left",          // move 6
                    "left",          // move 7
                    "up",        // move 8
                    "left",          // move 9 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",         // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",          // move 7
                    "left",          // move 8
                    "left",         // move 9 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 2},
                multiply: { row: 2, column: 1},
                square: { row: 2, column: 2},

                targetScore: 43,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "left",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "up",          // move 8
                    "left",          // move 9 - move to end square
                ]
            }
        }
    },






// -------------------------------------------------------------------------------- //
//                                 DUPLICATE SET #2                                 //
// -------------------------------------------------------------------------------- //


    {
        date: "19/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 1],   // row 0
            [0, 1, 1, 1, 1],   // row 1
            [1, 1, 0, 0, 1],   // row 2
            [1, 0, 0, 1, 1],   // row 3
            [1, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 0 },   // square has to be visible
        end:   { row: 0, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win
                
                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "right",        // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 4, column: 4 },
                multiply: { row: 1, column: 4 },
                square: null,

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "down",          // move 8
                    "right",           // move 9
                    "up",        // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1 },
                multiply: { row: 4, column: 4 },
                square: { row: 0, column: 3 },

                targetScore: 46,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",        // move 11
                    "up",          // move 12
                    "right",           // move 13
                    "right",        // move 14
                    "up",        // move 15
                    "right",        // move 16 - move to end square
                ]
            }
        }
    },

    {
        date: "20/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 1, 0],   // row 0
            [1, 0, 1, 1, 1],   // row 1
            [1, 1, 1, 0, 1],   // row 2
            [1, 1, 0, 1, 1],   // row 3
            [0, 1, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 2, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 5,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "right",          // move 8
                    "down",           // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3 },
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 51,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "right",           // move 9
                    "down",        // move 10
                    "left",         // move 11
                    "down",         // move 12 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2 },
                multiply: { row: 2, column: 0},
                square: { row: 0, column: 3},

                targetScore: 58,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "left",          // move 7
                    "up",          // move 8
                    "left",           // move 9
                    "left",        // move 10
                    "down",           // move 11
                    "down",           // move 12
                    "right",           // move 13
                    "right",           // move 14 - move to end square
                ]
            }
        }
    },

    {
        date: "21/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 0, 0],   // row 0
            [1, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 1],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 1,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 30,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "down",          // move 7                            #2 left
                    "left",          // move 8 - move to end square       #2 down
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 0, column: 2},
                square: null,

                targetScore: 17,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 0, column: 0},
                square: { row: 4, column: 2},

                targetScore: 72,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "down",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "up",          // move 7
                    "up",          // move 8
                    "left",          // move 9
                    "down",          // move 10 - move to end square
                ]
            }
        }
    },

    {
        date: "22/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 2, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 2,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "up",          // move 6
                    "right",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 3, column: 2},
                square: null,

                targetScore: 42,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: { row: 2, column: 1},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "down",          // move 3
                    "down",          // move 4
                    "down",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "23/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 0, 0, 0],   // row 3
            [0, 1, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 6,
            south: 3,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 33,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",        // move 7
                    "up",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 0, column: 3},
                multiply: { row: 2, column: 3},
                square: null,

                targetScore: 48,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "down",        // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "up",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 1, column: 1},

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "up",          // move 8
                    "left",         // move 9                           - or up
                    "up",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "24/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 1, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [1, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 3, column: 0 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 4,
            south: 5,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",          // move 9
                    "left",          // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 19,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "up",        // move 7
                    "left",          // move 8
                    "left",           // move 9
                    "left",           // move 10 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 4, column: 2},
                multiply: { row: 2, column: 4},
                square: { row: 2, column: 2},

                targetScore: 85,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "left",        // move 7
                    "left",          // move 8
                    "up",         // move 9                           - or up
                    "left",          // move 10 - move to end square      - or right
                ]
            }
        }
    },

    {
        date: "25/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 1, 0, 1, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [1, 1, 1, 1, 1],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 2, column: 2 },   // square has to be visible
        end:   { row: 4, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 6,
            west: 4
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 28,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "left",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "right",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 1},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 20,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "right",          // move 5       - index 4
                    "right",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 0, column: 1},
                square: { row: 2, column: 3},

                targetScore: 13,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "up",       // move 1 - move off start square - index 0
                    "left",          // move 2
                    "right",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "down",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "26/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 1, 1, 1, 0],   // row 3
            [0, 0, 0, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 3, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 4,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 38,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "down",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 2},
                multiply: { row: 1, column: 2},
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "up",          // move 3
                    "down",         // move 4
                    "left",          // move 5       - index 4
                    "right",          // move 6
                    "right",          // move 7
                    "down",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 1},
                multiply: { row: 1, column: 3},
                square: { row: 2, column: 2},

                targetScore: 41,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "left",          // move 6
                    "down",        // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "27/11/2026",

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 0, 0, 0],   // row 0
            [1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 1, 1],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 6,
            west: 2
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "left",         // move 2
                    "up",          // move 3
                    "right",          // move 4
                    "up",          // move 5       - index 4
                    "left",          // move 6
                    "left",          // move 7
                    "up",        // move 8
                    "left",          // move 9 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: null,

                targetScore: 57,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",         // move 4
                    "right",          // move 5       - index 4
                    "up",          // move 6
                    "left",          // move 7
                    "left",          // move 8
                    "left",         // move 9 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 3, column: 2},
                multiply: { row: 2, column: 1},
                square: { row: 2, column: 2},

                targetScore: 43,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "up",          // move 4
                    "left",          // move 5       - index 4
                    "down",          // move 6
                    "left",        // move 7
                    "up",          // move 8
                    "left",          // move 9 - move to end square
                ]
            }
        }
    },




// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //




// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                  Blank Puzzle                                    //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
    {
        date: "00/00/0000",
        devName: "Blank", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 0, 0, 0, 0],   // row 1
            [0, 0, 0, 0, 0],   // row 2
            [0, 0, 0, 0, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
//   columns 0, 1, 2, 3, 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 50,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5
                    "up",          // move 6       - index 4
                    "right",        // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 2, column: 3},
                multiply: { row: 3, column: 2},
                square: null,

                targetScore: 100,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "down",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 1, column: 2},
                multiply: { row: 3, column: 3},
                square: { row: 2, column: 1},

                targetScore: 200,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "down",          // move 3
                    "down",          // move 4
                    "down",          // move 5       - index 4
                    "right",        // move 6
                    "up",          // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                                                                  //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

];