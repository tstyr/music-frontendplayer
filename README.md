# 🎵 Music Player Frontend

このフォルダにはフロントエンドのみが含まれています。Vercelにデプロイするためのものです。

## 🚀 Vercelデプロイ手順

### 1. 新しいGitHubリポジトリを作成

```bash
cd frontend
git init
git add .
git commit -m "Initial frontend commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/music-player-frontend.git
git push -u origin main
```

### 2. Vercelにデプロイ

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. **Add New** → **Project**
3. GitHubリポジトリ `music-player-frontend` をインポート
4. **Deploy** をクリック

### 3. 環境変数設定（オプション）

Vercelの **Settings** → **Environment Variables** で:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 🔧 ローカル開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く

## 📝 注意事項

- このフロントエンドは、バックエンドAPI（ローカルサーバー）に接続します
- バックエンドはCloudflare Tunnel経由でアクセスします
- トンネルURLは自動的に取得・保存されます

## 🎯 構成

```
[Vercel Frontend]
    ↓
[Cloudflare Workers] ← トンネルURL管理
    ↓
[Cloudflare Tunnel]
    ↓
[Backend Server] ← localhost:3001
```
