var x = 3;
console.log("which i am  "+this.x);
function r(){
    console.log(x);
}
function who(){
  this.x=9;
console.log("which-" + this.x)
};


var mywho =new who();
r();
