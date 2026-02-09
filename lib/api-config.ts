// フロントエンド用API設定
// バックエンドのURLを環境変数から取得

export const getApiUrl = (): string => {
  // ブラウザ環境でのみ実行
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  }

  // localStorageからトンネルURLを取得
  const tunnelUrl = localStorage.getItem('serverUrl');
  
  if (tunnelUrl) {
    return tunnelUrl;
  }

  // デフォルトはlocalhost
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
};

export const apiConfig = {
  baseUrl: getApiUrl(),
};
