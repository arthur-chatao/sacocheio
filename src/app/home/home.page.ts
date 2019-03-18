import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 nome : string = "Anielen";

valor : string = '';
v1 : number = 0;
v2 : number = 0;
par_impar : number = 0;
n1 : number = 0;
n2 : number = 0;
n3 : number = 0;
 clicar() : void {
   alert("Professor Eduardo diz: Paguem com seu salário "+this.v3);
 }

 result() : void {
   let total = Number(this.v1) + Number(this.v2);
   alert ("resultado é "+total);
 }

 par() : void {
   let verificador = (Number(this.par_impar) % 2) ;
   if(verificador == 0){
      alert (" é par ");
      }
  else{
      alert ("n é par ");
  }

 }
 maior() : void {
   if( (Number(this.n1) > Number(this.n2) ) && (Number(this.n1) > Number(this.n3))) {
       alert ("o maior é "+this.n1);
   }
   else if ( (Number(this.n2) > Number(this.n1) ) && (Number(this.n2) > Number(this.n3))){
      alert ("o maior é "+this.n2);
   }
   else {
     alert ("o maior é "+this.n3);
   }
 }

}
