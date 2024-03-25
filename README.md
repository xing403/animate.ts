# animate.ts

animate.ts is an animation library for Typescript.


## install animate.ts

```shell
npm install animate.ts
```

## usage

```typescript
import animate from 'animate.ts';

function easing(x: number): number {
  return x;
}
// an animation will run for 3 seconds
const stop = animate({
  start: 0,
  end: 1000,
  duration: 3000,
  easing: easing.easeOutBounce,
  onStep: (progress: number, x: number) => {
    console.log("current progress",progress); // 'easing' return value
    console.log("current x",x); // the range of x is form start to end
  }
})
```

## use easing

```ts
import easing from "animate.ts/dist/easing.js";
```

## stop animation
```typescript
// if you want to stop animation after two seconds
setTimeout(stop, 2000)
```
