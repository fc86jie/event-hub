/*
 * @Author: wangrenjie@zenmen.com
 * @Date: 2022-07-12 18:35:05
 * @LastEditors: wangrenjie@zenmen.com
 * @LastEditTime: 2022-07-12 18:35:06
 * @FilePath: \event-hub\__tests__\calc.spec.ts
 * @Description:
 */

import calc from '../src'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})
