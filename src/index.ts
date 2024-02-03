import type { IAnimate } from './types';
function animate({ start, end, duration = 1000, easing, onStep }: IAnimate): () => void {
  let currentTime = 0;
  let initFrameTime = performance.now();
  let isRunning = true;

  const step = () => {
    if (!isRunning) return;

    currentTime = Math.min((performance.now() - initFrameTime) / duration, 1);

    const easedValue = easing(currentTime);

    const interpolatedValue = start + (end - start) * easedValue;

    // 执行每一步操作并记录结果
    onStep(interpolatedValue, currentTime * (start + (end - start)));

    if (currentTime === 1) isRunning = false;
    // 立即请求下一帧
    requestAnimationFrame(step);
  };

  // 启动动画
  requestAnimationFrame(step);

  // 返回一个停止动画的函数
  return () => isRunning = false;
}

export default animate
