document.addEventListener("DOMContentLoaded", () => {
  // jsonファイルからスケジュール情報を取得する処理（拡張用）
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("ネットワークエラーが発生しました");
      }
      return response.json();
    })
    .then((data) => {
      console.log("スケジュールデータ読み込み成功:", data);
      // 必要に応じて独自のイベントリスト描画などに利用可能
    })
    .catch((error) => {
      console.error("データの取得に失敗しました:", error);
    });
});
