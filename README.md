# Nextjs 기반 보일러 플레이트 입니다.

## 사용법
```
npx create-jm-nextjs-ts-radixui-sb8 앱이름
```
* 앱이름을 현재 폴더로 하고 싶으시면 `.`으로 기입하면 됩니다.

## Tech stack

- nextjs15 + react 19
- storybook csrf 8
- radix/ui themes

## 특이사항

- [radix/ui 의 스타일 시트 호환 이슈](https://github.com/radix-ui/themes/issues/59#issuecomment-1712661676)로 인해 .storybook 폴더에 css 파일 삽입
