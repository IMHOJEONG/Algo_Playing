### Algorithm Graph Javascript

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

### 2022.1.15 

- TypeError: MiniCssExtractPlugin is not a constructor 

    - 이미 facebook에 하루 전 올라와 있던 issue 

    - 임시 해결책 : mini-css-extract-plugin 버전을 2.4.5 버전으로 다운그레이드할 것 

    - [링크](https://github.com/facebook/create-react-app/issues/11930)

### 2022.1.18

- webpack시 unknown word가 style-loader에서 나는 이유 

    - mini-css-extract-plugin과 style-loader는 같이 사용하는 것이 아님 

    - [참고 링크](https://webpack.js.org/plugins/mini-css-extract-plugin/#recommend)

- yarn install 시 업데이트 오류 확인 필요 & 화면 렌더링 시 화면 로딩 속도가 느린 것을 확인함 

- yarn workspace를 사용하기 위해 yarn version을 올릴 시, pnp를 사용한다면?
 
  - webpack과 pnp 사이에 pnp-webpack-plugin 설치 및 사용이 필요함 

  - [참고 repo](https://github.com/arcanis/pnp-webpack-plugin)

- lerna를 통해 webpack을 실행하려고 lerna run --scope graph run test를 해도 오류가 난다면?

  - webpack은 webpack-cli하고 의존성이 있음 

  - [여기](https://github.com/yarnpkg/berry/issues/556)에서 알려주는 방법 해봤지만, yarn workspace로 yarn install을 통해 사용하는 것이 더 잘됨