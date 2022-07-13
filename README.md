# Guide

## 신규 파일 생성
```
  // 기본 방식
  <script>
    setup() {
      ...
    }
  </script>
  
  // 축약 방식 (추천)
  <script setup>
     ...
  </script>
```

## reactive && ref
```
  <script setup>
      import {reactive, ref} from  "vue"
      
      const filter = reactive({
          checkbox: [],
          selectBox: ''
      });
      
      const text = ref({
          comment: ''
      });
      
      // ref에서는 계산 속성 (computed) 사용 불가
  </script>
  
  <template>
      <div class="checkbox">
          <label for="chk1">체크박스1</label>
          <input type="checkbox" id="chk1" v-model="filter.checkbox">
          <label for="chk2">체크박스2</label>
          <input type="checkbox" id="chk2" v-model="filter.checkbox">
      </div>
      
      <div class="selectbox">
          <select v-model="filter.selectbox">
              <option></option>
          </select>
      </div>
      
      <div class="text">
          <input type="text" v-mode="text.comment">
      </div>
      
      <p> 체크박스 : {{ filter.checkbox }} </p>
      <p> 셀렉트박스 : {{ filter.selectbox }} </p>
      <p> 텍스트박스 : {{ text.comment }} </p>
  </template>
```

## Component

```
  <script setup>
      import child-component from "@/components/child-component"
      
      ...
  </script>
  
  <template>
      <p>parent component</p>
      <child-component /> <!-- child component -->
  </template>
```
