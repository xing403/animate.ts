export type CallBackFn = (value: number, x: number) => any

export type EasingFn = (value: number) => number

export interface IAnimate {
  /**
   * 动画开始位置
   */
  start: number
  /**
   * 动画结束位置
   */
  end: number
  /**
   * 动画执行时间
   * @default 1000
   */
  duration?: number
  /**
   * 被执行的缓动函数
   */
  easing: EasingFn

  /**
   * 每步将执行的回调
   */
  onStep: CallBackFn
}
