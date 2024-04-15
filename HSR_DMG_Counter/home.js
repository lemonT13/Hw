var selectedRarity = null;
var selectedPath = null;
var selectedCombat = null;

var characters = [
    { name: '黄泉', rarity: '5', path: 'nihility', combat: 'lightning', img: 'cal/charactor/img/acheron.png', id: 'acheron'},
    { name: '银支', rarity: '5', path: 'erudition', combat: 'physical', img: 'cal/charactor/img/argenti.png', id: ''},
    { name: '阿兰', rarity: '4', path: 'destruction', combat: 'lightning', img: 'cal/charactor/img/arlan.png', id: ''},
    { name: '艾斯达', rarity: '4', path: 'harmony', combat: 'fire', img: 'cal/charactor/img/', id: ''},
    { name: '白露', rarity: '5', path: 'abundance', combat: 'lightning', img: 'cal/charactor/img/bailu', id: 'baiLu'},
    { name: '黑天鹅', rarity: '5', path: 'nihility', combat: 'wind', img: 'cal/charactor/img/blackSwan.png', id: 'blackSwan'},
    { name: '刃', rarity: '5', path: 'destruction', combat: 'wind', img: 'cal/charactor/img/blade', id: 'blade'},
    { name: '布洛妮娅', rarity: '5', path: 'harmony', combat: 'wind', img: 'cal/charactor/img/bronya', id: 'bronya'},
    { name: '克拉拉', rarity: '5', path: 'destruction', combat: 'physical', img: 'cal/charactor/img/clara', id: 'clara'},
    { name: '丹恒', rarity: '4', path: 'hunt', combat: 'wind', img: 'cal/charactor/img/', id: 'danHeng'}
    //{ name: '', rarity: '', path: '', combat: '', img: 'cal/charactor/img/', id: ''},
];

document.addEventListener('DOMContentLoaded', function() {
    filterCharacters();
});

document.addEventListener('click', function(event) {
    // 对于showRarityButton的监听器
    if (event.target.classList.contains('showRarityButton')){
        selectedRarity = event.target.getAttribute('data-rarity');
        filterCharacters();
    }
    else if(event.target.classList.contains('showPathButton')){
        selectedPath = event.target.getAttribute('data-path');
        filterCharacters();
    }
    else if(event.target.classList.contains('showCombatButton')){
        selectedCombat = event.target.getAttribute('data-combat');
        filterCharacters();
    }
    else if(event.target.classList.contains('clear')){
        selectedRarity = null;
        selectedPath = null;
        selectedCombat = null;
        filterCharacters();
    }
});

function filterCharacters() {      
    // 过滤角色数组，只保留匹配的角色
    var filteredCharacters = characters.filter(function(character) {
        var matchesRarity = !selectedRarity || character.rarity === selectedRarity;
        var matchesPath = !selectedPath || character.path === selectedPath;
        var matchesCombat = !selectedCombat || character.combat === selectedCombat;
        return matchesRarity && matchesPath && matchesCombat;
    });
        
    // 获取容器元素
    var container = document.getElementById('characterList');
    
    // 清空容器以准备新的角色信息
    container.innerHTML = '';
    
    // 遍历过滤后的角色数组，为每个角色创建一个按钮并添加到容器中
    filteredCharacters.forEach(function(character) {
        var characterButton = document.createElement('button');
        characterButton.textContent = character.name; // 按钮上显示角色的名字
        characterButton.style.backgroundImage = `url(${character.img})`; // 设置按钮背景图片
        characterButton.style.backgroundSize = 'cover'; // 确保图片覆盖整个按钮
        characterButton.addEventListener('click', function() {
            // 构建目标页面的URL，包含角色ID作为参数
            var targetUrl = `./cal/cal.html?characterId=${character.id}`;
            window.open(targetUrl);
        });
        container.appendChild(characterButton);
    });
}
