import { global } from '../global';

export class AOC_07_2020{
    public static aBailar():void{
        //console.log(this.firstPart(this.input));
        this.secondPart(this.input)
    }

    private static secondPart(input:string):void{
        const maletas:string[]=global.inputToArrayStr(input) 
        //limpio el array para dejarlo guay 
        const cleanMaletas:string[]=maletas.map(maleta=>{
            let regex = / bags/g;
            return maleta.replace(regex,'')            
        }).map(maleta=>{
            let regex = / bag/g;
            return maleta.replace(regex,'')            
        }).map(maleta=>{
            return maleta.replace('.','')            
        })        
        
        let resultado:number=0
        const calcula = (maleta:string, factor:number=1)=>{            
            const salida:string=this.maletasContained(cleanMaletas,maleta)
            if(salida.search(',')!==-1){
                const array:string[]=salida.split(', ')
                for(let item of array){                    
                    console.log(item);                    
                    if(item[0]==='n') return
                    resultado=resultado + parseInt(item[0])*factor
                    calcula(item.substr(2), parseInt(item[0])*factor)
                }
            }else{
                console.log(salida);
                if(salida[0]==='n') return                
                resultado= resultado + parseInt(salida[0])*factor
                calcula(salida.substr(2), parseInt(salida[0])*factor)
            }
        }
        
        calcula('shiny gold')
        console.log(resultado);

    }

    private static maletasContained(maletas:string[],maleta:string): string{
        const maletasArray:string[][]=maletas.map(maleta=>{
            return maleta.split(" contain ")
        })
        for(let i=0; i<maletasArray.length;i++){
            if (maletasArray[i][0].search(maleta)!==-1){                
                return maletasArray[i][1]
            }
        }
        return ''
    }

    private static firstPart(input:string):number{
        const maletas:string[]=global.inputToArrayStr(input)        
        //qué maletas contienen una shiny gold bag
        let maletasResult:string[]=this.maletasContain(maletas,'shiny gold');  
        
        //ahora busco qué maletas pueden contener a mi resultado       
       let newMaletas:string[]=[...maletasResult]
       while(newMaletas.length!==0){        
        let aux:string[]=[]
        newMaletas.forEach(maleta=>{            
            const nResult:string[]=this.maletasContain(maletas,maleta)
            if(nResult.length!==0){               
                aux=aux.concat(this.maletasContain(maletas,maleta))                
            }
        })
        if(aux.length!==0){
            //antes de añadir al resultado compruebo que no exista ya            
            aux.forEach(maleta=>{
                if(maletasResult.indexOf(maleta)===-1){
                    maletasResult.push(maleta)
                }
            })   
        } 
        newMaletas=aux
       }
        
        return maletasResult.length
        
        
    }

    private static maletasContain(maletas:string[], maletaFind:string):string[]{
        //me creo una tupla donde el primer item sea la maleta contenedora y el segundo las contenidas
        const maletasCntArray:string[][]=maletas.map(maleta=>{
            return maleta.split(" contain ")
        })
        
        let result:string[]=[]
        maletasCntArray.forEach(maleta=>{            
            if(maleta[1].search(maletaFind)!==-1){
                let aux:string=maleta[0].replace(' bags','')
                aux=aux.replace(" bag","")
                result.push(aux)
            }
        })
        return result
    }

    private static inputTest:string=
    `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

private static inputTest2:string=
`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`

private static input:string=
`light orange bags contain 1 dark maroon bag, 3 dim maroon bags, 5 striped green bags, 2 pale aqua bags.
wavy bronze bags contain 3 pale black bags, 5 bright turquoise bags, 4 pale orange bags.
dark coral bags contain 3 bright lavender bags, 1 pale bronze bag, 2 dull blue bags.
dim chartreuse bags contain 2 wavy plum bags, 4 wavy teal bags, 1 dark crimson bag.
striped indigo bags contain 4 posh aqua bags.
shiny lavender bags contain 4 bright yellow bags, 4 muted salmon bags, 1 dull chartreuse bag, 2 dark chartreuse bags.
clear gold bags contain 3 dotted orange bags.
dull maroon bags contain 3 posh green bags, 1 shiny gold bag, 5 light salmon bags, 1 posh teal bag.
light plum bags contain 1 striped plum bag, 4 striped cyan bags, 1 light turquoise bag.
posh magenta bags contain 4 drab black bags, 3 shiny violet bags.
posh beige bags contain 4 dotted maroon bags, 4 dull fuchsia bags, 5 clear teal bags, 2 dull beige bags.
mirrored gray bags contain 3 shiny tomato bags.
dark magenta bags contain 1 dim brown bag, 3 faded gray bags, 1 dim teal bag.
plaid teal bags contain 5 mirrored indigo bags.
shiny bronze bags contain 3 clear orange bags, 2 vibrant coral bags, 1 pale olive bag.
muted aqua bags contain 2 dim maroon bags, 4 dotted beige bags, 1 pale turquoise bag.
dark olive bags contain 2 dotted tomato bags, 1 drab coral bag.
clear lime bags contain 4 striped crimson bags, 5 mirrored fuchsia bags, 2 striped chartreuse bags, 4 wavy aqua bags.
posh bronze bags contain 1 dotted green bag.
shiny cyan bags contain 5 dim maroon bags, 2 light orange bags.
vibrant silver bags contain 1 drab coral bag, 2 dull olive bags, 3 clear brown bags, 3 bright violet bags.
mirrored red bags contain 1 dim beige bag, 5 vibrant salmon bags, 5 muted bronze bags.
striped bronze bags contain 3 clear cyan bags, 4 wavy purple bags, 1 pale orange bag.
pale gold bags contain 5 light cyan bags, 2 dim gray bags.
striped purple bags contain 3 clear gray bags, 3 plaid tan bags.
dotted orange bags contain 3 dark maroon bags, 1 light orange bag, 3 light lime bags.
clear gray bags contain 3 plaid aqua bags.
dull red bags contain 1 mirrored blue bag, 5 bright lavender bags, 1 wavy aqua bag.
dotted tomato bags contain 5 pale black bags, 2 clear beige bags, 4 drab yellow bags, 4 dark crimson bags.
wavy maroon bags contain 1 faded cyan bag, 3 dim brown bags, 2 striped magenta bags.
plaid turquoise bags contain 4 dark maroon bags, 4 plaid fuchsia bags, 5 muted cyan bags.
clear tomato bags contain 1 pale bronze bag, 1 plaid indigo bag.
pale magenta bags contain 4 striped black bags, 3 shiny orange bags, 1 vibrant teal bag, 5 plaid olive bags.
dull purple bags contain 2 pale silver bags.
bright fuchsia bags contain no other bags.
striped beige bags contain 1 dotted aqua bag, 1 wavy teal bag.
dim tomato bags contain 2 dim gray bags, 1 faded bronze bag.
dotted coral bags contain 3 faded gold bags, 3 drab tomato bags, 1 dark crimson bag, 1 wavy purple bag.
vibrant bronze bags contain 2 dim fuchsia bags.
dark white bags contain 4 dotted tan bags.
bright teal bags contain 3 posh tan bags, 4 dark bronze bags, 3 striped white bags, 1 dotted silver bag.
striped silver bags contain 3 vibrant salmon bags.
plaid crimson bags contain 2 striped beige bags.
striped white bags contain 5 posh tan bags, 3 dull aqua bags, 5 pale black bags, 1 plaid gray bag.
striped green bags contain 3 dim maroon bags, 4 light lime bags, 1 dark crimson bag.
vibrant violet bags contain 3 plaid cyan bags.
muted silver bags contain 2 dim coral bags.
posh gray bags contain 1 clear tan bag, 1 light crimson bag.
muted beige bags contain 4 drab tomato bags, 2 dull aqua bags, 3 pale tomato bags, 3 drab coral bags.
faded salmon bags contain 4 striped lime bags, 4 posh cyan bags, 2 wavy orange bags, 3 dull lime bags.
posh lavender bags contain 4 faded coral bags, 2 mirrored cyan bags, 3 drab cyan bags.
shiny tan bags contain 3 dotted orange bags, 4 dim brown bags, 4 dull silver bags, 2 plaid orange bags.
vibrant gray bags contain 1 clear yellow bag, 1 mirrored indigo bag.
bright crimson bags contain 2 drab orange bags, 1 drab lavender bag, 3 dull black bags.
muted black bags contain 2 dark chartreuse bags.
vibrant orange bags contain 1 dull salmon bag.
posh tomato bags contain 1 dull coral bag, 4 drab salmon bags.
light brown bags contain no other bags.
shiny green bags contain 1 light crimson bag, 3 shiny purple bags, 5 bright turquoise bags, 3 light brown bags.
posh blue bags contain 2 mirrored lavender bags, 3 posh turquoise bags.
dull lavender bags contain 1 pale black bag.
faded magenta bags contain 3 dull beige bags, 3 light plum bags, 5 mirrored turquoise bags.
plaid tan bags contain 5 shiny purple bags.
plaid green bags contain 3 shiny brown bags, 3 clear brown bags, 3 posh brown bags.
pale red bags contain 2 dim violet bags, 1 clear tan bag, 1 shiny aqua bag, 3 muted cyan bags.
dull olive bags contain 2 bright fuchsia bags, 2 faded cyan bags, 2 striped crimson bags.
dotted gray bags contain 2 bright fuchsia bags, 2 drab tomato bags, 4 shiny violet bags.
dotted plum bags contain 1 muted magenta bag, 4 dark yellow bags, 5 clear aqua bags.
dim coral bags contain 1 shiny gold bag.
light white bags contain 1 shiny aqua bag.
dim yellow bags contain 1 dotted teal bag, 2 striped orange bags.
striped lavender bags contain 2 faded silver bags, 2 dim lime bags.
light turquoise bags contain 5 bright brown bags, 2 clear brown bags, 1 drab yellow bag.
shiny yellow bags contain 5 drab red bags.
plaid maroon bags contain 4 wavy orange bags.
clear beige bags contain 4 wavy teal bags, 5 wavy purple bags.
dull fuchsia bags contain 1 wavy lime bag, 3 faded turquoise bags, 2 dotted blue bags, 3 dull lavender bags.
pale black bags contain 1 dim maroon bag.
vibrant blue bags contain 2 bright brown bags, 2 dotted aqua bags.
vibrant tan bags contain 4 clear tan bags.
clear silver bags contain 1 drab lavender bag, 5 dotted green bags, 4 muted lavender bags.
mirrored plum bags contain 4 dim yellow bags, 1 wavy lime bag.
pale crimson bags contain 5 shiny gold bags, 2 striped chartreuse bags, 5 bright brown bags.
faded chartreuse bags contain 2 drab teal bags.
plaid plum bags contain 5 light turquoise bags, 1 muted indigo bag.
vibrant indigo bags contain 3 striped tan bags, 3 striped crimson bags, 5 clear olive bags.
dotted turquoise bags contain 5 pale brown bags.
muted brown bags contain 1 light chartreuse bag.
mirrored black bags contain 3 striped black bags, 3 dotted beige bags.
faded silver bags contain 5 dull violet bags, 5 bright salmon bags.
dotted blue bags contain 4 light beige bags.
faded maroon bags contain 3 wavy tan bags.
pale purple bags contain 3 drab yellow bags, 3 shiny orange bags, 3 striped orange bags, 4 striped chartreuse bags.
muted white bags contain 1 posh chartreuse bag, 1 dim silver bag, 4 posh bronze bags, 1 striped black bag.
wavy violet bags contain 4 posh yellow bags, 3 wavy gray bags.
wavy silver bags contain 2 plaid gray bags, 3 muted bronze bags, 2 pale magenta bags.
dull blue bags contain 4 pale silver bags, 3 mirrored white bags.
mirrored gold bags contain 5 striped bronze bags, 1 dotted orange bag, 5 clear black bags.
dark silver bags contain 2 plaid aqua bags, 3 dim purple bags, 2 shiny maroon bags.
striped olive bags contain 2 vibrant coral bags, 2 clear beige bags, 5 wavy chartreuse bags.
bright cyan bags contain 4 faded orange bags, 2 dim maroon bags, 3 pale chartreuse bags, 1 wavy plum bag.
pale salmon bags contain 5 faded maroon bags.
plaid orange bags contain 4 plaid cyan bags.
plaid salmon bags contain 2 clear gray bags, 4 drab tan bags, 2 clear beige bags.
muted turquoise bags contain 4 mirrored teal bags, 5 wavy bronze bags.
dim black bags contain 1 drab violet bag, 5 pale bronze bags, 2 dark tomato bags, 1 dull turquoise bag.
wavy lime bags contain 1 dim lime bag, 1 wavy cyan bag, 5 mirrored lavender bags.
wavy blue bags contain 2 dark maroon bags.
wavy turquoise bags contain 5 light black bags, 2 plaid green bags, 3 clear gray bags.
dotted teal bags contain 4 plaid indigo bags, 2 bright fuchsia bags, 2 pale lavender bags.
shiny tomato bags contain 4 clear beige bags.
faded cyan bags contain no other bags.
bright yellow bags contain 1 shiny tan bag, 5 light black bags, 3 clear olive bags, 5 drab turquoise bags.
light salmon bags contain 1 pale black bag, 1 wavy cyan bag, 5 pale tomato bags.
drab cyan bags contain 4 drab aqua bags, 4 mirrored cyan bags.
vibrant plum bags contain 5 striped blue bags, 3 drab lime bags, 3 dull turquoise bags, 1 dotted red bag.
faded lime bags contain 5 shiny teal bags, 3 posh purple bags, 4 dim aqua bags, 4 plaid white bags.
dull gray bags contain 5 wavy fuchsia bags, 3 dark yellow bags, 4 striped tan bags, 2 dark olive bags.
vibrant lime bags contain 1 vibrant violet bag.
vibrant chartreuse bags contain 3 mirrored aqua bags, 2 vibrant white bags, 2 dotted orange bags, 2 faded beige bags.
dim fuchsia bags contain 1 clear brown bag, 3 clear magenta bags, 3 muted beige bags.
plaid fuchsia bags contain 2 plaid blue bags, 2 dark violet bags.
pale lime bags contain 5 wavy purple bags.
wavy aqua bags contain 1 dotted red bag, 1 plaid tan bag, 5 light purple bags, 3 shiny green bags.
shiny silver bags contain 4 wavy purple bags, 3 dark violet bags, 4 drab yellow bags, 5 faded cyan bags.
muted lavender bags contain 1 dim gold bag, 1 clear yellow bag.
striped red bags contain 1 striped maroon bag, 3 dim silver bags, 2 dim lavender bags.
faded bronze bags contain 2 dark olive bags, 3 mirrored lavender bags, 5 light tan bags, 2 faded cyan bags.
mirrored indigo bags contain 4 posh olive bags.
dotted salmon bags contain 1 plaid silver bag.
dotted purple bags contain 2 shiny violet bags, 4 plaid olive bags.
posh fuchsia bags contain 5 mirrored indigo bags.
shiny indigo bags contain 3 dim turquoise bags, 2 dark maroon bags, 3 vibrant tomato bags.
drab green bags contain 1 dull salmon bag, 4 wavy chartreuse bags.
dark tomato bags contain 2 faded orange bags, 5 wavy indigo bags, 2 dotted red bags.
bright black bags contain 4 bright salmon bags.
posh yellow bags contain 5 pale chartreuse bags, 2 clear cyan bags, 3 muted bronze bags, 3 light tan bags.
light crimson bags contain 4 dark violet bags, 4 striped crimson bags, 5 clear tan bags.
muted indigo bags contain 5 pale black bags, 4 dark violet bags, 4 light purple bags, 1 dotted gray bag.
dark green bags contain 4 posh brown bags.
pale chartreuse bags contain 5 bright turquoise bags, 5 light purple bags, 4 clear tan bags.
clear red bags contain 2 vibrant aqua bags, 1 clear brown bag.
faded purple bags contain 5 dim gray bags.
dark gray bags contain 4 shiny maroon bags.
drab aqua bags contain 4 dull aqua bags, 5 striped tan bags, 4 mirrored indigo bags.
muted coral bags contain 3 plaid fuchsia bags, 5 drab coral bags, 1 dull aqua bag, 3 light tan bags.
dim red bags contain 5 shiny purple bags, 3 posh olive bags, 5 clear turquoise bags.
muted gray bags contain 2 clear lavender bags.
mirrored purple bags contain 3 faded salmon bags.
wavy cyan bags contain 2 plaid aqua bags, 5 dotted tomato bags, 2 bright fuchsia bags, 3 clear tan bags.
faded coral bags contain 4 wavy tan bags.
posh chartreuse bags contain 1 dark green bag.
light blue bags contain 5 dotted orange bags, 2 striped orange bags, 3 faded bronze bags, 4 dim maroon bags.
mirrored lime bags contain 5 drab lime bags, 3 drab aqua bags.
plaid purple bags contain 5 dull orange bags, 4 faded aqua bags, 4 vibrant white bags, 2 muted cyan bags.
wavy green bags contain 1 clear yellow bag, 3 striped crimson bags.
plaid gray bags contain 5 pale chartreuse bags, 1 dull plum bag, 1 dark chartreuse bag, 4 clear lime bags.
drab salmon bags contain 3 vibrant tomato bags.
dull gold bags contain 3 dim green bags, 3 dim red bags.
dim turquoise bags contain 2 light olive bags, 1 dark salmon bag, 3 drab yellow bags.
bright turquoise bags contain 1 wavy blue bag.
dotted yellow bags contain 1 mirrored turquoise bag, 1 clear coral bag, 3 wavy magenta bags, 1 plaid chartreuse bag.
drab yellow bags contain 3 dark maroon bags, 4 clear brown bags, 2 pale black bags, 3 light brown bags.
dark blue bags contain 2 pale purple bags, 5 wavy turquoise bags.
pale orange bags contain 2 light lime bags, 5 dotted aqua bags, 4 pale black bags, 2 clear beige bags.
posh indigo bags contain 3 clear crimson bags.
dotted lavender bags contain 5 pale cyan bags, 5 plaid olive bags, 5 dull purple bags, 5 light tomato bags.
mirrored magenta bags contain 5 dim lime bags, 1 mirrored gold bag, 4 dotted gray bags.
clear green bags contain 3 muted bronze bags, 5 pale coral bags, 2 light tan bags.
muted purple bags contain 4 pale olive bags.
dark black bags contain 5 dull lavender bags.
dim tan bags contain 4 muted bronze bags, 5 drab fuchsia bags, 1 shiny violet bag.
dim brown bags contain 5 bright violet bags, 2 wavy orange bags.
plaid red bags contain 1 clear tan bag, 1 dark olive bag, 5 vibrant blue bags, 3 shiny gray bags.
bright red bags contain 2 mirrored bronze bags, 3 vibrant crimson bags, 3 light salmon bags.
bright white bags contain 4 vibrant magenta bags, 3 clear cyan bags, 5 drab red bags.
striped teal bags contain 5 posh silver bags, 2 clear green bags, 1 clear teal bag, 2 pale cyan bags.
pale tan bags contain 1 dark silver bag.
light olive bags contain 2 dotted aqua bags.
striped tomato bags contain 2 clear white bags, 2 bright lavender bags, 5 vibrant silver bags.
light lavender bags contain 5 plaid gray bags, 1 dull cyan bag.
clear salmon bags contain 3 striped green bags, 4 clear brown bags.
muted fuchsia bags contain 3 drab olive bags.
dark lavender bags contain 5 drab gray bags.
light indigo bags contain 2 wavy chartreuse bags, 5 wavy teal bags, 3 shiny violet bags, 1 light lime bag.
faded gray bags contain 4 light orange bags, 4 posh white bags.
vibrant olive bags contain 2 bright turquoise bags, 3 wavy aqua bags.
dark chartreuse bags contain 1 dark maroon bag, 5 shiny gold bags.
dim salmon bags contain 3 faded crimson bags.
shiny coral bags contain 1 vibrant beige bag, 3 striped tan bags.
dim green bags contain 2 dull brown bags, 4 light aqua bags.
posh black bags contain 1 light indigo bag, 3 wavy yellow bags.
light beige bags contain 1 drab beige bag, 3 shiny cyan bags.
dark fuchsia bags contain 3 bright aqua bags, 1 pale lavender bag.
bright tan bags contain 3 drab magenta bags, 1 vibrant lime bag.
plaid yellow bags contain 5 dull turquoise bags, 2 light brown bags, 5 faded bronze bags.
plaid black bags contain 5 muted magenta bags.
wavy magenta bags contain 3 striped chartreuse bags.
plaid olive bags contain 2 clear tan bags.
dull crimson bags contain 4 plaid brown bags, 1 bright silver bag, 3 vibrant silver bags.
vibrant white bags contain 3 vibrant plum bags, 2 drab fuchsia bags, 5 dotted tan bags, 4 striped black bags.
pale tomato bags contain 3 wavy tan bags.
dull indigo bags contain 3 dim teal bags, 3 drab coral bags, 5 striped orange bags, 1 dull violet bag.
faded teal bags contain 4 dotted orange bags, 3 plaid blue bags, 1 mirrored blue bag, 4 vibrant blue bags.
dark bronze bags contain 5 dull aqua bags, 5 pale tan bags.
plaid bronze bags contain 3 light maroon bags, 4 dim brown bags, 3 plaid blue bags.
dotted aqua bags contain 4 dim maroon bags, 2 wavy tan bags.
shiny salmon bags contain 4 light fuchsia bags, 1 clear orange bag.
faded crimson bags contain 4 pale tan bags, 5 drab olive bags, 5 shiny cyan bags, 2 muted crimson bags.
dotted bronze bags contain 4 muted crimson bags, 2 posh silver bags, 5 faded cyan bags, 2 muted teal bags.
vibrant salmon bags contain 2 plaid indigo bags, 4 light tomato bags, 3 pale aqua bags, 1 dotted brown bag.
shiny violet bags contain 1 dull aqua bag, 1 light brown bag.
bright chartreuse bags contain 3 light tomato bags, 3 dotted teal bags, 1 dim brown bag, 5 muted chartreuse bags.
plaid indigo bags contain 5 posh blue bags, 5 posh brown bags.
mirrored aqua bags contain 4 muted lavender bags.
posh salmon bags contain 1 mirrored black bag, 5 dim violet bags.
plaid white bags contain 1 light blue bag, 1 striped black bag.
faded white bags contain 5 mirrored blue bags, 5 vibrant gold bags, 2 striped lime bags.
shiny chartreuse bags contain 2 faded yellow bags, 2 shiny green bags, 2 mirrored cyan bags, 5 dim coral bags.
dim orange bags contain 2 light maroon bags, 5 bright brown bags, 5 dark maroon bags.
mirrored tan bags contain 4 clear olive bags, 4 light orange bags, 2 shiny gray bags, 4 light brown bags.
striped tan bags contain 2 drab red bags.
pale silver bags contain 4 bright brown bags, 5 dull silver bags, 4 muted yellow bags.
pale turquoise bags contain 5 muted black bags, 2 bright beige bags.
pale maroon bags contain 4 striped white bags, 3 vibrant teal bags, 1 shiny magenta bag, 3 plaid crimson bags.
drab gray bags contain 4 posh maroon bags, 3 dotted aqua bags.
dotted fuchsia bags contain 1 striped orange bag, 2 striped turquoise bags, 2 plaid fuchsia bags, 4 mirrored lavender bags.
drab indigo bags contain 2 striped green bags, 4 posh silver bags, 5 wavy aqua bags, 1 posh turquoise bag.
dotted cyan bags contain 3 muted olive bags, 2 faded olive bags.
dull silver bags contain 5 drab lavender bags, 3 shiny silver bags, 2 pale black bags, 4 striped chartreuse bags.
drab lime bags contain 2 muted green bags, 4 dotted gray bags, 4 dotted coral bags, 2 mirrored lavender bags.
dotted magenta bags contain 5 muted magenta bags, 5 muted salmon bags, 3 wavy gray bags.
bright plum bags contain 4 striped beige bags, 3 dark tomato bags, 3 plaid lime bags.
dotted indigo bags contain 2 dotted silver bags.
pale plum bags contain 4 plaid gold bags, 2 posh maroon bags, 4 drab aqua bags, 2 striped lime bags.
clear olive bags contain 2 bright turquoise bags, 1 wavy tan bag.
pale fuchsia bags contain 5 dim tan bags, 5 dark blue bags.
drab tomato bags contain no other bags.
shiny lime bags contain 4 vibrant magenta bags, 1 dim teal bag.
clear cyan bags contain 5 dull silver bags.
posh brown bags contain 1 drab lavender bag.
wavy plum bags contain 1 dim teal bag, 4 faded gold bags, 1 plaid fuchsia bag.
striped brown bags contain 2 posh tan bags, 5 plaid chartreuse bags, 5 dull beige bags, 3 posh green bags.
plaid lime bags contain 4 light olive bags.
striped magenta bags contain 2 shiny maroon bags, 5 wavy lavender bags, 1 light turquoise bag.
shiny fuchsia bags contain 5 striped maroon bags.
light black bags contain 3 plaid gray bags, 4 drab coral bags.
dotted white bags contain 2 drab yellow bags, 5 dull olive bags.
wavy fuchsia bags contain 4 dull aqua bags.
bright orange bags contain 2 plaid blue bags, 2 posh blue bags, 3 light lime bags, 1 dim fuchsia bag.
shiny orange bags contain 2 drab yellow bags, 5 dim coral bags, 3 wavy blue bags.
dark purple bags contain 5 dim brown bags, 2 clear magenta bags.
wavy purple bags contain 1 dim maroon bag, 4 plaid cyan bags.
clear fuchsia bags contain 4 pale maroon bags.
dim olive bags contain 5 dim yellow bags, 1 wavy indigo bag, 4 dim aqua bags, 1 shiny gray bag.
bright beige bags contain 1 faded cyan bag.
dim lime bags contain 1 dull silver bag, 5 dark yellow bags, 3 dark crimson bags, 2 mirrored cyan bags.
drab silver bags contain 5 muted beige bags, 2 drab gold bags, 3 dotted magenta bags.
dotted chartreuse bags contain 3 dim gray bags.
clear crimson bags contain 3 wavy coral bags, 1 clear salmon bag, 1 light orange bag.
dark gold bags contain 2 dark tomato bags, 1 faded cyan bag.
posh silver bags contain 5 faded bronze bags, 1 plaid aqua bag, 1 plaid fuchsia bag, 5 wavy teal bags.
dark salmon bags contain 1 striped chartreuse bag, 1 faded cyan bag, 5 dotted coral bags.
drab lavender bags contain 2 plaid blue bags, 1 drab tomato bag, 5 clear brown bags.
light red bags contain 5 dull salmon bags, 2 shiny coral bags.
dim lavender bags contain 1 wavy beige bag, 2 wavy violet bags, 5 shiny green bags.
dim blue bags contain 2 vibrant orange bags, 3 dull olive bags.
muted red bags contain 5 shiny lime bags.
light gray bags contain 1 bright magenta bag, 2 wavy teal bags.
vibrant gold bags contain 5 dotted red bags, 5 light maroon bags, 1 striped blue bag.
pale white bags contain 3 muted brown bags.
dotted tan bags contain 1 faded salmon bag, 1 drab olive bag, 2 dim lime bags, 2 wavy chartreuse bags.
mirrored salmon bags contain 4 bright turquoise bags, 3 vibrant coral bags, 4 dull orange bags.
striped aqua bags contain 2 shiny crimson bags, 4 plaid beige bags.
dark crimson bags contain 4 bright fuchsia bags, 2 dark maroon bags, 5 dim maroon bags.
faded beige bags contain 3 posh white bags, 4 light turquoise bags.
clear yellow bags contain 1 vibrant lime bag, 1 dotted tomato bag, 4 pale black bags, 1 pale bronze bag.
bright coral bags contain 2 wavy crimson bags, 3 mirrored olive bags, 2 light tan bags, 5 faded cyan bags.
clear maroon bags contain 1 faded yellow bag, 4 dark chartreuse bags, 4 bright magenta bags.
shiny magenta bags contain 2 faded red bags.
bright gray bags contain 1 dim violet bag, 4 faded cyan bags, 5 light turquoise bags.
dotted red bags contain 1 plaid blue bag, 4 dark olive bags, 1 wavy plum bag.
mirrored coral bags contain 3 pale lime bags, 5 dim chartreuse bags, 3 vibrant violet bags.
drab maroon bags contain 1 drab lime bag, 2 drab tan bags.
dark tan bags contain 2 pale turquoise bags, 3 dotted brown bags.
pale yellow bags contain 5 faded cyan bags, 4 dotted blue bags.
dim crimson bags contain 2 dark silver bags, 5 plaid lavender bags, 5 pale gold bags.
faded lavender bags contain 2 clear aqua bags.
wavy indigo bags contain 2 striped crimson bags, 1 drab tomato bag, 1 light salmon bag.
wavy black bags contain 2 shiny gold bags.
plaid violet bags contain 2 pale crimson bags, 1 mirrored crimson bag.
clear turquoise bags contain 4 striped white bags.
striped orange bags contain 5 clear magenta bags.
pale teal bags contain 1 vibrant olive bag, 1 pale lime bag, 2 plaid teal bags.
clear indigo bags contain 2 shiny white bags, 3 shiny cyan bags.
dull tan bags contain 4 shiny orange bags, 4 posh coral bags, 1 dim purple bag.
dotted crimson bags contain 4 clear cyan bags, 4 posh coral bags, 1 clear lime bag.
striped plum bags contain 4 pale aqua bags, 3 clear yellow bags, 5 dotted orange bags, 4 clear crimson bags.
dull bronze bags contain 3 striped bronze bags.
dark maroon bags contain 3 wavy purple bags, 2 plaid cyan bags, 1 faded cyan bag.
striped gray bags contain 5 plaid gray bags, 4 vibrant cyan bags, 5 vibrant brown bags, 2 dull plum bags.
bright maroon bags contain 1 faded olive bag.
vibrant green bags contain 5 drab gold bags, 1 shiny chartreuse bag, 1 dark black bag.
mirrored orange bags contain 2 light brown bags, 1 drab tomato bag, 1 muted beige bag.
light magenta bags contain 3 muted maroon bags, 5 dotted gray bags, 2 vibrant tomato bags, 4 muted beige bags.
posh aqua bags contain 1 wavy bronze bag, 3 clear magenta bags.
pale aqua bags contain 2 faded cyan bags, 5 wavy teal bags, 5 plaid aqua bags.
dull teal bags contain 3 clear salmon bags.
dull violet bags contain 4 posh cyan bags.
drab bronze bags contain 3 clear lime bags, 2 drab maroon bags, 2 mirrored bronze bags.
light lime bags contain 3 light brown bags.
plaid tomato bags contain 3 dim cyan bags, 1 striped turquoise bag.
mirrored green bags contain 2 clear beige bags, 3 plaid teal bags, 3 pale lime bags, 2 plaid orange bags.
dark aqua bags contain 3 dark beige bags, 1 posh gray bag.
posh gold bags contain 5 bright silver bags.
pale gray bags contain 1 vibrant coral bag, 1 striped beige bag.
dim gray bags contain 3 shiny orange bags.
mirrored yellow bags contain 4 faded gold bags, 2 muted teal bags.
dull coral bags contain 4 light maroon bags, 5 bright brown bags, 2 faded orange bags, 1 light fuchsia bag.
mirrored white bags contain 1 vibrant silver bag, 3 muted coral bags, 5 muted green bags, 1 pale aqua bag.
striped gold bags contain 4 dim white bags.
clear orange bags contain 3 vibrant violet bags, 4 muted fuchsia bags, 5 plaid orange bags, 1 faded salmon bag.
drab purple bags contain 5 dotted tomato bags.
muted lime bags contain 4 drab magenta bags, 1 vibrant coral bag.
dotted green bags contain 4 light tan bags, 4 wavy bronze bags, 5 wavy indigo bags.
posh olive bags contain 3 light maroon bags.
dull cyan bags contain 3 vibrant tan bags, 1 muted fuchsia bag.
bright bronze bags contain 3 shiny turquoise bags, 5 dull turquoise bags.
dull brown bags contain 5 dull indigo bags, 5 pale salmon bags, 1 shiny gray bag.
posh cyan bags contain 5 striped green bags, 5 dull aqua bags, 1 shiny silver bag.
wavy red bags contain 2 posh white bags, 2 dark salmon bags, 4 dark lime bags, 5 vibrant brown bags.
faded gold bags contain 3 striped green bags, 4 dull olive bags, 4 drab yellow bags, 5 faded cyan bags.
wavy salmon bags contain 1 striped silver bag.
mirrored bronze bags contain 4 dull aqua bags, 2 clear tan bags.
striped crimson bags contain no other bags.
striped violet bags contain 2 muted brown bags, 5 bright brown bags, 4 dotted chartreuse bags.
dim aqua bags contain 5 striped blue bags, 2 light tan bags.
faded violet bags contain 5 pale plum bags, 5 posh green bags.
wavy brown bags contain 1 dim coral bag, 3 muted beige bags, 1 shiny orange bag, 1 dim brown bag.
muted green bags contain 5 dim teal bags, 1 pale tomato bag.
wavy lavender bags contain 2 clear brown bags, 3 mirrored indigo bags.
drab turquoise bags contain 3 vibrant indigo bags.
clear blue bags contain 2 striped beige bags, 2 dark maroon bags, 1 shiny beige bag.
drab fuchsia bags contain 5 striped lime bags, 5 drab beige bags, 1 dotted red bag, 5 clear cyan bags.
bright violet bags contain 2 striped chartreuse bags, 1 bright fuchsia bag, 1 wavy teal bag.
muted blue bags contain 4 bright violet bags.
dotted lime bags contain 1 dim silver bag, 4 striped maroon bags.
dull aqua bags contain 1 drab lavender bag.
clear teal bags contain 5 drab plum bags, 4 pale brown bags, 4 faded fuchsia bags.
dim gold bags contain 3 bright violet bags, 3 dim fuchsia bags.
pale indigo bags contain 4 dim lime bags, 4 dim red bags.
plaid aqua bags contain 5 drab tomato bags, 1 wavy teal bag, 2 shiny silver bags, 5 clear brown bags.
bright olive bags contain 1 vibrant brown bag, 5 dull violet bags.
striped lime bags contain 5 dim beige bags, 4 wavy chartreuse bags, 1 shiny orange bag, 3 bright violet bags.
mirrored silver bags contain 3 faded olive bags, 5 shiny tomato bags.
light green bags contain 4 mirrored turquoise bags, 3 bright tan bags, 5 clear lavender bags.
clear chartreuse bags contain 3 vibrant lime bags.
clear coral bags contain 5 faded turquoise bags, 3 dim tan bags, 5 light lime bags.
muted cyan bags contain 3 striped green bags, 1 wavy green bag, 3 dull cyan bags, 5 striped black bags.
faded brown bags contain 5 clear olive bags, 5 bright turquoise bags, 4 vibrant violet bags, 4 dotted violet bags.
faded tomato bags contain 1 posh fuchsia bag.
muted gold bags contain 1 pale cyan bag, 2 pale tomato bags, 3 dotted beige bags.
plaid brown bags contain 3 dim fuchsia bags, 3 dark chartreuse bags, 4 bright magenta bags.
posh maroon bags contain 5 striped purple bags, 2 dim gold bags, 5 dull silver bags.
shiny black bags contain 2 dim silver bags.
posh crimson bags contain 2 posh plum bags, 5 faded coral bags, 4 drab salmon bags.
shiny crimson bags contain 1 drab gold bag, 1 light turquoise bag, 4 pale gray bags, 2 pale lime bags.
wavy yellow bags contain 2 mirrored coral bags, 5 muted fuchsia bags.
bright green bags contain 1 bright brown bag, 4 muted turquoise bags, 2 muted gold bags, 5 clear green bags.
mirrored crimson bags contain 3 drab indigo bags, 2 wavy blue bags, 2 striped orange bags, 4 drab lavender bags.
bright purple bags contain 3 bright black bags, 2 dull fuchsia bags, 4 bright plum bags.
shiny purple bags contain 5 striped chartreuse bags, 2 bright fuchsia bags, 5 drab lavender bags, 1 pale black bag.
muted teal bags contain 1 shiny brown bag, 5 wavy fuchsia bags.
drab violet bags contain 4 bright violet bags, 1 clear beige bag, 3 vibrant tomato bags, 1 light olive bag.
vibrant beige bags contain 2 light brown bags.
wavy teal bags contain 3 striped crimson bags.
wavy gray bags contain 1 vibrant coral bag.
dim magenta bags contain 2 vibrant crimson bags, 5 dim lavender bags, 1 mirrored black bag.
dim plum bags contain 3 striped magenta bags, 4 light teal bags, 4 dark salmon bags, 5 drab orange bags.
light tan bags contain 3 clear brown bags, 4 bright violet bags.
light bronze bags contain 1 shiny gold bag, 1 striped bronze bag.
faded aqua bags contain 4 vibrant silver bags.
wavy chartreuse bags contain 1 shiny purple bag.
dark plum bags contain 1 dotted gold bag, 1 mirrored yellow bag, 4 light indigo bags.
striped black bags contain 1 posh yellow bag, 5 light salmon bags, 4 plaid tan bags.
mirrored fuchsia bags contain 2 plaid cyan bags, 3 mirrored cyan bags.
dull white bags contain 2 clear silver bags, 5 light red bags, 2 pale lime bags.
pale brown bags contain 5 shiny tan bags, 3 drab aqua bags, 3 dark yellow bags.
mirrored maroon bags contain 4 dark beige bags, 4 plaid salmon bags, 3 striped purple bags.
light violet bags contain 3 faded salmon bags, 3 posh salmon bags.
pale blue bags contain 5 striped silver bags, 2 shiny violet bags.
plaid beige bags contain 1 dotted green bag, 1 faded yellow bag, 5 dull lavender bags.
drab tan bags contain 3 striped magenta bags, 5 dim beige bags, 1 bright turquoise bag, 2 faded gold bags.
pale violet bags contain 4 dull plum bags, 5 pale red bags, 1 dotted silver bag, 4 striped coral bags.
light tomato bags contain 2 wavy chartreuse bags, 4 bright beige bags, 5 muted cyan bags.
shiny turquoise bags contain 3 drab fuchsia bags, 2 dull turquoise bags, 4 vibrant plum bags.
muted salmon bags contain 5 pale black bags, 3 muted green bags, 4 vibrant magenta bags.
dotted maroon bags contain 2 dotted turquoise bags, 1 dull silver bag, 5 mirrored yellow bags, 1 mirrored lavender bag.
dull lime bags contain 3 wavy teal bags.
plaid magenta bags contain 5 posh maroon bags.
vibrant teal bags contain 5 striped purple bags, 1 wavy chartreuse bag, 1 shiny chartreuse bag, 5 clear plum bags.
striped turquoise bags contain 2 clear chartreuse bags, 5 dim fuchsia bags, 4 dotted tomato bags, 1 wavy brown bag.
clear brown bags contain no other bags.
mirrored beige bags contain 2 posh fuchsia bags.
light maroon bags contain 4 plaid blue bags, 4 drab purple bags, 5 pale aqua bags.
light silver bags contain 2 posh turquoise bags, 2 pale tomato bags, 3 plaid red bags.
bright magenta bags contain 4 shiny violet bags, 5 shiny silver bags.
muted magenta bags contain 2 light brown bags, 4 vibrant plum bags, 3 mirrored black bags.
shiny olive bags contain 2 posh magenta bags.
vibrant lavender bags contain 2 shiny violet bags, 4 mirrored white bags, 5 dull lavender bags, 2 wavy olive bags.
faded turquoise bags contain 2 drab crimson bags, 5 dim crimson bags, 5 dark indigo bags, 5 dotted silver bags.
faded olive bags contain 5 striped tan bags.
dark yellow bags contain 1 dotted coral bag, 1 plaid fuchsia bag.
dim violet bags contain 3 dotted coral bags.
dark red bags contain 2 posh silver bags.
wavy white bags contain 4 striped tan bags.
mirrored cyan bags contain 2 plaid cyan bags, 5 wavy chartreuse bags, 1 striped orange bag.
shiny maroon bags contain 3 dark violet bags, 4 wavy plum bags, 1 plaid aqua bag, 4 light turquoise bags.
vibrant black bags contain 3 plaid yellow bags, 3 plaid tan bags, 1 posh cyan bag.
posh plum bags contain 1 vibrant brown bag, 5 pale violet bags.
bright salmon bags contain 1 posh tan bag, 4 pale black bags.
shiny red bags contain 1 wavy magenta bag, 3 clear gray bags.
dark violet bags contain no other bags.
mirrored tomato bags contain 3 wavy fuchsia bags.
drab coral bags contain 3 light brown bags, 4 striped crimson bags.
striped chartreuse bags contain 4 striped green bags.
drab magenta bags contain 2 faded cyan bags, 5 bright cyan bags.
drab white bags contain 3 vibrant violet bags, 1 posh coral bag.
light chartreuse bags contain 5 drab lime bags, 3 dull salmon bags, 5 clear plum bags, 2 dull beige bags.
pale olive bags contain 5 faded silver bags, 4 dotted aqua bags, 1 dark purple bag, 5 drab beige bags.
wavy tomato bags contain 2 dim bronze bags, 3 posh white bags, 3 dark salmon bags.
shiny blue bags contain 1 clear bronze bag.
shiny gray bags contain 1 dotted white bag, 1 mirrored indigo bag.
muted tan bags contain 1 clear maroon bag, 1 clear blue bag.
posh coral bags contain 2 shiny brown bags.
drab teal bags contain 1 dotted red bag, 3 pale cyan bags, 4 muted yellow bags, 2 dim beige bags.
dull orange bags contain 1 bright silver bag.
vibrant red bags contain 2 light turquoise bags, 4 dark green bags, 4 dull plum bags, 3 striped plum bags.
bright silver bags contain 2 light purple bags, 5 muted green bags.
vibrant yellow bags contain 1 dotted gold bag.
plaid chartreuse bags contain 5 muted green bags, 3 dim maroon bags, 4 drab black bags, 5 mirrored turquoise bags.
dull salmon bags contain 1 wavy bronze bag.
dim teal bags contain 2 vibrant magenta bags, 2 dull aqua bags, 2 dark crimson bags.
striped coral bags contain 4 light salmon bags.
dark teal bags contain 2 clear yellow bags, 2 mirrored coral bags, 5 mirrored yellow bags.
dark indigo bags contain 1 clear gray bag, 5 wavy violet bags.
bright indigo bags contain 5 light maroon bags, 1 muted magenta bag, 3 vibrant lime bags.
drab plum bags contain 5 wavy coral bags, 1 wavy aqua bag, 5 dim tan bags.
drab beige bags contain 4 wavy teal bags, 4 dotted orange bags, 4 dotted coral bags.
dull yellow bags contain 3 wavy tan bags, 2 plaid green bags, 3 bright magenta bags, 1 vibrant beige bag.
muted olive bags contain 2 faded black bags, 2 bright fuchsia bags.
drab chartreuse bags contain 3 clear bronze bags, 3 plaid brown bags, 4 light magenta bags, 2 clear salmon bags.
clear violet bags contain 5 plaid beige bags, 3 striped white bags, 5 light teal bags, 3 dotted silver bags.
posh lime bags contain 1 faded plum bag, 4 mirrored white bags, 4 posh aqua bags.
faded red bags contain 5 bright fuchsia bags, 4 faded cyan bags, 4 dark violet bags.
muted maroon bags contain 1 vibrant lime bag, 3 dim fuchsia bags, 1 drab lavender bag, 3 light blue bags.
drab red bags contain 1 pale orange bag, 3 dim teal bags, 2 wavy orange bags, 5 dark salmon bags.
dim silver bags contain 4 dim lime bags, 5 drab maroon bags, 2 vibrant coral bags, 1 vibrant white bag.
light aqua bags contain 5 light fuchsia bags.
light cyan bags contain 3 muted fuchsia bags.
dull black bags contain 2 pale lavender bags.
mirrored turquoise bags contain 4 dull lime bags, 4 dull silver bags.
pale coral bags contain 2 shiny silver bags, 1 dull turquoise bag, 2 shiny purple bags.
dull beige bags contain 2 mirrored teal bags, 3 dotted white bags, 5 posh blue bags.
muted yellow bags contain 2 dim maroon bags.
dim white bags contain 2 pale crimson bags, 4 clear brown bags, 2 mirrored coral bags.
faded yellow bags contain 2 light turquoise bags.
dim cyan bags contain 4 mirrored yellow bags, 1 clear blue bag, 4 striped maroon bags.
posh purple bags contain 2 drab crimson bags, 5 shiny violet bags, 5 drab cyan bags, 5 dark tomato bags.
drab crimson bags contain 5 plaid tan bags.
posh teal bags contain 5 light olive bags, 5 mirrored teal bags, 3 bright white bags, 5 mirrored white bags.
dark orange bags contain 5 mirrored lavender bags, 2 posh purple bags, 4 wavy magenta bags, 5 plaid cyan bags.
dotted beige bags contain 3 bright brown bags, 1 pale orange bag, 3 light orange bags, 2 clear beige bags.
bright gold bags contain 4 pale gray bags, 5 muted maroon bags, 3 drab tan bags, 5 mirrored turquoise bags.
faded fuchsia bags contain 3 shiny red bags, 5 faded violet bags.
dotted black bags contain 4 muted teal bags, 5 faded violet bags, 5 mirrored coral bags.
muted plum bags contain 4 plaid gray bags.
faded orange bags contain 4 wavy bronze bags, 2 light crimson bags, 3 mirrored bronze bags, 5 striped maroon bags.
plaid gold bags contain 5 pale crimson bags, 4 clear tan bags, 3 wavy turquoise bags, 2 dim chartreuse bags.
mirrored violet bags contain 4 dim brown bags.
pale cyan bags contain 3 dotted aqua bags, 5 dim fuchsia bags, 1 dim violet bag, 1 clear yellow bag.
dull magenta bags contain 3 light chartreuse bags, 4 light aqua bags, 3 faded indigo bags, 4 clear blue bags.
light teal bags contain 1 shiny cyan bag.
dark beige bags contain 3 dull tan bags, 3 shiny aqua bags, 3 drab black bags, 1 faded cyan bag.
light yellow bags contain 1 dim beige bag, 1 wavy cyan bag, 1 dim coral bag.
bright aqua bags contain 2 drab beige bags, 3 dotted aqua bags, 5 drab olive bags.
shiny teal bags contain 5 vibrant tan bags, 1 posh blue bag, 5 dotted gray bags.
mirrored blue bags contain 1 dim beige bag.
clear magenta bags contain 4 clear tan bags, 5 plaid orange bags, 3 bright violet bags, 3 light lime bags.
pale green bags contain 2 vibrant white bags.
light fuchsia bags contain 4 wavy plum bags, 5 dull olive bags, 5 striped orange bags.
bright lime bags contain 1 dark yellow bag.
dull tomato bags contain 3 wavy blue bags, 1 drab aqua bag.
faded indigo bags contain 5 posh gold bags, 4 shiny beige bags, 4 wavy gray bags, 5 dim magenta bags.
wavy coral bags contain 4 dark olive bags, 5 dull silver bags, 1 clear magenta bag, 1 light crimson bag.
shiny plum bags contain 4 shiny tan bags, 3 vibrant white bags, 1 striped gold bag.
clear aqua bags contain 1 light crimson bag, 4 bright silver bags, 2 wavy gold bags, 3 mirrored indigo bags.
plaid blue bags contain no other bags.
dark lime bags contain 3 dim chartreuse bags, 5 plaid indigo bags, 1 dim brown bag.
clear plum bags contain 5 light salmon bags, 4 drab lavender bags.
plaid cyan bags contain no other bags.
clear white bags contain 2 vibrant tomato bags.
faded tan bags contain 1 dull yellow bag, 2 shiny indigo bags.
plaid coral bags contain 1 dull bronze bag, 2 clear tan bags, 3 clear maroon bags.
pale bronze bags contain 4 wavy cyan bags, 3 pale aqua bags, 3 dark maroon bags, 5 dim fuchsia bags.
posh green bags contain 4 clear plum bags, 1 pale cyan bag, 3 striped maroon bags.
dim indigo bags contain 4 vibrant green bags, 3 dark teal bags, 2 dim violet bags, 4 shiny aqua bags.
muted violet bags contain 3 wavy tan bags.
muted tomato bags contain 3 drab yellow bags, 2 muted green bags.
posh white bags contain 3 striped chartreuse bags, 4 wavy blue bags.
drab brown bags contain 1 wavy fuchsia bag, 3 wavy lime bags.
dim purple bags contain 5 wavy gray bags, 3 shiny cyan bags.
vibrant brown bags contain 4 shiny orange bags, 2 mirrored bronze bags, 1 clear salmon bag, 4 shiny silver bags.
light purple bags contain 2 light brown bags.
mirrored teal bags contain 5 bright brown bags, 2 drab aqua bags.
dark cyan bags contain 4 wavy lime bags.
clear bronze bags contain 5 clear green bags, 4 dull black bags, 5 muted salmon bags.
posh tan bags contain 4 dim orange bags.
vibrant magenta bags contain 2 clear magenta bags, 5 drab purple bags, 2 bright fuchsia bags.
bright tomato bags contain 4 pale bronze bags.
faded green bags contain 2 vibrant indigo bags, 4 plaid indigo bags, 5 drab red bags, 5 clear turquoise bags.
wavy olive bags contain 4 mirrored crimson bags, 4 dotted green bags, 4 drab lime bags, 5 posh brown bags.
dark brown bags contain 2 mirrored olive bags, 2 striped blue bags.
muted orange bags contain 1 dark gray bag, 3 posh silver bags, 1 dim lavender bag.
shiny beige bags contain 1 dark silver bag, 5 dotted violet bags.
mirrored olive bags contain 1 dull violet bag.
shiny aqua bags contain 3 light fuchsia bags, 3 plaid gray bags, 4 dull orange bags.
mirrored brown bags contain 4 faded olive bags, 2 plaid aqua bags, 2 posh cyan bags, 4 pale purple bags.
muted bronze bags contain 5 vibrant lime bags, 5 light crimson bags, 5 wavy tan bags.
striped maroon bags contain 4 dark salmon bags, 1 posh white bag, 4 shiny green bags, 3 drab lavender bags.
vibrant purple bags contain 2 posh gray bags, 3 dark chartreuse bags, 3 wavy bronze bags, 5 faded purple bags.
dark turquoise bags contain 4 vibrant bronze bags, 4 pale tomato bags, 4 vibrant teal bags.
drab orange bags contain 2 shiny teal bags, 2 light olive bags, 2 dim coral bags.
shiny gold bags contain 2 mirrored orange bags, 2 dotted coral bags, 3 dim fuchsia bags.
wavy orange bags contain 4 clear beige bags, 4 faded gold bags.
bright brown bags contain 4 shiny green bags, 1 mirrored bronze bag, 4 dull silver bags, 3 drab purple bags.
posh turquoise bags contain 2 mirrored turquoise bags, 3 dotted tomato bags, 2 mirrored fuchsia bags, 5 pale tomato bags.
faded black bags contain 3 light lime bags.
muted chartreuse bags contain 4 shiny green bags.
striped cyan bags contain 5 mirrored olive bags, 4 dark silver bags.
vibrant turquoise bags contain 3 shiny teal bags.
wavy crimson bags contain 1 posh lime bag.
dull green bags contain 4 dull gray bags, 5 shiny lime bags.
wavy tan bags contain 4 dull olive bags, 3 faded cyan bags, 1 dim maroon bag, 4 striped crimson bags.
vibrant coral bags contain 5 mirrored lavender bags.
light coral bags contain 5 clear yellow bags, 1 faded violet bag, 3 drab yellow bags.
striped blue bags contain 5 striped crimson bags, 1 drab purple bag, 2 dotted coral bags.
vibrant fuchsia bags contain 3 striped blue bags.
drab gold bags contain 4 dark chartreuse bags, 2 clear orange bags, 5 vibrant magenta bags, 1 wavy gray bag.
dim beige bags contain 4 drab yellow bags, 3 clear tan bags, 2 drab lavender bags, 1 striped green bag.
mirrored chartreuse bags contain 5 posh gold bags, 2 posh violet bags.
vibrant maroon bags contain 2 faded brown bags, 3 light red bags.
dim bronze bags contain 3 pale tomato bags, 4 shiny green bags, 4 posh orange bags.
clear purple bags contain 1 wavy purple bag, 1 plaid aqua bag, 4 drab cyan bags.
dull chartreuse bags contain 5 drab beige bags.
bright lavender bags contain 3 plaid green bags, 1 wavy indigo bag, 4 vibrant brown bags, 4 mirrored black bags.
muted crimson bags contain 4 dotted gray bags.
shiny brown bags contain 2 pale black bags, 5 dark olive bags.
posh orange bags contain 2 pale coral bags.
mirrored lavender bags contain 1 drab yellow bag, 5 mirrored bronze bags.
vibrant aqua bags contain 3 dim brown bags.
pale beige bags contain 5 drab plum bags, 4 clear tan bags, 2 light silver bags.
vibrant tomato bags contain 4 faded gold bags, 4 dim brown bags, 3 wavy cyan bags.
drab black bags contain 1 shiny tan bag, 2 wavy orange bags, 3 wavy plum bags, 5 posh silver bags.
faded blue bags contain 2 clear chartreuse bags, 3 bright turquoise bags, 1 clear lime bag.
clear black bags contain 4 pale magenta bags, 1 faded orange bag, 2 plaid salmon bags, 1 bright yellow bag.
dim maroon bags contain no other bags.
dotted olive bags contain 5 plaid indigo bags.
dotted silver bags contain 4 posh maroon bags, 1 vibrant brown bag, 4 mirrored olive bags.
plaid lavender bags contain 4 dull lime bags, 2 wavy coral bags, 5 dim silver bags, 4 dim fuchsia bags.
striped salmon bags contain 3 posh bronze bags, 1 bright aqua bag, 1 wavy white bag.
vibrant crimson bags contain 2 vibrant lime bags, 3 striped black bags, 2 dull plum bags.
plaid silver bags contain 4 clear crimson bags, 3 wavy white bags, 4 pale coral bags, 1 wavy brown bag.
clear tan bags contain 4 clear brown bags, 4 dim maroon bags, 1 wavy purple bag.
striped yellow bags contain 4 posh turquoise bags, 5 wavy yellow bags, 1 muted bronze bag.
clear lavender bags contain 1 striped lime bag, 4 dim chartreuse bags, 2 dim tan bags.
shiny white bags contain 4 bright brown bags, 1 dull indigo bag.
drab blue bags contain 2 bright gold bags, 3 faded beige bags, 3 dark lime bags.
posh violet bags contain 4 clear brown bags.
light gold bags contain 2 shiny purple bags, 4 mirrored bronze bags.
dull turquoise bags contain 5 dull silver bags.
vibrant cyan bags contain 1 wavy lavender bag.
dotted violet bags contain 5 vibrant violet bags, 5 vibrant blue bags, 1 dim violet bag, 5 wavy cyan bags.
drab olive bags contain 4 dotted aqua bags.
wavy beige bags contain 3 mirrored lavender bags, 2 posh white bags, 3 bright fuchsia bags.
bright blue bags contain 1 drab indigo bag.
wavy gold bags contain 2 shiny orange bags.
striped fuchsia bags contain 1 striped chartreuse bag.
posh red bags contain 4 vibrant tomato bags, 1 dark maroon bag.
faded plum bags contain 2 drab indigo bags, 3 bright turquoise bags.
dull plum bags contain 5 vibrant magenta bags.
dotted gold bags contain 4 striped maroon bags.
dotted brown bags contain 1 vibrant brown bag, 2 vibrant crimson bags, 2 striped purple bags, 5 striped olive bags.
pale lavender bags contain 5 wavy fuchsia bags, 5 wavy lavender bags.`
}
