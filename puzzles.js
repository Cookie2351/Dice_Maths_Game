const puzzles =
[
    {
        date: "25/09/2026",
        devName: "SetPuzzle1", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 1, 0, 0],   // row 0
            [0, 0, 0, 1, 1, 0],   // row 1
            [0, 0, 0, 1, 1, 0],   // row 2
            [0, 0, 0, 1, 0, 0],   // row 3
            [0, 0, 1, 1, 1, 0],   // row 4
            [0, 0, 1, 0, 1, 0],   // row 5
            [0, 0, 1, 1, 1, 0],   // row 6
            [0, 0, 1, 0, 0, 0]    // row 7
        ],

        start: { row: 7, column: 2 },   // square has to be visible
        end:   { row: 0, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 3,
            west: 1
        },

        targetScore: 28,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",           // move 1 - move off start square - index 0
            "right",        // move 2
            "right",        // move 3
            "up",           // move 4
            "up",           // move 5       - index 4
            "left",         // move 6
            "up",           // move 7
            "up",           // move 8
            "up",           // move 9
            "up"            // move 10 - move to end square
        ],
    },

    {
        date: "26/09/2026",
        devName: "SetPuzzle2", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 1, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 1, 1],   // row 1
            [0, 1, 0, 1, 0, 0],   // row 2
            [0, 1, 1, 1, 0, 0],   // row 3
            [0, 0, 1, 1, 0, 0],   // row 4
            [0, 0, 1, 1, 0, 0],   // row 5
            [0, 1, 1, 1, 0, 0],   // row 6
            [0, 1, 1, 0, 0, 0]    // row 7
        ],

        start: { row: 7, column: 1 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 54,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "right",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "left",        // move 6
            "up",          // move 7
            "up",          // move 8
            "right",       // move 9
            "right",       // move 10
            "right",       // move 11
            "right",       // move 12
            "left",        // move 13
            "left",        // move 14
            "left",        // move 15
            "up",          // move 16 - move to end square
        ],
    },

    {
        date: "27/09/2026",
        devName: "SetPuzzle3", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 1, 1, 1, 0, 0],   // row 0
            [0, 1, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 0, 0],   // row 2
            [0, 1, 0, 0, 0, 0],   // row 3
            [0, 1, 1, 0, 0, 0],   // row 4
            [0, 1, 1, 0, 0, 0],   // row 5
            [0, 0, 1, 1, 0, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 6, column: 3 },   // square has to be visible
        end:   { row: 1, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 4,
            south: 6,
            west: 5
        },

        targetScore: 42,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "left",       // move 1 - move off start square - index 0
            "up",          // move 2
            "left",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "up",        // move 6
            "right",          // move 7
            "right",          // move 8
            "up",       // move 9
            "left",       // move 10 - move to end square
        ],
    },

    {
        date: "28/09/2026",
        devName: "SetPuzzle4", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 0, 0, 0],   // row 0
            [0, 0, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 0, 1, 0],   // row 2
            [0, 1, 1, 1, 1, 0],   // row 3
            [0, 1, 1, 0, 1, 0],   // row 4
            [0, 1, 0, 0, 1, 0],   // row 5
            [0, 1, 1, 1, 1, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 6, column: 1 },   // square has to be visible
        end:   { row: 1, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        targetScore: 33,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",       // move 1 - move off start square - index 0
            "up",          // move 2
            "right",          // move 3
            "right",          // move 4
            "right",          // move 5       - index 4
            "up",        // move 6
            "up",          // move 7
            "up",          // move 8
            "left",       // move 9
            "left",       // move 10 - move to end square
        ],
    },

    {
        date: "29/09/2026",
        devName: "SetPuzzle5", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 0, 0, 0],   // row 0
            [0, 0, 1, 1, 0, 0],   // row 1
            [0, 0, 1, 0, 0, 0],   // row 2
            [0, 1, 1, 1, 0, 0],   // row 3
            [0, 1, 1, 1, 0, 0],   // row 4
            [0, 1, 0, 1, 0, 0],   // row 5
            [0, 1, 1, 1, 0, 0],   // row 6
            [0, 1, 1, 1, 0, 0]    // row 7
        ],

        start: { row: 7, column: 2 },   // square has to be visible
        end:   { row: 1, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 6,
            south: 5,
            west: 4
        },

        targetScore: 34,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "right",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "left",        // move 6
            "up",          // move 7
            "up",          // move 8
            "right",       // move 9 - move to end square
        ],
    },

    {
        date: "30/09/2026",
        devName: "SetPuzzle6", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 1, 1, 1, 1, 0],   // row 0
            [0, 1, 1, 0, 1, 1],   // row 1
            [0, 1, 1, 1, 1, 1],   // row 2
            [0, 0, 1, 1, 0, 0],   // row 3
            [0, 0, 1, 1, 0, 0],   // row 4
            [0, 0, 1, 1, 0, 0],   // row 5
            [0, 0, 1, 1, 0, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 6, column: 3 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 46,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "left",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "right",        // move 6
            "right",          // move 7
            "right",          // move 8
            "up",       // move 9
            "left",       // move 10
            "up",       // move 11
            "left",       // move 12
            "left",        // move 13 - move to end square
        ],
    },

    {
        date: "01/10/2026",
        devName: "SetPuzzle7", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 0, 1, 1],   // row 0
            [0, 0, 1, 1, 1, 0],   // row 1
            [1, 1, 1, 0, 0, 0],   // row 2
            [1, 1, 1, 1, 0, 0],   // row 3
            [1, 1, 0, 1, 0, 0],   // row 4
            [0, 1, 0, 1, 0, 0],   // row 5
            [1, 1, 1, 1, 0, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 6, column: 0 },   // square has to be visible
        end:   { row: 0, column: 5 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        targetScore: 55,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "right",       // move 1 - move off start square - index 0
            "right",          // move 2
            "right",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "up",        // move 6
            "left",          // move 7
            "left",          // move 8
            "up",       // move 9
            "right",       // move 10
            "up",       // move 11
            "right",       // move 12
            "right",        // move 13
            "up",        // move 14
            "right",        // move 15 - move to end square
        ],
    },

    {
        date: "02/10/2026",
        devName: "SetPuzzle8", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 1, 1, 0],   // row 2
            [0, 1, 1, 0, 1, 0],   // row 3
            [0, 1, 1, 1, 1, 0],   // row 4
            [0, 0, 1, 1, 0, 0],   // row 5
            [0, 0, 1, 1, 0, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 3, column: 2 },   // square has to be visible
        end:   { row: 3, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 6,
            west: 4
        },

        targetScore: 42,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "left",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "right",          // move 4
            "down",          // move 5       - index 4
            "right",        // move 6
            "up",          // move 7
            "right",          // move 8
            "down",       // move 9
            "down",       // move 10 - move to end square
        ],
    },

    {
        date: "03/10/2026",
        devName: "SetPuzzle9", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 1, 1, 0, 0],   // row 0
            [0, 0, 1, 1, 1, 0],   // row 1
            [0, 0, 1, 0, 1, 0],   // row 2
            [0, 0, 1, 0, 1, 1],   // row 3
            [1, 1, 1, 1, 1, 1],   // row 4
            [0, 1, 0, 1, 0, 0],   // row 5
            [0, 1, 1, 1, 0, 0],   // row 6
            [0, 0, 1, 1, 0, 0]    // row 7
        ],

        start: { row: 4, column: 0 },   // square has to be visible
        end:   { row: 3, column: 5 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 3,
            west: 2
        },

        targetScore: 54,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "right",       // move 1 - move off start square - index 0
            "right",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "up",        // move 6
            "right",          // move 7
            "down",          // move 8
            "right",       // move 9
            "down",       // move 10
            "down",       // move 11
            "down",       // move 12
            "right",        // move 13
            "up",        // move 14 - move to end square
        ],
    },

    {
        date: "04/10/2026",
        devName: "SetPuzzle10", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 1, 0, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 1, 0],   // row 1
            [0, 1, 1, 0, 1, 0],   // row 2
            [0, 0, 1, 0, 1, 0],   // row 3
            [0, 1, 1, 1, 1, 0],   // row 4
            [0, 1, 1, 1, 0, 0],   // row 5
            [0, 0, 0, 1, 1, 1],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 0, column: 1 },   // square has to be visible
        end:   { row: 6, column: 5 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 4,
            south: 1,
            west: 2
        },

        targetScore: 36,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "down",       // move 1 - move off start square - index 0
            "down",          // move 2
            "right",          // move 3
            "down",          // move 4
            "down",          // move 5       - index 4
            "right",        // move 6
            "down",          // move 7
            "down",          // move 8
            "right",       // move 9
            "right",       // move 10 - move to end square
        ],
    },

    //-------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------//
    //                                  TEST PUZZLE LAYOUT AND DICE                                          //
    //-------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------//
    {
        date: "TEST PUZZLE",
        devName: "CurrentPuzzle", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 1, 1, 1, 0],   // row 0
            [0, 0, 1, 1, 1, 0],   // row 1
            [0, 0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 1, 0],   // row 3
            [0, 0, 1, 1, 1, 0],   // row 4
            [0, 0, 1, 1, 1, 0],   // row 5
            [0, 0, 1, 1, 1, 0],   // row 6
            [0, 0, 1, 1, 1, 0]    // row 7
        ],

        start: { row: 7, column: 2 },   // square has to be visible
        end:   { row: 0, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 1,
            west: 1
        },

        targetScore: 36,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "up",        // move 6
            "up",          // move 7
            "right",          // move 8
            "down",       // move 9
            "right",       // move 10
            "up",       // move 11 - move to end square
            "",         // extra move for testing wrong moves correct score
            "",         // extra move for testing wrong moves correct score
        ],
    },
    //-------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------//


// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                  Blank Puzzle                                    //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
    {
        date: "dd/mm/yyyy",
        devName: "BlankPuzzle0", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 0, 0, 0],   // row 0
            [0, 0, 0, 0, 0, 0],   // row 1
            [0, 0, 0, 0, 0, 0],   // row 2
            [0, 0, 0, 0, 0, 0],   // row 3
            [0, 0, 0, 0, 0, 0],   // row 4
            [0, 0, 0, 0, 0, 0],   // row 5
            [0, 0, 0, 0, 0, 0],   // row 6
            [0, 0, 0, 0, 0, 0]    // row 7
        ],

        start: { row: 7, column: 1 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 100,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "",       // move 1 - move off start square - index 0
            "",          // move 2
            "",          // move 3
            "",          // move 4
            "",          // move 5       - index 4
            "",        // move 6
            "",          // move 7
            "",          // move 8
            "",       // move 9
            "",       // move 10
            "",       // move 11
            "",       // move 12
            "",        // move 13
            "",        // move 14
            "",        // move 15
            "",       // move 16
            "",        // move 17
            "",        // move 18
            "",        // move 19
            "",          // move 20 - move to end square
        ],
    }
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                                                                  //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
];