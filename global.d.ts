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
   * 动画执行时间(ms)
   * @default 3000
   */
  duration?: number

  /**
   * 是否无限循环执行
   * @default false
   */
  infinite?: boolean

  /**
   * 被执行的缓动函数，必须为一个线性函数
   * @param value 当前动画帧的时间 range 0-1
   */
  easing: (value: number) => number

  /**
   * 每步将执行的回调
   * @param value 根据当前动画帧计算在 start 和 end 之间的值
   * @param x easing 函数的返回值
   */
  onStep: (value: number, x: number) => any
}
