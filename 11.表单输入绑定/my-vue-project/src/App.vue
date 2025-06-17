<template>
  <div class="p-4">
    <h1>表单输入绑定示例</h1>

    <!-- 1. 文本输入 -->
    <h2>文本输入</h2>
    <input v-model="text" placeholder="请输入内容" />
    <p>你输入的是：{{ text }}</p>

    <!-- 2. 多行文本输入 -->
    <h2>多行文本</h2>
    <textarea v-model="message" placeholder="写点什么..."></textarea>
    <p>消息内容：{{ message }}</p>

    <!-- 3. 复选框 -->
    <h2>复选框</h2>
    <label>
      <input type="checkbox" v-model="checked" />
      同意协议
    </label>
    <p>是否勾选：{{ checked }}</p>

    <!-- 4. 多个复选框（数组） -->
    <h2>选择你的爱好</h2>
    <label><input type="checkbox" value="音乐" v-model="hobbies" /> 音乐</label>
    <label><input type="checkbox" value="电影" v-model="hobbies" /> 电影</label>
    <label><input type="checkbox" value="运动" v-model="hobbies" /> 运动</label>
    <p>你选择了：{{ hobbies.join(', ') }}</p>

    <!-- 5. 单选框 -->
    <h2>选择性别</h2>
    <label><input type="radio" value="男" v-model="gender" /> 男</label>
    <label><input type="radio" value="女" v-model="gender" /> 女</label>
    <p>性别：{{ gender }}</p>

    <!-- 6. 下拉选择框 -->
    <h2>选择国家</h2>
    <select v-model="country">
      <option disabled value="">请选择</option>
      <option>中国</option>
      <option>美国</option>
      <option>日本</option>
    </select>
    <p>你选择的国家是：{{ country }}</p>

    <!-- 7. 多选下拉框 -->
    <h2>多选城市</h2>
    <select v-model="cities" multiple>
      <option>北京</option>
      <option>上海</option>
      <option>广州</option>
      <option>深圳</option>
    </select>
    <p>你选择了：{{ cities.join(', ') }}</p>

    <!-- 8. 修饰符 `.lazy`, `.number`, `.trim` -->
    <h2>修饰符</h2>
    <input v-model.lazy="lazyInput" placeholder="blur 后才更新" />
    <p>.lazy 修饰符：{{ lazyInput }}</p>

    <input v-model.number="age" placeholder="请输入年龄" />
    <p>.number 修饰符：{{ age }}（类型：{{ typeof age }})</p>

    <input v-model.trim="trimmedInput" placeholder="自动去除首尾空格" />
    <p>.trim 修饰符：{{ trimmedInput }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const message = ref('')
const checked = ref(false)
const hobbies = ref([])
const gender = ref('')
const country = ref('')
const cities = ref([])

const lazyInput = ref('')
const age = ref(null)
const trimmedInput = ref('')
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
h2 {
  font-size: 18px;
  margin-top: 24px;
}
input,
textarea,
select {
  margin: 8px 0;
  padding: 6px;
  font-size: 14px;
  display: block;
}
label {
  display: block;
  margin: 4px 0;
}
</style>