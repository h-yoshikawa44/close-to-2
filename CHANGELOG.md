# CHANGELOG

## v2.0.0（2023/09/16）
### Chaged
- OGP 設定を react-helmet-async に移行(#32)

### Updated
- Node.js、各種ライブラリのアプデ(#30)
- CRA 構成から Vite 構成に移行(#32)

主要なアプデ内容（上記2つ合わせたもの）
- Node.js: 14.17.3 -> 18.17.1
- TypeScript: 4.3.5 -> 5.2.2
- React: 17.0.2 -> 18.2.0
- Material UI：
  - core：4.12.3 -> 5.14.9
  - icon：4.12.3 -> 5.14.9

### Development Added
- GitHook 設定（lint fix + Issue 番号抽出）

### Development Changed
- yarn から npm へ移行(#30)

## v1.0.0（2021/08/12）
### Fixed
- アプリ全体の TypeScript 化(#26)
- リファクタリング（ロジック部分をカスタムフック切り出し）(#26)

### Other
- 開発ブランチ用のワークフロー作成(#26)

## v0.3.0（2021/08/09）
### Changed
- react-snap を react-snapshot に移行(#24)

### Fixed
- 環境変数にしていたゲーム設定値を定数化(#24)

### Updated
- ライブラリ全体のバージョンアップ(#22)
  - Node.js 12.18.3 → 14.17.3
  - React 16.13.1 → 17.0.2
  - Material UI：
    - core 4.11.0 → 4.12.3

### Other
- ESLint をはじめとした開発環境設定更新(#22)
- デプロイの自動化(#24)

## v0.2.0（2020/09/19）
### Fixed
- リファクタリング（コンポーネント分割）(#20)
- ゲーム設定値を環境変数化(#20)

## v0.1.0（2020/09/15）
### Added
- 基本的なゲームの仕組み作成(#11, #9, 3)
  - 難易度選択
  - 難易度に応じたゲームロジック
  - リザルト
- Twitter シェア機能(#18)
- OGP 導入(#18)

- [１週間でWebサービスを作るイベント - お題「2」](https://crieit.net/boards/web1week-202009)
