/*
 * @Author: wangrenjie@zenmen.com
 * @Date: 2022-07-12 18:35:05
 * @LastEditors: wangrenjie@zenmen.com
 * @LastEditTime: 2022-07-13 08:45:56
 * @FilePath: \event-hub\__tests__\sum.spec.ts
 * @Description:
 */

import sum from '../src'

test('The calculation result should be 3.', () => {
  expect(sum(1, 2)).toBe(3)
})
