//星オブジェクト
let stars=[]

//　爆発オブジェクト
let expl=[]

//戦闘機オブジェクト
var jet,keyc

//ゲーム画面サイズ
const screen_w= 600
const screnn_h= 340


//キャンバスのサイズ
const canvas_w= screen_w*2.4
const canvas_h= screnn_h*2

//フィールド
const field_w = screen_w*2
const field_h = screnn_h*2

//FPS
const FPS =1000/60

/*デバッグ*/
let DEBAG=true
let SMOO = true

/*カメラの変数　リアルスクリーンの開始位置 */
let camerax = 0
let cameray = 0

let hitco=0

/*　画像のどうにゅう*/
let imagechar =new Image();
imagechar.src="sprite.png"
let image1 =new Image();
image1.src="image (1).png"
/*現在のボタン */
var keystate=[]
var keyswitch = []
keyswitch["ArrowUp"]=false

/*弾をためる*/
let tamastrage=[]
var tetas=[]

/*敵を入れる*/
let enemys=[]

//キャンバス設定
let tag= document.getElementById("aaa")
tag.width = canvas_w
tag.height = canvas_h
let realgamescreen = tag.getContext("2d")


realgamescreen.msimageSmoothingEnabled=SMOO
realgamescreen.webkitimageSmoothingEnabled=SMOO
realgamescreen.mozimageSmoothingenabled=SMOO
realgamescreen.imageSmoothingEnabled=SMOO

//仮想 htmlに描画されないキャンバスの
let vcan=document.createElement("canvas")
vcan.width = field_w
vcan.height = field_h
let vgamescreen = vcan.getContext("2d")


/*初期化き　開始関数 */
function construct(){

    //開始時　オブジェクト作る
    //　星
    for(let i=0;i<300;i++)
        {stars[i] = new Star()}
    //　戦闘機
    jet=new mainchar()
    //
    
    //ここでゲーム開始
    setInterval(makedisplay, FPS);
}


/*毎度呼ばれる　静的描画を作る*/
function makedisplay(){
    if(rand(1,80)==1&&enemys.length<3){
        enemys.push(new Enemy(21,rand(0,field_w)<<8,111,0,rand(1000,1000),33,26))
        // enemys.push(new Enemy(9,rand(0,field_w)<<8,111,0,rand(1000,1000)))
    }
    if(keyc>0)keyc--;
    drawAll()
   UpdateAll()
    
    if(DEBAG)infoAll()
 }

 function itemdraw(ina){
    for(let i=ina.length-1;i>=0;i--){
        ina[i].draw()
        
    }
}

//　アップデート関数 全部のアプデメソッドを使う　あと　範囲や当たり
function itemdata(ina){
    for(let i=ina.length-1;i>=0;i--){
        ina[i].Update()
        if(ina[i].Shooted)
            {
                ina.splice(i,1)
            }
}}

/*描画する　星　背景　*/
function drawAll(){
    vgamescreen.clearRect(0,0,innerWidth,innerHeight)

    vgamescreen.fillStyle = (jet.damage)    ?"red":'#070101';         
    vgamescreen.fillRect(camerax,0,screen_w,screnn_h);
    for(let i=0;i<300;i++)
        { stars[i].draw();}
    jet.draw()
    itemdraw(expl)
    itemdraw(tetas)
    itemdraw(tamastrage)
    itemdraw(enemys)
    camerax = (jet.x>>8)/field_w*(field_w-screen_w) //初期カメラ位置追従   
    realgamescreen.drawImage(vcan,camerax,0,screen_w,screnn_h,0,0,canvas_w,canvas_h);}

//更新
function UpdateAll(){
    itemdata(expl)
    itemdata(tetas)
    /*星*/for(let i=0;i<300;i++){stars[i].Update()}
    /*ジェット*/jet.Update()
    /*弾をあったら更新*/
    itemdata(tamastrage)
    itemdata(enemys)


}
//　デバッグ
function infoAll(){realgamescreen.font = "16px Impact";
realgamescreen.fillStyle="white";
realgamescreen.fillText("Tama:"+tamastrage.length,20,20)    ;

realgamescreen.fillText("Teki   :"+tetas.length,20,40)   ;
realgamescreen.fillStyle="white";

realgamescreen.fillText("Teki   :"+enemys.length,20,60) ;

realgamescreen.fillStyle="red";
realgamescreen.fillText("クールタイム:"+(jet.reload/60).toFixed(1)+"秒",0,620)

realgamescreen.font="31px Impact"
realgamescreen.fillText("hit:"+hitco,20,90)
}
window.onload=function(){
    construct()
    }



