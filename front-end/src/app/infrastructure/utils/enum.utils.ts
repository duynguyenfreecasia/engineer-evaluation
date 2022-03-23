export class EnumUtils {
  /**
   * Transform EnumType to options with value & label for input
   *
   * @param enumType EnumType
   * @param excepts Enum to skip
   */
  public static getOptions(
    enumType: { [id: number]: string },
    config: EnumUtilGetOptionsConfig = {}
  ): any[] {
    const options: { value: string; label: string }[] = [];
    Object.keys(enumType).forEach(key => {
      if (config?.excepts && config?.excepts.includes(key)) {
        return;
      }
      options.push({
        value: key,
        label: enumType[key],
      });
    });
    if (config?.withOptionAll) {
      const option = { value: 'ALL', label: 'ALL' };
      if (config?.withOptionAllAt === 'bottom') {
        options.push(option);
      } else {
        options.unshift(option);
      }
    }
    return options;
  }
}

interface EnumUtilGetOptionsConfig {
  excepts?: any[];
  withOptionAll?: boolean;
  withOptionAllAt?: 'top' | 'bottom';
}
