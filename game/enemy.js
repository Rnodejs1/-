class Tekitama extends Pbase{

   constructor(type,x,y,vx,vy){
      super(type,x,y,vx,vy)
      this.w = 8 
      this.h = 9}

   Update(){
      super.Update()
      if(hitjuage(this.x,this.y,this.w,this.h,jet.x,jet.y,jet.w,jet.h)){
         jet.Shooted=true
         this.Shooted=true
         jet.damage=5
         jet.muteki=60
         }}
      draw(){

  
            d(this.type,this.x,this.y)
  
      }
      }


class Enemy extends Pbase{

   constructor(type,x,y,vx,vy,w,h){
         super(type,x,y,vx,vy);
         this.fla = false
         this.w   = w
         this.h   = h }

   Update(){
      super.Update()

      
      
      //敵が戦闘機の近づくの処理

        //もし　戦闘機より　左だったら
      if(this.x<jet.x&&this.vx<111){
         this.vx+=33}
         //もし右なら
      else if(this.x>jet.x&&this.vx >-333){
         this.vx-=44}

         //　戦闘機より下に行ったら
         // if(jet.y<this.y&&Math.abs(jet.y-this.y)<31<<8)
         //    {this.Shooted=true
         //    }
      //近づいたら　　ｙ　２００　ｘ　2００  　field内の時
      else if(Math.abs(jet.y-this.y)<200<<8&&Math.abs(jet.x-this.x)<311<<8&&!this.fla&&jet.y>this.y&&this.x>field_w&&this.x>0){
         this.fla=true        
          //銃を発射
         var a,ko,th
         a=Math.atan2(jet.y-this.y,jet.x-this.x)
         ko = Math.cos(a)*999;
         th = Math.sin(a)*999;
         tetas.push(new Tekitama(18,this.x,this.y,ko,th))}
      
   //近づいたら戻る   
   if(this.fla && this.vy >-800){
         this.vy-=40}
      //敵が戦闘機に当たる場合の処理
   if(hitjuage(this.x,this.y,this.w,this.h,jet.x,jet.y,jet.w,jet.h)){
      jet.Shooted=true
            this.Shooted=true
         jet.damage=5}
 }
   draw(){
      super.draw()
   
   }
}

