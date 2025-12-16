# Angular 專案 - URBNSTEP Layout (切版練習用)


此專案依據 [Figma 設計稿](https://www.figma.com/design/CYjKvZQo3db8xYCp6DCkKj/%E5%85%AD%E8%A7%92%EF%BD%9C%E9%9E%8B%E5%AD%90%E9%9B%BB%E5%95%86-W3%E3%80%81W4-%EF%BC%88student-ver.%EF%BC%89?node-id=12008-14405) 開發，使用 **Angular** 框架，並部署於 Vercel：  
👉 [線上預覽](https://2025-12-08-urbnstep-layout-1ocp.vercel.app/)

## 路由說明
- Nav 導覽列
   - Logo：可點擊回首頁
   - 商品列表：可點擊進入商品列表，需點擊兩次才顯示內容
   - 品牌故事：可點擊進入品牌故事頁
   - Icon：可點擊進入登入頁
- Footer 頁尾
   - 註冊：可點擊進入註冊頁
   - Logo：可點擊回首頁
   - 商品列表：可點擊進入商品列表，需點擊兩次才顯示內容
   - 品牌故事：可點擊進入品牌故事頁
- 商品列表頁
   - 分類篩選：可依照不同商品分類顯示
   - 搜尋框：可輸入關鍵字搜尋商品
   - 商品圖片：點擊商品圖片可跳轉到產品詳情頁
- 產品詳情頁
   - 顯示使用者點擊的商品庫存




## 安裝與開發
請先確認已安裝 [Node.js](https://nodejs.org/) 與 [Angular CLI](https://angular.io/cli)。

```bash
# 下載專案
git clone https://github.com/Clyde-Huang/2025-12-08-urbnstep-layout.git
cd 專案名稱

# 安裝依賴
npm install

# 本地開發
ng serve
