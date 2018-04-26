/* 
    Map of entities (bubbles, blocks etc.. ) for quick access
    AlphabetizedMap is used for creating readable rounds
 */
const EntityMap = {
    empty: null,
    outOfBounds: -1,
    zero: 0,
    // Colors
    BUBBLE_START: 1,
    BUBBLE_END: 12,
    red: 1,
    blue: 2,
    grey: 3,
    yellow: 4,
    purple: 5,
    skyBlue: 6,
    orange: 7,
    pink: 8,
    white: 9,
    green: 10,
    rainbow: 11,
    gold: 12,
    // TODO: stripe (knocks all bubbles that it touches), creature (???)
    colors: {
        1: 'red',
        2: 'blue',
        3: 'grey',
        4: 'yellow',
        5: 'purple',
        6: 'skyBlue',
        7: 'orange',
        8: 'pink',
        9: 'white',
        10: 'green',
        11: 'rainbow',
        12: 'gold'
    },

    // Game Objects
    GAME_OBJECT_START: 50,
    GAME_OBJECT_END: 55,
    tile: 50,
    polnareff: 51,
    launcher: 52,
    bubble: 53,
    block: 54,
    gameObjects: {
        50: 'tile',
        51: 'polnareff',
        52: 'launcher',
        53: 'bubble',
        54: 'block',
    },

    // special collisions
    collision: {
        rainbow: {
            name: 'rainbow-1',
            stages: [3,16,20,24,38,45,49,50]
        }
        
    }
};

// to make the map easier to read
const AlphabetizedMap = {
    _: null,
    x: -1,
    a: 0,
    // Colors
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,

    // Game Objects
    A: 50,
    B: 51,
    C: 52,
    D: 53,
    E: 54
};

export {EntityMap, AlphabetizedMap};