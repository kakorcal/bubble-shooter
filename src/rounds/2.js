import { AlphabetizedMap } from '../utils/EntityMap';

let { _,x,a,b,c,d,e,f,g,h,i,o } = AlphabetizedMap;
/* 
    b=flame=red
    f=solidBlack=purple
    d=coin=green
    e=star=yellow
    i=block=gold
    g=moon=skyBlue
    h=heart=orange
*/

export default [
    [0,0,0,g,g,0,0,0],
     [0,0,0,f,g,0,0,_],
    [0,0,0,f,0,0,0,0],
     [0,0,0,h,0,0,0,_],
    [0,0,0,0,h,0,0,0],
     [0,0,0,d,0,0,0,_],
    [0,0,0,d,0,0,0,0],
     [0,0,0,e,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];