# 싸피 7기 2학기 대전 1반 106B팀 프론트 진행상황

### 220722

#### 종현

- 프론트 프로젝트 생성 첫 커밋
- 프로젝트 초기 설정, 필수 모듈 설치
- 디렉토리 구조 이식, 기본 라우팅 설정
- 상단 네비게이션 바 컴포넌트 생성
- 버튼 컴포넌트 생성
- 메뉴 전용 버튼 컴포넌트 생성
- 이미지 프로필 컴포넌트 생성

#### 성찬

- 전역 css 설정 (font, color)
- 체크박스 컴포넌트 생성

#### 채윤

- 각 section에 사용될 sheet 컴포넌트 생성

### 220723

#### 종현

- 비동기에 사용될 loadingSpinner 컴포넌트 생성

#### 채윤

- 유저 선택을 위한 dropdown 컴포넌트 생성

### 220724

#### 종현

- 폼 형식에 사용될 input 컴포넌트 생성

### 220725

#### 성찬

- 라디오박스, 라디오박스 그룹 컴포넌트 생성
- 모달 컴포넌트 생성

#### 종현

- sheet 컴포넌트 재설정
- 로그인 전용 네비게이션 바 컴포넌트 생성 (HeaderNavAuth)
- 로그인 및 회원가입용 사진 컴포넌트 생성 (WelcomePicture)
- 로그인 컴포넌트 생성
- 로그인 페이지 기본 디자인 완료

#### 채윤

- drop down -> multi select box로 변경 후 작업 진행 및 완료

### 220726

#### 성찬

- 랜딩 페이지 섹션 컴포넌트 생성
- 랜딩 페이지 레이아웃 설정

#### 종현

- React APP 환경 구축
- next APP -> React APP으로 변환
- 현 시점 모든 코드 전환 완료


#### 채윤

- find password page 작업

### 220727

#### 성찬

- 개발 컨벤션: ESLint & Prettier 설정
- 사용자 메인 페이지 (포스트 섹션 제외) 생성

#### 종현

- 모든 코드 ESLint 규칙에 맞게 리팩토링
- 미팅 페이지에 필요한 컴포넌트 생성 (진행중)
- Meeting.js
  - VideoDisplay1
  - VideoDisplay2
  - VideoControlBtns
  - Chatting

#### 채윤

- 깃 재설정
- find password page 작업

### 220728

#### 성찬

- 좌측 프로필 섹션에 PropTypes 적용
- 프로필 영역에 채우지 못한 아이콘(하트(heart), 설정(gear)) 및 국기 이미지 추가
- 설정 아이콘 클릭 시 사용자 설정 페이지로 이동하도록 링크 추가
- 사용자 메인 페이지 우측 포스트 섹션 구현
- 포스트 아이템 클릭 시 모달 창을 표시하도록 구현
- 포스트 섹션 내 '더 보기' 버튼 및 포스트 더미 데이터 추가

#### 종현

- 미팅 페이지 생성 완료
- Meeting.js
  - VideoDisplay1
  - VideoDisplay2
  - VideoControlBtns
  - Chatting
    - ChattingLog
- Kurento 연결 초기 작업

#### 채윤

- validation check 작업 

### 220729

#### 종현
- 유효성 검사 로직 구현
  - 유효성 함수를 외부 함수로 두어, input 재사용 컴포넌트에서 실행함
  - 종속성 최소화, 확장 가능
  - 현 시점 email, password 유효성 완료
  - 연산 처리 및 컴포넌트 재평가 많음 (디바운싱 작업 필요)

#### 성찬
- 로딩 모달 (로딩 중 & 완료) 구현
  - 페이지 대신 모달 형식으로 구현
- 모달의 `contents.content` prop 타입을 `string`에서 `node`로 변경
- 모달의 레이아웃을 클릭했을 때 모달이 닫히지 않게 하는 `locked` prop 추가

#### 채윤

- signup page(1) 기본 배치 디자인 완료

### 220730

#### 종현

- 유효성 검사 로직 구현
  - 유효성 함수 외부 모듈로 옮김 (utils/validation)
  - age,nickName,phone 유효성 완료
  - 남은 유효성 (회원가입에만 쓰이는 컴포넌트) 검사는 회원가입 페이지 제작 후 진행
- 유효성 검사 개선 
  - 디바운싱 처리 완료
  - 자식 컴포넌트에서 처리한 유효성 데이터가 부모 컴포넌트로 이어지도록 처리
- 로그인 로직 구현 완료
  - 서버와의 연결은 객체 공유 라이브러리 선정 후 진행 예정

#### 성찬

- 프로필 이미지 컴포넌트의 이미지 소스와 크기를 정할 수 있는 props 추가
- 회원가입 내 프로필 이미지 셀렉터 구현
  - 임시 기본 이미지 6장 추가
  - `<input type="file">` 태그를 통해 사용자로부터 `.jpg` 및 `.png` 이미지를 업로드 할 수 있도록 설정

### 220731

#### 성찬

- `HeaderNav` 스타일 수정
- 로고 이미지 컴포넌트 리팩토링

#### 채윤

- signup 페이지 상단에 표시될 step indicator 작성 및 적용 시도
- signup(2), signup(3), signup(4) 생성 및 작성
- radioBtnGroup usecallback 진행

#### 종현
- 로그인 로직 리팩토링

### 220801

#### 성찬

- 설정 페이지 일부 구현
  - 설정 공통 페이지 컴포넌트 (중첩 라우트 사용)
  - 프로필 수정 페이지
  - 비밀번호 변경 페이지

#### 채윤

- signup 구성 완료
- indicator 작업 중 중단(페이지 공간 문제)

#### 종현

- login 작업, 회원가입 api 작업 -> 실패
- 서버 리팩토링 작업 후 api 작업 진행하는 걸로

### 220802

#### 성찬

- 설정 페이지 전부 구현
  - 멤버십 구독 페이지
  - 하트 이력 페이지
  - 회원 탈퇴 페이지

#### 채윤

- signup 페이지 추가 파트 구성
- common component 중 구현되지 않은 단일 선택 요소 작업 30%

#### 종현

- openvidu 조사
- openvidu tutorial 코드 적용

### 220803

#### 성찬

- 회원가입 공통 페이지 컴포넌트 및 스텝별 컴포넌트 생성
- 회원가입 스텝 전환 시 트랜지션 적용
- `StepIndicator` 컴포넌트 구현
- 신/구 회원가입 라우트 통합
  - 회원가입 경로를 `/auth/signup`에서 `/signup`으로 변경
  - 로그인 경로를 `/auth`에서 `/login`으로 변경

#### 채윤

- dropdown component (단일 선택) 작업 완료
- 모달창 이용한 privacy policy 작업 완료
- 변환된 라우트에 privacy policy 병합 완료
- 유효성 검사 6개 작업 중

#### 종현

- redux 조사
- redux 세팅
- redux openvidu tutorial 코드 커스텀 완료
- openvidu subscriber 이벤트 이슈 발생


### 220804

#### 종현

- openvidu subscriber 이벤트 이슈 해결
- redux openvidu 반영 완료
- kakao login 버튼 구현
  - 로그인 api 로직 설계 후, 다시 확인하기
- google login 버튼 구현
  - 로그인 api 로직 설계 후, 다시 확인하기

#### 성찬

- 회원가입 성공 페이지 디자인 수정
- 개인정보 처리방침 체크박스 대신, 모달 내에서 체크하는 방식으로 변경
- 성별 중 `직접 입력` 선택 시 입력 창이 렌더링되는 부분을 제거하고 "그 외" 버튼으로 통합
- 드롭다운 메뉴 클릭 시 이전/다음 스텝으로 넘어가지만, 해당 스텝의 폼 컴포넌트가 나타나지 않는 문제 해결

#### 채윤

- signup 유효성 검사 6개 중 국적과 언어를 제외한 나머지 설정 완료
- 비밀번호 확인 유효성 검사 진행 중 문제 발생 
   - 최종적으로 redux 상태관리를 통해 input 요소 관리하기로 결정

### 220805

#### 종현

- redux user-slice,auth-slice 세팅
- redux thunk 세팅
- 로그인, 유저 정보, 유저 언어 정보 api 연결 완료
- redux issue -> F5 시 리셋
- 로그인 후 headerNav 변환
- 유저 데이터 profile section에 반영
- 유저 데이터 이슈
  - 한줄 소개
  - 하트
  - 국적
  - 프로필 이미지

#### 성찬

- 국가번호, 국적을 드롭다운으로 선택할 수 있도록 구현
  - 국적 선택 시 오른쪽에 해당 국가의 국기 표시
- 탭 키로 필드 포커스를 이동할 때 다음 스텝으로 강제로 트랜지션되며, 100% 완전히 트랜지션이 되지 않는 문제 해결
  - `react-transition-group` 라이브러리로 해결하려고 했지만, 시간 상 각 필드에 `tabIndex="1"` 속성을 추가하여 포커스 기능을 해제하는 임시방편 사용
- `auth` 폴더 내 모든 `.js` 파일 확장자를 `.jsx`로 변경


#### 채윤

- 작업중인 파일 전부 jsx로 변경 (react-select 관련 파일들) 
- react-select multi로 설정 시 유효성이 적용이 안되는 문제 발생
   - 참고 자료 부족으로 비슷한 다른 요소로 변경 요청
   - 해당 부분은 단일 요소 선택 dropdown으로 대체 결정 완료 및 작업 진행

### 220806

#### 종현

- redux-persist 설정
- openvidu & redux-persist 병합 이슈
  - openvidu 상태관리 제거 (미팅페이지에서만 사용되는 기능이므로 굳이 상태관리를 할 의미가 없음)
- useState를 활용한 openvidu 비디오 연결완료

#### 성찬

- `StepIndicator`에서 각 스텝을 클릭할 수 없는 문제 해결

#### 채윤

- signup step4 관련 작업
  - react-select 제외 그리고 dropdown으로 언어 선택 디자인 변경
  - 언어 선택 우선순위 설정
  - 초기 설정에서 필수 값이 미리 입력되게 변경
- findinfo 관련 파일 생성 및 작업 시작


### 220807

#### 종현

- openvidu 에러 확인 (해결 보류)
  - react-router를 통한 미팅 페이지 진입 시 openvidu connection 안됨
  - 임시방편 아이디어 : 미팅 페이지만 window.location을 통해 진입하자!
  - 혹시 우리 서버에서 openvidu 작업이 끝나면 이슈가 사라질지도??
  - 서버 openvidu 작업 끝나고 재확인 하기로 
- openvidu 채팅 기능 연결 작업

### 220808

#### 종현

- openvidu 채팅 기능 연결 완료 (client-only-server)
- 미팅 페이지 리팩토링
  - 다음으로 버튼 생성
  - 다음으로 버튼 클릭 시, 바로 다음 사람과 매칭이 이루어지도록 변환
  - 나가기 버튼 생성
  - 나가기 버튼 클릭 시, 매칭 종료
- openvidu 에러 처리 완료 (0807 openvidu connection 에러)
  - 토큰이 오는 경우 : 일정시간 이상(1초) 토큰을 반환하지 않고 요청이 머무는 경우, 강제 리턴 하도록 설정
  - 토큰이 안오는 경우 : 1초를 안넘어가는 경우는 서버에 정상적으로 요청이 되어 응답을 받아 토큰을 리턴하는 상황이고, 
    해당 이벤트가 이미 끝이났기 때문에 개발자가 설정한 강제 리턴 이벤트는 일어나지 않게됨

#### 성찬

- 사용 언어 3개를 부모 컴포넌트에서 모두 받고, 1순위 언어의 유효성을 검사하는 로직 추가
- `비밀번호 확인` 필드 유효성 검사 로직 구현
- 회원가입 API 호출 로직 구현

#### 채윤

- findinfopage 작업 완료
- find email page & find password page 작업 시작

### 220809 

#### 종현
 - 채팅 이벤트
  - 최신 메시지시 scroll이 자동으로 내려오도록
 - 비디오 이벤트
  - 디바이스 토글링 이벤트 (카메라 껐다 켰다, 마이크 껐다 켰다)
 - openvidu client-only에서 aws openviud-server와 연결 시도

#### 성찬

- 입력 받은 모든 데이터를 객체로 묶고, 모두 올바르게 입력했는지 유효성 검사 추가
- 회원가입 완료 시 `StepIndicator`가 비활성화되도록 수정
- 회원가입 URL 쿼리스트링 예외 추가
  - `step` 쿼리스트링 값이 숫자가 아닐 경우
- 스텝을 넘어갈 때마다 수행하는 유효성 검사 로직을 별도의 함수로 분리
- 회원가입 요청 객체에 자기소개(`description`) 필드 기본값 추가
- 회원가입을 위한 Redux slice 및 thunk actions 추가
  -  기존 `auth`에 있는 로직을 `user`로 이동
- 국가 및 언어 리스트를 백엔드에 맞게 수정
- 프로필 이미지 클릭 이벤트 핸들러 prop 추가

#### 채윤

- find email & find password 작업 중 우선순위에서 밀려 중단
- FindInfoPicture component 작업 중 우선순위에서 밀려 중단
- 작업 우선순위 결정으로 인해 맡은 작업들
   - 사용자 메인 페이지에서 헤더 내비게이션을 프로필 사진 있는 버전으로 바꾸기(진행중)
   - 프로필 사진 오른쪽에 임시로 로그아웃 버튼을 만들기(진행중)
   - 로그아웃 클릭 시 로그아웃 & 랜딩 페이지로 이동하도록 로직 구성(진행중)

### 220810

#### 종현
- openvidu client-only에서 aws openvidu-server와 연결 시도
  - room logic 형성
  - openvidu 시작전 룸 매칭을 해줘야 한다.
  - findRoom()을 실행한다.
    - 룸이 존재하는 경우 : 룸이 있으며, 아직 방에 1명인 경우라면 해당 룸을 채우고 들어가면 된다.
    - 룸이 존재하지 않는 경우 : 룸이 있으나 2명이 차지거나, 혹은 룸이 언어랑 맞지 않아 못들어간다면, 룸을 생성하여 들어간다.
  - ex) user: 김싸피, languages : eng, jpn, kor 인 경우
    - language가 eng이면서, 룸이 아직 1명인 곳을 찾는다. (시간은 한 일단 10초 정도, 찾는도중 누가 생성할 수 있으니, 또 보고 또 보고 또 탐색하자 (멀티 쓰레드로 가능한가? ))
    - eng 방이 없다면, language가 eng || jpn이면서, 룸이 아직 1명인 곳을 찾는다. (동일하게 10초 정도)
    - jpn 방이 없다면, language가 eng || jpn || kor 이면서, 룸이 아직 1명인 곳을 찾는다. (역시 동일하게 10초 정도)
    - 30초를 경과 해도 없다면, 룸을 생성한다. (이때도 client는 여전히 loading 중)
  - 룸을 찾거나, 룸을 만들어서 2명이 채워진 경우에 opnnvidu-server를 통해 비디오 렌더링과 채팅이 이루어지게 한다!
- room logic 추가 (findRoom, makeRoom, leaveRoom)
- refresh token api 연결 (reissue)
  - 401 에러 나오는 중


#### 성찬

- 프로필 이미지 클릭 시 나타나는 드롭다운 메뉴 컴포넌트 구현
  - 드롭다운 메뉴가 열렸을 땐 어디를 클릭하든 닫히도록 구현했으나, 요소의 클래스에 `click-blocked`가 포함되어 있다면 해당 요소를 클릭해도 닫히지 않도록 구현
  - 위의 기능은 드롭다운 메뉴가 열렸을 때 `window` 객체에 이벤트 핸들러로 등록하여 구현했음
  - 핸들러 등록은 `useEffect()` 내부에서 수행했으며, 리턴 값으로 이벤트 핸들러를 해제하는 함수를 추가하여, 드롭다운 메뉴가 비활성화 되었을 때 이벤트도 해제되도록 했음

#### 채윤

- 사용자 메인 페이지에서 헤더 내비게이션을 프로필 사진 있는 버전으로 바꾸기(진행예정)
- 프로필 사진 오른쪽에 임시로 로그아웃 버튼을 만들기(완료)
- 로그아웃 클릭 시 로그아웃 & 랜딩 페이지로 이동하도록 로직 구성(진행 60%)

### 220811 

#### 종현
- process.env 설정
- room_logic, openvidu_logic 병합중
- 함수 2번 호출되는 이슈 => StrictMode 해제

#### 성찬
- 프로필 이미지 셀렉터에서 각 이미지 버튼의 가장자리를 클릭했을 때 이미지 데이터 대신 `undefined`를 전달하는 문제 해결
- 서버로 전달하는 프로필 이미지의 타입을 `base64`에서 `formData` 형식으로 변환
  - 서버에 이미지를 저장하는 API 엔드포인트에 `formData`를 전달
  - 응답으로 받은 `src`, 즉 파일명을 기존 프로필 이미지 필드(`avatar`)에 저장
  - 이미지를 불러오는 API 엔드포인트 경로 끝에 위에서 받은 파일명(`src`)을 붙이면 프로필 이미지를 불러올 수 있음

#### 채윤 
- auth-slice.js / auth-thunkActions.js에서 로그인 시 저장되었던 데이터값을 리셋하는 logout 작성
- user-slice.js / user-thunkActions.js에서 발급됐던 토큰 값 리셋하는 파트 작성
- HeaderNav.jsx에서 logout관련 중복된 코드 찾아내고 수정 관련 프론트쪽 문의

### 220812

#### 종현
- react 도커라이징, 배포 시도
- 병합 시나리오 생성
- room_logic, openvidu-logic 병합완료
- 리덕스 openvidu-slice 재추가

#### 채윤
- logout 파트 완성
  - HeaderNav.jsx 수정을 통해 user-slice와 user-thunkActions의 코드 삭제
- api 작업 진행용 세팅(ubuntu, intelliJ, redis, redux), db 데이터받기 등의 로컬 환경 구성 진행

#### 성찬
- `<Input>` 컴포넌트 prop에 `disabled` 추가
- 프로필 수정 페이지의 폼 변경
  - 스토어에 저장된 사용자의 데이터를 불러와 각 입력 창 필드에 저장
- `user-slice`에 누락된 일부 state 추가 (성별, 언어, 이메일, 휴대폰 번호)
- 로그아웃 로직 구현 마무리


### 220813

#### 종현
- openvidu-logic 리팩토링
- 새로운 이슈 확인
  - 페이지 이동시 사전 렌더링
  - serializable check
- leave session 이벤트 완료
- leave room 이벤트 진행중 
  - 이슈 1. leave room 에러, 백앤드 재설정 후 다시 시도
- toggle device 이벤트 완료
  - 이슈 1. 비디오, 오디오 설정 시 플리커링 이슈

#### 채윤
- user_delete(회원탈퇴) api 작업 진행
  - (1)회원탈퇴버튼 누르면
  - (2)회원 delete 진행
  - (3)동시에 현재 유저 관련 정보가 저장되어있는 상태를 전부 undefined로 처리하고 
  - (4)상단바는 로그인 /로그아웃 떠있는 초기상태로 변환
  - (5)랜딩 페이지로 리다이렉트하기

#### 성찬
- 프로필 이미지 컴포넌트의 `src` prop의 필수 여부 해제
- `user-slice`에 누락된 `avatar` state 추가
- 입력 창 컴포넌트(`Input`)의 기본 값(`defaultValue`) prop 세팅 로직 수정
  - `onData` prop이 있는 경우 기본 값 세팅 시 자동으로 유효성을 검사하도록 설정
  - `defaultValue` prop이 없는 경우 `undefined` 텍스트가 뜨는 문제 해결

### 220814

#### 종현
- 채팅 이벤트 ov-slice와 병합
- 타이머 이벤트 생성
  - 시간이 다되면(5분) 메인 페이지로 이동
  - openvidu 객체는 빈객체로
  - 이후 시간 연장 이벤트도 필요
  - 시간 공유로 바꿀 수 있을듯?
- 매칭 이벤트 수정
  - 매칭 시 5초후 바로 이동 (독립된 시간을 최대한 맞추기 위함)
  - 시간 공유가 가능하다면, 얘도 수정할 예정
- 신규 로직 : 타이머 로직 (시간이 있다면 바꿀 예정)
  - 룸을 생성한 자를 기준으로 타이머를 만들고, 자신의 로컬과, 상대방에게 렌더링 한다.
  - 타이머 카운트 역시 룸 생성자에서 이루어진다. 룸 입장자에게는 단순 스트링값만 보낸다.
  - 룸 생성자와 입장자 모두, vip의 경우 시간 연장 이벤트를 가지게 된다.
    - 룸 생성자 : 자신의 시간을 늘리면 자동으로 상대방 시간까지 렌더링 될 것이다.
    - 룸 입장자 : 자신의 시간을 늘리면, 룸 생성자의 시간이 늘어나게 되고, 늘어난 시간이 룸 입장자에게 다시 렌더링 된다.
- non serializable 에러 해결
- 매칭 시 5초 후 0초 이후 다시 5초로 다시 설정되는 이슈 해결(셋타이머를 이용한 클리어함수)
- 페이지 이동 사전 렌더링 이슈
  - 유저에게 비디오를 공유할지 아닐지를 마음대로 선택할 수 있도록 위해, 기본 렌더링 디폴트값을 false로 설정하여 해결

#### 성찬
- 프로필 수정 페이지 API 연동 마무리
  - 프로필 수정 API와 연동하기 위해 `updateUser` thunk 생성
  - `user-slice`에 누락된 `description` state 추가
  - 각 필드의 유효성 검사 이슈 해결
  - 가장 큰 문제였던 401 에러 해결
    - `createAsyncThunk()`의 사용법을 숙지하지 못한 상태에서 낸 에러였음
- 프로필 이미지 수정 기능 구현
- 헤더 내비게이션의 프로필 이미지를 사용자가 설정한 값에 맞게 서버로부터 호출 및 변경
- 비밀번호 수정 페이지 API 연동
  - 프로필 수정 API를 호출하는 과정에서 사용한 사용자 정보를 담은 객체 안에 새 비밀번호 필드를 추가
- 멤버십 구독 페이지에서 구독 상태를 스토어로부터 얻도록 수정
  - API를 연동하려 했으나, 아직 결제 모듈을 비롯한 일부 기능이 구현되지 않아 일단 보류
- 로딩 모달 창에서 하단에 뜨는 팁이 1초 간격으로 바뀌는 문제 해결
- 임시로 만든 팁 대신 서버로부터 랜덤한 팁을 불러오도록 수정
- 미팅 페이지 좌측 하단에 질문 섹션 생성
- 팁과 마찬가지로 서버로부터 랜덤한 질문을 불러와 화면에 표시


### 220815

#### 종현
- 신규 로직 : timerShare logic
  - 룸을 생성한 자를 기준으로 타이머를 만들고, 자신의 로컬과, 상대방에게 렌더링 한다.
  - 타이머 카운트 역시 룸 생성자에서 이루어진다. 룸 입장자에게는 단순 스트링값만 보낸다.
  - 룸 생성자와 입장자 모두, vip의 경우 시간 연장 이벤트를 가지게 된다.
- 다음 매칭 이벤트
  - ?rematching=true라는 쿼리가 존재하는 경우, 자동으로 랜덤매칭이 시작된다.
- 신규 로직 : rematching logic
  - 상대방이 정상적으로 현재 세션을 종료하는 경우 (나가거나, 다음 매칭을 시도하거나) 세션 남은 사람에게 자동으로 
    다음 매칭이 이루어진다.
  - 상대방이 다음 매칭을 한 경우
    - 상대방 : 메인 페이지로 이동, 다음 매칭이 이루어진다.
    - 나 : 메인 페이지로 이동, 다음 매칭이 이루어진다.
  - 상대방이 나가기를 한 경우
    - 상대방 : 메인 페이지로 이동, 다음 매칭x
    - 나 : 메인 페이지로 이동, 다음 매칭이 이루어진다.
- 예상 이슈 : 비정상적 접근
  - 어떠한 경로로 roomID를 획득하여, 세션에 접근하려는 시도가 잇는 경우
  - 랜덤 매칭 이벤트가 아니라면, openvidu 인스턴스는 생성되지 않는다. 미팅 페이지 접근 시, openvidu 인스턴스가 없다면,
    이는 비정상적 접근이라고 판단할 수 있다.
  - 해당 조건에 만족하는 경우, 미팅 페이지로 강제 리다이렉트 되도록 설정하였다.
- user_api
  - 국적 동기화 완료
  - description 동기화 완료
  - 아바타 이미지 동기화 완료
  - 하트 동기화 완료
  - vip 동기화 완료
- 시간 연장 이벤트
  - 생성자 vip가 시간 연장하는 경우
    - 생성자 시간 기준이므로 연장하면 참여자까지 자동 연장이 된다.
  - 참여자 vip가 시간 연장하는 경우
    - openvidu signal 이벤트를 통해 생성자의 시간을 연장한다. 
  - 하트와 함께도 사용하도록 만들 예정
- 유저 간 session 연결 시, 서로 데이터 교환
  - peerUser-slice 생성 (상대방 데이터를 담는 바구니)
  - connect 후, 미팅 페이지 진입 시, 서로 데이터 교환하는 signal 이벤트 발생
  - peerUser 액션을 통해 peerUser reducer에 저장
  - 받은 유저 데이터 렌더링
  - 커넥팅 해제시, peerUser reducer 초기화