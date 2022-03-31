export class MessageUtils {
  public static readonly Global = {
    RequiredError: 'このフィールドを記入してください',
    RequiredSelectError: '選択してください',
  };

  public static readonly EvaluateCreate = {
    Title: 'エンジニア評価システム（仮）',
    Description: `エンジニア評価システム（仮）は、管理者が評価フレームと評価セルを組み合わせて設計した評価ユニットを、メンバーが評価登録して、スコアリングされた評価結果をメンバーが確認できるサービス`,
    TechnicalStrength: `PHPの技術力はどうでしたか`,
    WorkAttitude: `項目2`,
    Button: `評価登録`,
  };

  public static readonly EvaluateCompletion = {
    Title: '登録されました：エンジニア評価システム（仮）',
    Content: `評価が登録されました \n「戻る」で評価を再度登録できます`,
    ToCreate: `評価登録へ`,
  };
}
