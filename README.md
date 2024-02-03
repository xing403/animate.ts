# animate.ts
animate.ts is an animation library for Typescript.


## install animate.ts
```shell
npm install animate.ts
```

## usage
```typescript
import { animate } from 'animate.ts';

const stop = animate({
    start: 0,
    end: 1000,
    duration: 3000,
    easing: easeOutBounce,
    onStep: (progress: number, x: number) => {
      console.log("current progress",progress); // 'easing' return value
      console.log("current x",x); // the range of x is form start to end
    }
  })
// animate function
function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
```
