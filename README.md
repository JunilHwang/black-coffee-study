# 블랙 커피 스터디

[NextStep](https://edu.nextstep.camp/)에서
[임동준](https://github.com/eastjun)님이 진행하는
[블랙커피 스터디](https://edu.nextstep.camp/c/L1Ma1gyX/)를 진행하며
산출된 결과물을 기록하는 Repository 입니다.

## Step1

### 결과물

- [소스코드](./step1)
- [데모](https://junilhwang.github.io/black-coffee-study/step1/index.html)

### 미션 수행 기록

- 개인 미션
 - Pull Request: https://github.com/next-step/js-todo-list-step1/pull/29
 - Code Review
   - [3기 전환오 님](https://github.com/next-step/js-todo-list-step1/pull/30)
   - [3기 catsbi 님](https://github.com/next-step/js-todo-list-step1/pull/31)
- 페어프로그래밍: [황준일](https://github.com/junilhwang)-[박은영](https://github.com/eyabc)
 - https://github.com/next-step/js-todo-list-step1/tree/%ED%99%A9%EC%A4%80%EC%9D%BC-%EB%B0%95%EC%9D%80%EC%98%81

### 🎯 요구사항

- [X] todo list에 todoItem을 키보드로 입력하여 추가하기
- [X] todo list의 체크박스를 클릭하여 complete 상태로 변경.\
 (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
- [X] todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
- [X] todo list를 더블클릭했을 때 input 모드로 변경.\
 (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
- [X] todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
- [X] todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기

### 🎯🎯 심화 요구사항

- [X] localStorage에 데이터를 저장하여, TodoItem의 CRUD를 반영하기.\
 따라서 새로고침하여도 저장된 데이터를 확인할 수 있어야 함

## Step2

- [소스코드](./step2)
- [데모](https://junilhwang.github.io/black-coffee-study/step2/index.html)

### 미션 수행 기록

- 개인 미션
 - Pull Request: https://github.com/next-step/js-todo-list-step2/pull/16
- 페어프로그래밍: [홍현의](https://github.com/hongjehong)-[황준일](https://github.com/junilhwang)
 - https://github.com/next-step/js-todo-list-step2/tree/%ED%99%8D%ED%98%84%EC%9D%98-%ED%99%A9%EC%A4%80%EC%9D%BC

### 🎯 요구사항

- [X] todoItem 불러오기
- [X] todoItem 추가하기
- [X] todoItem 삭제하기
- [X] todoItem complete하기
- [X] todoItem contents 내용 수정하기
- [X] user별 투두리스트 불러오기

### 🎯🎯 심화 요구사항

- [X] 데이터를 불러오기전 로딩바를 이용해, 사용자가 데이터가 불러와지고 있다는 것을 보여줍니다.
- [X] fetch api 사용하는 부분을 async await을 사용하여 리팩토링합니다.
- [X] github issue에서 라벨을 붙이는 것처럼, 우선순위에 따라서 badge를 추가합니다.
- [X] ES6 impot & export를 이용해 자바스크립트 파일을 리팩토링한다.

## Step3

- [소스코드](./step3)
- [데모](https://junilhwang.github.io/black-coffee-study/step3/index.html)

### 미션 수행 기록

- 개인 미션
 - Pull Request: https://github.com/next-step/js-todo-list-step3/pull/12

### 🎯 요구사항

- [X] 1. 팀에 멤버 추가하기
- [X] 2. 팀원별 todoList 불러오기
- [X] 3. 팀원별 todoItem 추가하기
- [X] 4. 팀원별 todoItem 삭제하기
- [X] 5. 팀원별 todoItem complete하기
- [X] 6. 팀원별 todoItem contents 내용 수정하기
- [X] 7. todoItem의 우선 순위 정하기 (defulat값:0, 1순위:1, 2순위: 2)
- [X] 8. todoList의 우측 하단의 전체 삭제버튼을 누르면 해당 유저의 아이템을 전체 삭제하기

### 🎯🎯 심화 요구사항

- [X] todoItem의 우선 순위에 따라 정렬하기

