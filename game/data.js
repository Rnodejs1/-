/* 画像の切り取る情報*/
class charpositioninfo{
    constructor(x,y,w,h)
    {
        this.x=x/*どこを起点 */
        this.y=y
        this.w=w/*そこからの範囲 */
        this.h=h
    }
}
function drawCharctor(snum,x,y){
    let sx = sp1[snum].x
    let sy = sp1[snum].y
    let sh = sp1[snum].h
    let sw = sp1[snum].w
    let cpx=(x>>8)-(sw/2)
    let cpy=(y>>8)-(sh/2)
    if(cpy>=cameray+screnn_h||cpy+sh<0||cpx+sw<0||cpx>=camerax+screen_w){
        return
    }
    vgamescreen.drawImage(imagechar,sx,sy,sw,sh,cpx,cpy,sw,sh)
}
/*画像アイテムの位置配列 */
let sp1=[
    new charpositioninfo(0, 0,22,42),//0 
    new charpositioninfo(23, 0,33,42),//1
    new charpositioninfo( 57, 0,43,42),//2
    new charpositioninfo(101, 0,33,42),//3
    new charpositioninfo(135, 0,21,42),//4
    new charpositioninfo( 0,50, 3, 7),/* 5たま */
    new charpositioninfo(  5,351, 9, 9),//6  ,爆発1
	new charpositioninfo( 21,346,20,20),//7  ,爆発2
	new charpositioninfo( 46,343,29,27),//8  ,爆発3
	new charpositioninfo( 80,343,33,30),//9  ,爆発4
	new charpositioninfo(117,340,36,33),//10  ,爆発5
	new charpositioninfo(153,340,37,33),//11  ,爆発6
	new charpositioninfo(191,341,25,31),//12  ,爆発7
	new charpositioninfo(216,349,19,16),//13  ,爆発8
	new charpositioninfo(241,350,15,14),//14  ,爆発9
	new charpositioninfo(259,350,14,13),//15  ,爆発10
    new charpositioninfo(  0,43,5,8),//16　sniper
    new charpositioninfo(0,43,4,8 ), //1七   
    new charpositioninfo(  0,54,9,9),   //18
    new charpositioninfo(  0,68,8,8),   //19 
    new charpositioninfo( 0,124,30,32),   //20
    new charpositioninfo( 34,126,28,26),   //21
    new charpositioninfo( 61,124,30,30),   //22
    new charpositioninfo( 0,124,30,32),   //23
    new charpositioninfo( 0,124,30,32),   //24
    new charpositioninfo( 0,124,30,32),   //26
    new charpositioninfo( 113,45,10,8),   //2７  
    new charpositioninfo( 0,68,10,10),   //28 　ミサイル
    new charpositioninfo( 15,65,12,10),   //29
    new charpositioninfo( 36,63,28,22),   //30
    new charpositioninfo(202,2,42,42),
]
