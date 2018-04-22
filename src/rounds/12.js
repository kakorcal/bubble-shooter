import { AlphabetizedMap } from '../utils/EntityMap';

let { _,x,b,c,d,e,f,g,h,i,j,k,l,m } = AlphabetizedMap;
/* 
    b=flame=red
    c=N=blue
    d=coin=green
    e=star=yellow
    f=solidBlack=purple
    g=moon=skyBlue
    h=heart=orange
    i=triangle=pink
    j=blank=white
    k=grey=grey
    l=special=rainbow
    m=block=gold
*/

export default [
    [k,k,0,f,f,0,b,b],
     [h,0,0,e,0,0,i,_],
    [0,k,e,b,i,f,h,0],
     [i,0,0,e,0,0,k,_],
    [0,k,e,b,i,f,h,0],
     [f,0,h,0,b,h,i,_],
    [k,e,b,i,f,h,0,l],
     [0,0,0,0,0,0,f,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];