import { global } from '../global';
export class AOC_03_2020{

    public static abailar(){
        const caminos:{c:number,f:number}[]=[
            {c:1,f:1},
            {c:3,f:1},
            {c:5,f:1},
            {c:7,f:1},
            {c:1,f:2},
        ]
        //PARTE 1----------------------------------
        //let arboles:number=this.cuentArboles(3,1)
        //PARTE 1----------------------------------
        //PARTE 2----------------------------------
        let arboles:number=1
        caminos.forEach(camino=>{
            arboles=arboles*this.cuentArboles(camino.c,camino.f)
        })
        console.log(arboles);        
        //PARTE 2----------------------------------
    }

    private static cuentArboles(columIni:number,filaIni:number):number{
        const plano:string[]=global.inputToArrayStrSinEspacios(this.input);       

        let columnaAux:number=columIni
        let arboles:number=0
        for(let fila=filaIni; fila<plano.length;fila=fila+filaIni){            
            
            if(columnaAux>plano[0].length-1){
             columnaAux=columnaAux-plano[0].length
            }
            
            if(plano[fila][columnaAux]==='#') arboles++
            const str:string=plano[fila][columnaAux]            
            
            columnaAux=columnaAux+columIni
        }
        console.log('Árboles='+ arboles);
        return arboles
    }

    /* private static input:string=
    `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#` */
    
    
    private static input:string=
    `.....##.#.....#........#....##.
    ....#...#...#.#.......#........
    .....##.#......#.......#.......
    ...##.........#...#............
    ........#...#.......#.........#
    ..........#......#..#....#....#
    ..................#..#..#....##
    .....##...#..#..#..#..#.##.....
    ..##.###....#.#.........#......
    #.......#......#......#....##..
    .....#..#.#.......#......#.....
    ............#............#.....
    ...#.#........#........#.#.##.#
    .#..#...#.....#....##..........
    ##..........#...#...#..........
    ...........#...###...#.......##
    .#..#............#........#....
    ##.#..#.....#.......#.#.#......
    .##.....#....#.#.......#.##....
    ..##...........#.......#..##.#.
    ##...#.#........#..#...#...#..#
    .#..#........#.#.......#..#...#
    .##.##.##...#.#............##..
    ..#.#..###......#..#......#....
    .#..#..#.##.#.##.#.#...........
    ...#....#..#.#.#.........#..#..
    ......#.#....##.##......#......
    #....#.##.##....#..#...........
    ...#.#.#.#..#.#..#.#..#.##.....
    #.....#######.###.##.#.#.#.....
    ..#.##.....##......#...#.......
    ..#....#..#...##.#..#..#..#..#.
    .............#.##....#.........
    .#....#.##.....#...............
    .#............#....#...#.##....
    .#.....#.##.###.......#..#.....
    .#...#.........#.......#..#....
    ..#.#..#.##.......##...........
    .....##..#..#..#..#.##..#.....#
    ..##............##...#..#......
    ...#..#....#..##.....##..#.#...
    #.....##....#.#.#...#...#..##.#
    #.#..#.........#.##.#...#.#.#..
    .....#.#....##....#............
    #.......#..#.....##..#...#...#.
    .....#.#...#...#..#......#.....
    ..##....#.#.#.#.#..#...........
    ##..#...#.........#......#...#.
    ..#...#.#.#.#..#.#.##..##......
    #............###.....###.......
    ..........#...#........###.....
    .......##...#...#...#........#.
    .#..#.##.#.....................
    .#..##........##.##...#.......#
    .......##......#.....#......#..
    .##.#.....#......#......#......
    #...##.#.#...#.#...............
    ........#..#...#.##.......#....
    ...................#...#...##..
    ...#...#.........#.....#..#.#..
    .###..#........#..##.##..#.##..
    #...#.....#.....#.....#..#..#..
    ###..#.....#.#.#.#......#....#.
    #........#....##.#...##........
    .#.#..##........##....##.#.#...
    #...#....#.###.#.#.........#...
    ...#...##..###.......#.........
    ......#....#..##..#.....#.#....
    ........#...##...###......##...
    ..........##.#.......##........
    ...#....#......#...##.....#....
    ###.#.....#.#..#..#....#...#..#
    .#.....#.#....#...............#
    ..#....#....####....###....#.#.
    ....##........#..#.##.#....#...
    .......##...#...#..#....####...
    #...##.#......##...#..#........
    ..##..#.##....#.......##.#.#...
    ..#.#...............#...#.#....
    ....#.....#.#.....#.##.......#.
    ...#.#..##.#.#..............##.
    ..#.....#...#.............#.##.
    ##..#.#...#........#..#.....##.
    ...........##...#.#.###...#....
    ...#.#.#..#..................#.
    .#...##.............#...#......
    ..#..#...#.#.......#...#.....#.
    ..##.......#.#.................
    .##..#........###.....#....#.##
    ......#..###.......#....##....#
    ....#.....#.................#..
    ........#...#...#..............
    ...#..#.###.......#..#.#.#.##..
    ..#...#.....#....#.........#...
    ...#.............#........###..
    ......#..............#......#..
    #..#...........#...#..........#
    ...##...#.###..#...#.....#.#...
    ....#..##......#.......##......
    ....#....##.#...#.#..#....#...#
    .#...........#..#....##...#..##
    ..#.#.................###.#...#
    ..#.#.#...##...........#.......
    ..........#..##...#.#..##....##
    ........#........#.##..#.#...#.
    .....#...##.......##......#...#
    ....#...#..#..#.....#..........
    .#..#......#..#..#..###.......#
    .##..........#...#...#.#.....##
    ..#..........#.#.#...###.......
    ....#................#...##....
    .##..#....#..........#.#.#.....
    ..##...#.#........#.....#.##...
    ....####.....#..#.........##..#
    ......#.........#...#..........
    ....#...................#..##..
    .##....#.#.........#....#...#..
    ....##...##.....#..####........
    ..##.#....#.#.......##...#.....
    #...#.#.#...#..#..##.....#.....
    #..................###.....#...
    #.#.....#.......#.#...###.#....
    .#..#....#............#........
    #.#....#..#.#...............#..
    ..#..#..#.............#......#.
    ..#.......##...................
    .#....#.........#....#.#.#..#..
    ....#....#..#...............#..
    ......#..#..##......#.........#
    ..#.##........##......#..#..#.#
    #.....#.#....#.........##...#..
    ###..............#....###...##.
    ....#..##......#.......##......
    ......#...#.##......##....#..#.
    ..........#....#..##.......#..#
    .#..#...##..#...........#..#..#
    .....#....#...#..###...###....#
    .#####..#...#.#.#..#.#.###...##
    ..##............##.#...#.##...#
    .##..#...#...#....##.#..#..##..
    .#....#...#............##..#...
    .#.#......#....#....#..##..##..
    .........#...#.......#.##..#...
    #.........#.....##.....#..#..#.
    ...##.#...#...#..#..#....##..##
    .#............#...#....##......
    ..#...#.##.........#.#......#.#
    ....#.##........#.........#..##
    #.........#......#.#......#..#.
    ........#.#.......#.#........#.
    ..#..........##.#...#..#.#.....
    ..#...#....#...#...#..#.#..#.#.
    .#.........#....#..#####..#....
    #.#....#.#.###...#.............
    ..##...........##......##......
    #.....#..#....#...............#
    ...#.#..#....##......#...##....
    ...#........#.....#...#..#.....
    .#......##.........#......#....
    ..#..###.##...#.#.....#........
    .............#......#..#.......
    ..#...............#.#...#..#..#
    .......#..#...#.#####......#..#
    .........#.....#...............
    ##........#............#.#.....
    .#...#.....#..#..#...#....#...#
    ..#....#....##......##.....#.#.
    #...##..##......#...#....#.....
    ....#.#.#.....###....##.##....#
    ..........##...##.......#......
    ..#.......#...##.#....##.##....
    ....#........................#.
    ...#...#.#.##...#.....#...#..#.
    .#....##..#..#..........##..##.
    .#.....#..#...#.##.....#.......
    .#.##...#.#..#.....##....#...#.
    .##...#........##....#..#......
    .....#........#..........#.#..#
    ....#..##.......#..#.....#.....
    ...........#...#........#.##..#
    .....#..#....#..#.#.....#....##
    .....#....#.##.#..##...........
    ...##.......##.........#.......
    ...............##..#....#.#....
    .......###..#........#..####.##
    .......#.##...#.#....#.####....
    ....#...............#..........
    ##.#.......#.....#......#...#..
    ......##.....#....#.....#..#..#
    .....#...##.............#......
    #.#.##.#.....#..#........#.....
    ......##....#..#........#......
    ............#........#..#.#....
    ##.......#......#...####..#.##.
    ..##..#...#.............#.##...
    .....#..##......#.##......###..
    ............#........#........#
    #.#.#.#...#.#.....#.........#..
    .........#...............#.....
    .............###.#.......#....#
    ###.##..#..#..........#....#...
    #......#...#..#..#.....#.##....
    ............#....#....#..#.....
    ..#.#....#...#......#.#..#..##.
    ...#........................#..
    #.#...#..........#......#.#....
    .........#................#...#
    ##.....#....#........##.......#
    #...##........#...#...........#
    ...#...#..........##.......#.#.
    ..#.#.#....#......##...........
    ...#.#...#.##.#..#.#.##........
    #....##.....###..#.......#.....
    ###.....#.#.#...#..#.........##
    ..#......#..###...#.#.#.....#.#
    .#....#.....#............#..##.
    ....#....##..........#.....##..
    #...........#....#...#..#...##.
    ..#.......#.....#..........#...
    .#..#................#......#..
    ..#......#.#...#..#.#....#....#
    ...#..#...###..#..##....#.#....
    ..#..............#.....#.......
    ...#.#...#.........#.#.........
    ##......##...........##.#.##..#
    ..#..##..#....#.#......#.#...##
    ...#.###....###...#.....#......
    #.#................#......#....
    ..#.....#.....#....##.......#..
    .#.#...............##..#.......
    ...#....#.......#.#.....##..#..
    .........#....#.......#.#...##.
    #....#......##.#.........##...#
    #.............#..##.#.#..##....
    ...#....#..#...#....#.#.#.#...#
    .#....#....#..##.....#.#...###.
    ##............#.#...##.#..#.#..
    ##.#....##.....#..#..###....#..
    ##....#................##......
    ...##..#...#..###....#.....##..
    .#...##......#..#.#.....#...#..
    ..##......##...#.##.......#....
    ......#.....#.....##........#.#
    ##....#...........#............
    #.......#....#..#.##..##.#..#..
    .#....##.#.....#..#..#.........
    .#....#.#.#...#.....##.....#.#.
    .......##.#.#........#......##.
    ##........#.##.......#...#..#..
    ...###..##....#.#....#.#.......
    ......#.......#...##.....#...#.
    ..#......##.#......#.....#.....
    .....#.....###...#.............
    #...#.#...#...#..#......#......
    #.....#.......###.#....###.#...
    ...#.......#....####....##..#..
    #.#.....#....#........#.......#
    .........#.......#......#.#...#
    ..##....#.....##...............
    ..........#..#.#..#......#.....
    ..................##...##.#....
    ........#.......#...#..#.#.#...
    .....#.#..##..#..#.#..#.......#
    .....#........#..#..#....#....#
    ##............#..#..#...#....#.
    .....#....................##..#
    ........##.#....###............
    ##.......#.##................#.
    .....###.#..#..#...#....###.##.
    .#......#.#....#.....##.#......
    ...##......##.........#...#....
    ....####..............#........
    #...#.#..##..##.........##.....
    ......#......#....#..#.........
    #.....#.....#.##...............
    ..#.##..#...##.#.####..#....###
    #..#......#....#.##..##...#.#..
    #....#.......#.....#.....#.#...
    ##.......#.....##...#.....#....
    ...#...##..........#..##..##..#
    .###..#..##...#....#...#..#....
    ......##..###.......###...#....
    ....#...#.#.......#.##...##..##
    #.#......#..##.#.#..#..#..#....
    ......#........#.......#.......
    ..........#.#.....##...........
    ......#..#........#..#.#..###..
    ##..#.............##..#........
    .........#....#.....#.........#
    .....#..##...#..#..##.##......#
    ###..#...........#.......#....#
    ...............#....#.#........
    .##.#...#.#........##....#.....
    .##.###...##..###....#...#...#.
    .##..#....#.#.#...#.#.#.#...#..
    .###.#...#.......#....#..#.....
    ..#..#.#.#.#........#.....##...
    .#.......#.#...#.#...........##
    ...#.....##....#.....##...#....
    ................#.....####...#.
    .#.#......#.......##...#.##....
    .###.........#.#......#..#.#...
    #......#...#....#..##.......#..
    .##..#....#..#...........#...#.
    .#...#.......##........#.##....
    ..#...........#...##...........
    .....##....##......#....#..#...
    #......#.#...#.##.#...##....#..
    #....................#...##...#
    ..#............#........#......
    .............#.........##.....#
    ...#...#......##.#...#...#.#...
    ..#...#.#.................#....
    ....##...#....#...###.##......#
    ...#....#...#..#...#....#.....#
    ...##.#........#..#.........#..
    ..##.....#..##...#.....##...#..
    #.........#.#.#...#......#...#.
    #.#...........#...#..#..#..##..
    ..#..#..##....#..........#.###.
    .....#..#....#.#...#...#..#..#.
    ###.....#..#.................#.
    .#..##.##.#......#....##..#....`

}