<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-10 15:18:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:26:39
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/other/ConicalColumnChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div w800px h320px flex="~ col" justify-center items-center bg-dark>
      <div>
        <dv-conical-column-chart :config="config" style="width:400px;height:200px;" />
      </div>
      <div pt5>
        <button btn @click="addData">
          新增数据
        </button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import top1 from '../../assets/img/1st.png'
  import top2 from '../../assets/img/2st.png'
  import top3 from '../../assets/img/3st.png'
  import top4 from '../../assets/img/4st.png'
  import top5 from '../../assets/img/5st.png'
  import top6 from '../../assets/img/6st.png'
  import top7 from '../../assets/img/7st.png'
  
  const config = reactive({
    data: [
      {
        name: '周口',
        value: 55,
      },
      {
        name: '南阳',
        value: 120,
      },
      {
        name: '西峡',
        value: 71,
      },
      {
        name: '驻马店',
        value: 66,
      },
      {
        name: '新乡',
        value: 80,
      },
      {
        name: '信阳',
        value: 35,
      },
      {
        name: '漯河',
        value: 15,
      },
    ],
    img: [
      top1,
      top2,
      top3,
      top4,
      top5,
      top6,
      top7,
    ],
  })
  
  const addData = () => {
    config.data.push({
      name: `新增${Math.floor(Math.random() * (130 - 1)) + 1}`,
      value: Math.floor(Math.random() * (130 - 1)) + 1,
    })
  
    config.img.push(top7)
  }
  </script>