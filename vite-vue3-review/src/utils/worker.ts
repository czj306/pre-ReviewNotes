/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 12:14:29
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 12:15:42
 * @FilePath: /ReviewNotes/vite-vue3-review/src/utils/work.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
self.addEventListener(
    'message',
    function (e) {
      console.log('test.worker.js', e.data)
      self.postMessage('hello from worker')
    },
    false,
  )