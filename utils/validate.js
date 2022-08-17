export function isValidDate(dateTime) {
  let yourDate = dateTime;
  try {
    typeof dateTime === "string" && (dateTime = dateTime.replace(/-/g, "/"));
    dateTime = new Date(dateTime);
    if (dateTime instanceof Date && !isNaN(dateTime.getTime())) {
      return {
        dateTime,
        isValid: true
      };
    } else {
      console.error(`日期 ${yourDate} 格式错误`);
      return {
        isValid: false
      };
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * 判断是否为数字，整数或者小数
 */
export function isNumber(val) {
  let regPos = /^\d+(\.\d+)?$/; //非负浮点数
  let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  return regPos.test(val) || regNeg.test(val);
}
