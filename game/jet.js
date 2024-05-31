//jet
class Tama extends Pbase{
    constructor(type,x,y,vx,vy,A,delay=1){
        super(type,x,y,vx,vy)  
        this.an=0
        this.w=20
        this.h=20
        this.anim=type
        this.flag=false
        this.end=type+A
        this.delay=delay

    }
   
    Update(){
        
        this.count++
        
            this.x+=this.vx
        this.y+=this.vy
        //
        if(this.x<0||(Math.abs(jet.y-this.y))>jet.range<<8||this.x>field_w<<8||this.y>field_h<<8){
            this.Shooted=true
        // 
    }        

        // if(this.flag==false)
        // { 
        //     this.type=this.type+1
        // }
        
        //     if(this.type==20)
        //     this.flag=true
        //     }
            /*当たり */
        for(let i = 0;i < enemys.length;i++)
            {   
                if(!enemys[i].Shooted){
                    if(hitjuage(this.x,this.y,this.w,this.h,enemys[i].x,enemys[i].y,enemys[i].w,enemys[i].h))
                {   
                    hitco+=100
                    enemys[i].Shooted=true
                    this.Shooted=true
                    
                    if(jet.tamatype=="bomm"){
                    e(enemys[i].x,enemys[i].y,enemys[i].vx>>3,enemys[i].vy>>3,2,33,5)}
                    else if(jet.tamatype=="sniper"){
                        e(enemys[i].x,enemys[i].y,enemys[i].vx>>2,enemys[i].vy>>2,1,3,2)
                    }

                    break

                }}

            }
        }
        
    draw(){ 
        if(this.flag===false)
        this.type =this.anim+(this.count>>this.delay)
         //もし画像が最後まで来たら
        if(this.type==this.end)
        {this.flag=true;

        }
        d(this.type,this.x,this.y)
    }
}
class mainchar{
    constructor(){
        this.tamatype="bomm"
        this.range=140
        this.w=42
        this.DAS=0
        this.h=42

        this.damage=0
        this.x=(field_w/2)<<8/**/ 
        this.y=((field_h/2)-66)<<8
        this.reload=0
        this.DAShed=false
        this.state=1
        this.pase=0
        /*移動スピード */
        this.speed=661

        /**変化演算 */
        this.anime=0
        this.muteki=0
    }
    /**1フレームの処理*/
    Update(){console.log(this.DAS)
        //弾を受けた場合処理
        if(this.damage){
            this.damage--;}
            if(this.muteki){ this.muteki--}
        if(this.reload>0)
            {
             this.reload--
            }
        if(this.DAS){this.DAS--
                
         }
        if(this.DAS==0){
             this.DAShed=false
            }
        /*発射する動作 */

        
        //あさると　&& keyswitch["ArrowUp"] == false
        if (hitco>6&&keystate[" "] && !keystate["ArrowLeft"] && !keystate["ArrowRight"] && this.reload == 0 ) {
           
            //４発の散弾　Tama(開始画像,開始位置x,開始位置y,移動x,移動y,変化画像数)
           
            tamastrage.push(new Tama(30, this.x + (-3 << 8), this.y, 400, -2000,0,4));
            tamastrage.push(new Tama(30 , this.x + (-9 << 8), this.y, 200, -2000,0,4));
            tamastrage.push(new Tama(30, this.x + ( 3<< 8), this.y, -420, -2000,0,4));
            tamastrage.push(new Tama(30, this.x + ( 9<<8), this.y, -200, -2000,0,4));
           
            //射程
            this.range = 440;
            //弾の種類　次第で敵のエフェクトを変える
            this.tamatype = "bomm";
        
            //Pase ＝　射撃する玉の数
            if(++this.pase>1){
                    this.pase=0
                //クールタイム
                this.reload=20}
            }


        //スナイパー &&keyswitch["ArrowUp"]
        if(keystate[" "]&&this.reload==0&&!keystate["ArrowLeft"]&&!keystate["ArrowRight"]&&hitco<=6){   
                /*で配列に入れておく*/
            tamastrage.push(new Tama(16,this.x+(4<<8),this.y,0,-3000,1))        
            this.range=333
            this.tamatype="sniper"
            this.pase++;
            if(this.pase>1)
                        {
                            this.reload=30
                            this.pase=0
                        }
                }
        //右の射撃        
        if(keystate["ArrowRight"]&&this.reload==0&&!keystate["ArrowLeft"]){   
            /*で配列に入れておく*/
            tamastrage.push(new Tama(17,this.x,this.y+(4<<8),1888,0,1))   
            tamastrage.push(new Tama(17,this.x,this.y+(11<<8),1888,0,1))        
            this.range=44   
            this.tamatype="bomm"
            if(++this.pase>3){
                        this.pase=0
                        this.reload=10
                    }
            }
            
        //右の射撃    
        if(keystate["ArrowLeft"]&&this.reload==0&&!keystate["ArrowRight"]){   
            /*で配列に入れておく*/
            tamastrage.push(new Tama(17,this.x,this.y+(4<<8),-1888,0,1))   
            tamastrage.push(new Tama(17,this.x,this.y+(11<<8),-1888,0,1))        
            this.range=44   
            this.tamatype="bomm"
            if(++this.pase>3)
                    {
                        this.pase=0
                        this.reload=8
                    }
            
         }
        
            
        
        //ｗを押すとｙの-方向０へ位置を変える　 もし0になったら高齢上位置をマイナスしない
        if(keystate["w"]&&this.y>this.speed){
            this.y-=this.speed
            this.state=2}           
       
        if(keystate["s"]&&this.y<82442){
           this.y+=this.speed;
           this.state=3
        }
        
    
        if(keystate["d"]&& this.x < (field_w<<8)-this.speed){
               this.x+=this.speed;

               if(keystate["ArrowDown"]&&this.DAShed===false){
                this.DAShed=true
          
               this.x+=this.speed*33
  
                this.anime=22
                setTimeout(()=>{this.anime=2},200)
               console.log(this.DAShed)
               if(this.x>field_w<<8)
                   {
                       this.x=field_w<<8
                   }
               this.DAS=60
               console.log(this.DAShed)
  
          }
               console.log("d")
               // ４<x>8　で1              
                if(this.anime < 8){
                   this.anime++;}     
        }
           
        else if(keystate["a"] && this.x>this.speed){
               this.x-=this.speed;


               if(keystate["ArrowDown"]&&this.DAShed===false){
                this.DAShed=true
          
               this.x-=this.speed*33
               this.anime=22
               setTimeout(()=>{this.anime=2},200)
               console.log(this.DAShed)
               if(this.x>field_w<<8)
                   {
                       this.x=field_w<<8
                   }
               this.DAS=60
               
               }

            //飛行機のアニメーション　
            if(this.anime > -8){
                this.anime--;
                
            }
        }
        else{
            if(this.anime>0){this.anime--}
            else{this.anime++}
        }
    }

    /*呼ばれると更新された現在位置を描画する*/
    draw(){

        
        if(this.muteki&&this.muteki%2==0){//無敵の時描画しない
        return}
    else{
        /*無敵じゃないとき */
        drawCharctor(2+(this.anime>>2),this.x,this.y)
    }}
  }
