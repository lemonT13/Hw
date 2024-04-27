// 获取URL参数
function getQueryParam(paramName) {
    var params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}

// 根据角色ID加载相应的CSS和JS文件
function loadCharacterFiles(characterId) {
    var cssFile = `charactor/${characterId}.css`;
    var jsFile = `charactor/${characterId}.js`;

    // // 动态加载CSS文件
    // var link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = cssFile;
    // document.head.appendChild(link);

    // 动态加载JS文件
    var script = document.createElement('script');
    script.src = jsFile;
    document.head.appendChild(script);
}

// 在页面加载时调用loadCharacterFiles函数
document.addEventListener('DOMContentLoaded', function() {
    var characterId = getQueryParam('characterId');
    if (characterId) {
        loadCharacterFiles(characterId);

    }
});
