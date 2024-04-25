//图片
const charImg = document.querySelector('.charactor');

charImg.innerHTML = '<img src="charactor/img/blackSwan.png" alt="">';

// 命途
const e1d = document.querySelector('.e1d');
const e2d = document.querySelector('.e2d');
const e3d = document.querySelector('.e3d');
const e4d = document.querySelector('.e4d');
const e5d = document.querySelector('.e5d');
const e6d = document.querySelector('.e6d');

e1d.innerHTML = '星魂一-三磅石，七阶柱<br>当黑天鹅处于可战斗状态时，处于风化、裂伤、灼烧、触电状态下的敌方目标对应的风、物理、火、雷属性抗性分别降低25%。';
e2d.innerHTML = '星魂二-羔羊，请勿为我恸哭<br>【奥迹】状态下的敌方目标被消灭时，有100%的基础概率使相邻目标陷入6层【奥迹】。';
e3d.innerHTML = '星魂三-上界如此，下界亦然<br>战技等级+2，最多不超过15级，天赋等级+2，最多不超过15级。';
e4d.innerHTML = '星魂四-泪水，亦是礼物<br>【揭露】状态下，敌方目标效果抵抗降低10%，且每回合开始时或被消灭时使黑天鹅恢复8点能量。能量恢复效果在【揭露】状态持续时间内最多触发1次，再次陷入【揭露】状态会刷新触发次数。';
e5d.innerHTML = '星魂五-候鸟之路<br>终结技等级+2，最多不超过15级，普攻等级+1，最多不超过10级。';
e6d.innerHTML = '星魂六-万神皆善，苦役者未知<br>当敌方目标受到黑天鹅的队友的攻击时，黑天鹅有65%的基础概率使目标陷入1层【奥迹】。每当黑天鹅使敌方目标陷入【奥迹】时，有50%的固定概率使本次叠加的【奥迹】层数额外提高1层。';

//基础数值
let hp = 1086;
let atk = 659;
let def = 485;
let speed = 100;
let critC = 5;
let critD = 50;
let heal = 0;
let energyR = 100;
let combatD = 0;