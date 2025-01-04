
  // 获取按钮和音频元素
const playButton = document.getElementById('playAudioButton');
const audioElement = document.getElementById('myAudio');

// 添加点击事件监听器
playButton.addEventListener('click', function() {
  // 播放音频
  audioElement.muted=false;
  audioElement.play().catch(function(error) {
    console.error('无法播放音频:', error);
  });
});

