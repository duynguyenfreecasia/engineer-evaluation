export class AppRoutingConstant {
  public static readonly LOGIN = ['login'];
  public static readonly REGISTER = ['register'];

  public static readonly EVALUATE = ['evaluate'];
  // eslint-disable-next-line prettier/prettier
  public static readonly EVALUATE_CREATE = AppRoutingConstant.EVALUATE.concat('create');
  // eslint-disable-next-line prettier/prettier
  public static readonly EVALUATE_COMPLETION = AppRoutingConstant.EVALUATE.concat('completion');
}
