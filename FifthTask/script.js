let num = document.querySelectorAll("input[type='number']"),
    ran = document.querySelectorAll("input[type='range']");
let rN = document.getElementById('redN'),
    gN = document.getElementById('greenN'),
    bN = document.getElementById('blueN'),
    rR = document.getElementById('redR'),
    gR = document.getElementById('greenR'),
    bR = document.getElementById('blueR');

for(let item of num){
  item.addEventListener('click', ()=>{
    rR.value = rN.value; gR.value = gN.value; bR.value = bN.value;
    document.body.style.backgroundColor = 'rgb(' + rN.value + ',' + gN.value + ',' + bN.value + ')';
    const dec = document.getElementById('dec').value = ''+rN.value+', '+gN.value+', '+bN.value+'';
    const hex = document.getElementById('hex').value = '#'+Number(rN.value).toString(16)+Number(gN.value).toString(16)+Number(bN.value).toString(16);
  });
};

for(let item of ran){
  item.addEventListener('mousemove', ()=>{
    rN.value = rR.value; gN.value = gR.value; bN.value = bR.value;
    document.body.style.backgroundColor = 'rgb(' + rR.value + ',' + gR.value + ',' + bR.value + ')';
    const dec = document.getElementById('dec').value = ''+rR.value+', '+gR.value+', '+bR.value+'';
    const hex = document.getElementById('hex').value = '#'+Number(rR.value).toString(16)+Number(gR.value).toString(16)+Number(bR.value).toString(16);
  });
};