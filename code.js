const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
const btn1=document.getElementById("btn1");
const output=document.querySelector(".content");
const outputt=output.querySelector("span");
const btn2=document.getElementById("btn2");
let count =0,c=0;
btn1.addEventListener("click",()=>{
    const str1=input1.value.split('');
    const str2=input2.value.split('');
    if(str1&&str2==""||str2==""||str1==""){
        alert("Fill The Both Name");
    }
    else{
        for(let i=0;i<str1.length;i++){
            for(let j=0;j<str2.length;j++){
                if(str1[i]==str2[j]){
                    str1[i]=0;
                    str2[j]=0;
                }
            }
        }
        str3=str1.concat(str2)
        for(let i=0;i<str3.length;i++){
            if(str3[i]!=" "&&str3[i]!=0){
                count++;
            }
        }
        setTimeout(flames,200);
    }
})
let k="flames".split('');
let ans,index;
let f="Friends...!",l="Lovers...<3",a="Affectionate...$",m=" Best Couples...{:)}",e="Enemies...#",s="Sisters..^";
function flames(){
    ans=k[count%6];
    console.log(ans);
    display();
}
function display(){
    console.log(count);
    let name=input1.value.toUpperCase();
    let namee=input2.value.toUpperCase();
    if(ans==k[0]){
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
        output.querySelector("span").innerText=`${f}`;
        
    }
    else if(ans==k[1]){
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
         output.querySelector("span").innerText=`${l}`;
    }
    else if(ans==k[2]){
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
        output.querySelector("span").innerText=`${a}`;

    }
    else if(ans==k[3]){
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
        output.querySelector("span").innerText=`${m}`;

    }else if(ans==k[4]){
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
        output.querySelector("span").innerText=`${e}`;

    }else{
        output.querySelector("h1").innerText=`${name} And ${namee} Both Are`;
        output.querySelector("span").innerText=`${s}`;
        
    }

btn2.addEventListener("click",()=>{
    window.location.reload();
})
}
