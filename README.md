My student ID is 21400217
# 1. 설치 방법

설치는 크게 두가지로 할 수 있다.

첫째는 터미널에서 NPM으로 설치 (>npm install qartjs)

두번째는 깃허브에서 클론해 오는 것이다.

개인적으로는 깃허브에서 클론해 오는 것이 가장 깔끔하고 편했다.

# 2. 사용 방법

QArt 소개 글에서 말했지만 이 프로그램은 사용 방법이 굉장히 다양하다.

그 중에서 나는 html을 사용해 웹에 띄웠다.

단계별로 알아보자.

우선 Repository를 클론해오면 ./example 폴더 안에 index.html 파일이 있다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75831f28-0bbf-4cd6-9b8b-9e45ba8bae2d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75831f28-0bbf-4cd6-9b8b-9e45ba8bae2d/Untitled.png)

해당 html파일을 실행하면  아래와 같은 페이지가 열린다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5872cee2-7840-4dda-8a8b-0898bc19ee36/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5872cee2-7840-4dda-8a8b-0898bc19ee36/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94dda3bd-6613-47cc-bdc8-4b0b2e930d49/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94dda3bd-6613-47cc-bdc8-4b0b2e930d49/Untitled.png)

원래 개발자가 테스트용으로 만든 페이지라서 기본값들이 여러개 설정되어 있는 것을 볼 수 있다.

참고로 사진의 저 분이 바로 원래 개발자시다.(훈훈하시다)

나는 표현이 모호한 것을 고치고 색상을 좀 더 취향대로 html파일을 수정해보았다.

그 결과 이런 페이지가 나왔다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0143ec99-b348-4550-9483-ef6e37ca5cf5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0143ec99-b348-4550-9483-ef6e37ca5cf5/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c83ba3c-04d7-468b-ab0e-987d2e9dd25e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c83ba3c-04d7-468b-ab0e-987d2e9dd25e/Untitled.png)

기존과 바뀐 점은 다음과 같다.

1. 명확하지 않은 Lable들을 바꿨다. (Value→URL, Threshsold→ Grey scale)
2. Background의 기본값을 화이트로 바꿨다. (CSS color code를 위해서는 아래의 사이트를 참조했다. [https://www.w3schools.com/cssref/css_colors.asp](https://www.w3schools.com/cssref/css_colors.asp))
3. 컬러메뉴와 파일 선택 메뉴의 위치를 바꿨다.
4. 개발자 사진을 뺐다.
5. 배경색을 마음이 편안해지는 초록색으로 바꿨다.

각 메뉴에 대한 설명은 다음과 같다.

URL: QR 코드를 만들고 싶은 URL을 입력

Background: 생성될 QR코드의 여백을 채울 색의 CSS코드 입력

Size: QR코드의 크기를 픽셀 단위로 입력

Version: QR코드의 버젼 입력

Fill type: 여백을 남길건지, 꽉 채울건지를 결정

사진을 선택하면 다음과 같은 결과가 나온다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09a0c9db-6e96-494d-92c1-9805640ef9a4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09a0c9db-6e96-494d-92c1-9805640ef9a4/Untitled.png)

상단에는 각각 QR코드와 사진의 원본이, 그리고 아래에는 합쳐진 결과를 보여준다.

# 3. 호스팅 방법

html 파일을 나만 갖고 있으면 아무 소용이 없으니 웹에 올려보기로 했다.

1. 우선 깃허브에 Repository를 하나 만든다.
2. 그리고 클론해온 파일들을 여기도 넣어준다.
3. html 파일에 잇는 소스파일들의 경로는 다시 설정해준다.
4. 이 Repository의 설정에 가면 링크가 있다.
5. 그 주소로 들어가면 자동으로 html 파일이 실행된다.

그 결과 나온 주소는 밑에 있다.

[https://goodtaeeun.github.io/FirstWeb/](https://goodtaeeun.github.io/FirstWeb/)
