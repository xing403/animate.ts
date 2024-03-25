import type { IAnimate } from '../global';

function animate(config: IAnimate): () => void {
  let currentTime = 0;
  let initFrameTime = performance.now();
  let isRunning = true;

  const step = () => {
    if (!isRunning) return;

    currentTime = Math.min((performance.now() - initFrameTime) / (config.duration ?? 3000), 1);

    const easedValue = config.easing(currentTime);

    const interpolatedValue = config.start + (config.end - config.start) * easedValue;

    // 当前步骤中 {y, x}
    config.onStep(interpolatedValue, currentTime * (config.start + (config.end - config.start)));

    if (currentTime === 1) {
      if (config.infinite) {
        initFrameTime = performance.now();
      } else {
        isRunning = false
      }
    };
    // 立即请求下一帧
    requestAnimationFrame(step);
  };

  // 启动动画
  requestAnimationFrame(step);

  // 返回一个停止动画的函数
  return () => isRunning = false;
}


export default animate
