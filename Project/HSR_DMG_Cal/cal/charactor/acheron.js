//图片
const charImg = document.querySelector('.char-img');
const weaponImg = document.querySelector('.weapon-img');

charImg.innerHTML = '<img src="charactor/img/char/acheron.png" alt="" width="70%">';
weaponImg.innerHTML = '<img src="charactor/img/weapon/acheron.png" alt="" width="50%">';

// 命途
const e1d = document.querySelector('.e1d');
const e2d = document.querySelector('.e2d');
const e3d = document.querySelector('.e3d');
const e4d = document.querySelector('.e4d');
const e5d = document.querySelector('.e5d');
const e6d = document.querySelector('.e6d');

e1d.innerHTML = '<b>星魂一-高天廖落真言始</b><br>对处于负面效果的敌方目标造成伤害时暴击率提高18%。';
e2d.innerHTML = '<b>星魂二-霆鼓俱寂，瑟风亦止</b><br>行迹【奈落】最高数值所需求「虚无」命途角色的数量减少1名，自身回合开始时获得1点【残梦】，同时为【集真赤】最多的敌方附上1层【集真赤】。';
e3d.innerHTML = '<b>星魂三-寒肃惊永蛰</b><br>终结技等级+2，最多不超过15级，普攻等级+1，最多不超过10级。';
e4d.innerHTML = '<b>星魂四-亘焰燎照镜中人</b><br>在敌方目标进入战斗时，使其陷入终结技伤害易伤状态，受到的终结技伤害提高8%。';
e5d.innerHTML = '<b>星魂五-崇岩支离，千身飘零</b><br>战技等级+2，最多不超过15级，天赋等级+2，最多不超过15级。';
e6d.innerHTML = '<b>星魂六-灾咎解桎梏</b><br>黄泉造成的终结技伤害全属性抗性穿透提高20%，施放普攻、战技造成的伤害同时视为终结技伤害，并无视弱点属性削减敌方韧性。击破弱点时，触发雷属性的弱点击破效果。';

//基础数值
let hp = 1125;
let atk = 698;
let def = 436;
let speed = 101;
let critC = 5;
let critD = 50;
let heal = 0;
let energyR = 100;
let combatD = 0;