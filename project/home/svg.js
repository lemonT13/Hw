const eclatx = document.querySelectorAll(".eclatx path");

for(let i =0; i < eclatx.length; i++) {
    console.log(`Letter ${i} is ${eclatx[i].getTotalLength()}`);
}