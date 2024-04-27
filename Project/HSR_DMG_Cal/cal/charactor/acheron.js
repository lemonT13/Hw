//名字
const charName = document.querySelector('.char-name');
charName.innerHTML = '黄泉';

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

//天赋
const normAtk = document.querySelector('.normal-atk');
const skill = document.querySelector('.skill');
const burst = document.querySelector('.burst');
const talent = document.querySelector('.talent');
const cs1 = document.querySelector('.cs1');
const cs2 = document.querySelector('.cs2');
const cs3 = document.querySelector('.cs3'); 
const power1 = document.querySelector('.power1');
const power2 = document.querySelector('.power2');
const power3 = document.querySelector('.power3');

normAtk.innerHTML = '对指定敌方单体造成黄泉100%攻击力的雷属性伤害。';
skill.innerHTML = '为指定敌方单体造成160%攻击力的雷属性伤害，同时对其相邻目标造成60%攻击力的雷属性伤害。';
burst.innerHTML = '对指定敌方单体造成24.0%攻击力的雷属性伤害。消去【集真赤】时，立即对敌方全体造成15.0%攻击力的雷属性伤害，每消去1层【集真赤】本次伤害倍率额外提高一倍，最多提高至原倍率的4倍。';
talent.innerHTML = '终结技期间可无视弱点属性削减敌方韧性，并使敌方全体全属性抗性降低20%';
cs1.innerHTML = '战斗开始时，立即获得5点【残梦】，并为随机1名敌方附上5层【集真赤】。当【残梦】达到上限时，每溢出1点【残梦】获得1层【四相断我】，【四相断我】最多可以叠加至3层。';
cs2.innerHTML = '我方队伍中存在1名/2名除黄泉之外的「虚无」命途角色时，使黄泉普攻、战技、终结技造成的伤害提高至原伤害的115%/160%。';
cs3.innerHTML = '终结技的【啼泽雨斩】击中持有【集真赤】的敌方目标时，使黄泉造成的伤害提高30%，该效果最多叠加3层，持续3回合，并在发动【黄泉返渡】时额外造成6次伤害，每次伤害对敌方随机单体造成等同于黄泉25%攻击力的雷属性伤害，该伤害视为终结技伤害。';
power1.innerHTML = '雷属性伤害提高4.8%';
power2.innerHTML = '攻击力提高6%';
power3.innerHTML = '暴击伤害提高8%';

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