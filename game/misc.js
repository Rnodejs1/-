document.onkeydown = (e)=>
{
    if(keyswitch[e.key]){
        if(e.key=="ArrowUp"){
            if(keyc==0){
                   console.log(keyswitch[e.key])
                    keyswitch[e.key]=false
    }
}}//cooltime
    else{
        if(e.key=="ArrowUp"){
         keyc=30

         console.log(keyswitch[e.key])
        keyswitch[e.key]=true}
    keystate[e.key]=true}

}
document.onkeyup = (e)=> {
    keystate[e.key]=false
}

function hitjuage(x1,y1,w1,h1,x2,y2,w2,h2){
    //左上を位置とするので　ｘもｙも
    let left1 = x1>>8
    let right1=left1+w1
    let top1 = y1>>8
    let bottom1 = top1 +h1

    let left2 = x2>>8
    let right2=left2+w2
    let top2 = y2>>8
    let bottom2 = top2 +h2
return(left1<=right2&&
    left2<=right1&&
    top1<=bottom2&&
    top2<=bottom1)}


class Pbase{
    constructor(type,x,y,vx,vy){
        this.type=type
        this.x=x
        this.y=y
        //進む距離
        this.vx=vx
        this.vy=vy
        this.Shooted=false
        this.count=0
    
    }

    Update(){
        this.x+=this.vx
        this.y+=this.vy
        if(this.x<0||this.y<0||this.x>field_w<<8||this.y>field_h<<8){
            this.Shooted=true
        }        
    
        this.count++
    }
    draw(){
        drawCharctor(this.type,this.x,this.y)
    }
}
/*ランダム整数作成 */
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

 
//キャラを仮想キャンバスへ描画する
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
//image1キャラを仮想キャンバスへ描画する
function d(snum,x,y){
    let sx = sp1[snum].x
    let sy = sp1[snum].y
    let sh = sp1[snum].h
    let sw = sp1[snum].w
    let cpx=(x>>8)-(sw/2)
    let cpy=(y>>8)-(sh/2)
    if(cpy>=cameray+screnn_h||cpy+sh<0||cpx+sw<0||cpx>=camerax+screen_w){
        return
    }
    vgamescreen.drawImage(image1,sx,sy,sw,sh,cpx,cpy,sw,sh)
}
class Expl extends Pbase{

    constructor(c,x,y,vx,vy){
        super(0,x,y,vx,vy)
        this.c=c}

    Update(){
        //何かあればｃに
        if(this.c)
            {this.c--;return}
        //ない場合
        else{
            super.Update()}}

    draw()  {　　　
        super.draw()
        //カウントをもとに　精製は当たった時に作られるので　1>>2＝０　４で１ 4フレームで１ずつ足す
        this.type = 6 + (this.count>>2) 
         //もし画像が最後まで来たら
        if(this.type == 15)
        {this.Shooted=true; return}}}

//爆発処理関数
function e(x,y,vx,vy,delay,count,v){
    //爆発する回数
    for(let i = 0 ; i<count;i++)
    {let evy=vy+(rand(-10,10)<<v)//ここで爆発中の間の移動を
    let evx=vx+(rand(-10,10)<<v)
    expl.push(new Expl(i*delay,x,y,evx,evy))}}

/*星を管理 */
class Star {
    constructor(){
        //開始位置
        this.x = rand(0,field_w)<<8;
        this.y = rand(0,field_h)<<8;
        //移動速度
        this.vx = 0
        this.vy = rand(222,488);
        this.size=rand(1,2);
    }
    
    /**作られた星を描画する 　*/
    draw(){
        let X=this.x>>8
        let Y=this.y>>8    
        if(X<camerax||X>=camerax+screen_w||Y<cameray||Y>=cameray+screnn_h
        )
        {return}
     
        vgamescreen.fillStyle = rand(0,2)!=0?"white":"#000";         
        vgamescreen.fillRect(X,Y, this.size, this.size); // (x座標, y座標, 横の大きさ, 高さの大きさ)
    }
    /**　もし位置が描画されるふぃーるど以上だと　上に戻し　横をランダムにする */
    Update(){
        this.x += this.vx;
        this.y += this.vy;
        if( this.y > field_h<<8)
        {this.y = 0
        this.x = rand(0,field_w)<<8;
        }
}}