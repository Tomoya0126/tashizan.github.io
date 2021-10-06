(function() {
    // sceneXXXは、各ゲーム画面の要素です
    const sceneTop = document.getElementById("sceneTop");
    const sceneGame = document.getElementById("sceneGame");
    const sceneResult = document.getElementById("sceneResult");
    // 正解数を表示する要素です
    const numResult = document.getElementById("numResult");
    // トップ画面にて、ゲームを開始するボタン要素です
    const btnStart = document.getElementById("btnStart");
    // リザルト画面にて、ゲームをリセットしトップへ戻るボタン要素です
    const btnReset = document.getElementById("btnReset");
  
    // ゲームで使用する共通の変数です
    // answer...プレイヤーの答えと比較する、正解のテキストです
    // success...プレイヤーが答えて、正解した数です
    let state = {
      answer: 0,
      success: 0
    };
  
    // ゲームをリセットする関数を書いてみましょう
    function init() {
      state.gameCount = 0;
      state.success = 0;
      changeScene(sceneResult, sceneTop);
  
      btnStart.addEventListener("click", gameStart, false);
    }
  
    // 1.トップ画面　2.ゲーム画面　3.リザルト画面
    function changeScene(hiddenScene, visibleScene) {
      hiddenScene.classList.add("is-hidden");
      hiddenScene.classList.remove("is-visible");
      visibleScene.classList.add("is-visible");
    }
  
    // スタートボタンが押されたら、ゲームスタートの関数を
    // リセットボタンが押されたら、ゲーム終了後にゲームをリセットする関数を実行するイベントです
    init();
  })()
