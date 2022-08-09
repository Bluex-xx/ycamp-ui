//获取开始日期结束日期最终信息
export function getStartTimeEndTimeInfoFun(startDate, endDate) {
  let start = checkStartTimeEndTimeFun(startDate);
  let end = checkStartTimeEndTimeFun(endDate);
  let calenStartDateResult = start ? getNewDateFun(start) : false;
  let calenStartYear = calenStartDateResult ? calenStartDateResult.calendarAddYear : "";
  let calenStartMonth = calenStartDateResult ? calenStartDateResult.calendarAddMonth : "";
  let calenStartDate = calenStartDateResult ? calenStartDateResult.calendarAddDate : "";
  let calenEndDateResult = end ? getNewDateFun(end) : false;
  let calenEndYear = calenEndDateResult ? calenEndDateResult.calendarAddYear : "";
  let calenEndMonth = calenEndDateResult ? calenEndDateResult.calendarAddMonth : "";
  let calenEndDate = calenEndDateResult ? calenEndDateResult.calendarAddDate : "";
  if (
    calenStartYear !== calenEndYear ||
    calenStartMonth !== calenEndMonth ||
    !calenEndDate ||
    !calenStartDate ||
    calenStartDate > calenEndDate
  ) {
    (start || end) &&
      console.error(`日期范围仅支持本月范围选择或日期格式错误${startDate}  ${endDate}`);
    return { dateRangeCode: 0 };
  }
  return {
    calenStartYear,
    calenStartMonth: calenStartMonth - 1,
    calenStartDate,
    calenEndYear,
    calenEndMonth: calenEndMonth - 1,
    calenEndDate,
    dateRangeCode: 1
  };
}

//检查开始日期和结束日期
export function checkStartTimeEndTimeFun(date) {
  if (
    typeof date !== "string" &&
    typeof date === "string" && !date &&
    typeof date !== "number" &&
    !(date instanceof Date)
  ) {
    //非时间可能的数据格式，或者明确时间没有值，跳过
    return "";
  }
  if (typeof date === "number" && date.length < 10) {
    console.error(`日期${date}格式错误,请使用正确的时间戳格式，例如：1593669468000`);
    return "";
  }
  if (typeof date === "string" && date) {
    //传递过来的时间格式时字符串，此处不可以用parseInt，因为parseInt会将类似2020-02-02解析为2020
    if (!/-/.test(date) && !/\//.test(date && !Number(date))) {
      console.error(
        `日期${date}格式错误,请使用正确的字符串日期格式，例如：2020-06-06，或2020/06/06`
      );
      return "";
    }
    if (!/-/.test(date) && !/\//.test(date) && Number(date)) {
      date = Number(date);
    }
  }
  return date;
}
//将传入的时间生成新的值并返回
export function getNewDateFun(date) {
  let calendarAddYear = null;
  let calendarAddMonth = null;
  let calendarAddDate = null;
  if (typeof date === "string") {
    //字符串，可能时2020-03-04或2020/02/03或03-02或03/02
    let dateArr = /-/.test(date) ? date.split("-") : date.split("/");
    if (dateArr.length === 3) {
      //年月日
      calendarAddYear = parseInt(dateArr[0]);
      calendarAddMonth = parseInt(dateArr[1]);
      calendarAddDate = parseInt(dateArr[2]);
    } else if (dateArr.length === 2) {
      //月日，年默认为今年
      calendarAddYear = new Date().getFullYear();
      calendarAddMonth = parseInt(dateArr[0]);
      calendarAddDate = parseInt(dateArr[1]);
    } else {
      //其他未知情况，报错
      console.error(
        `日期${date}格式错误,请使用正确的字符串日期格式，例如：2020-06-06，或2020/06/06`
      );
      return false;
    }
  } else {
    //时间戳和时间对象
    if (typeof date === "number") {
      //时间戳转为时间对象
      date = new Date(date);
    }
    calendarAddYear = date.getFullYear();
    calendarAddMonth = date.getMonth() + 1;
    calendarAddDate = date.getDate();
  }
  return {
    calendarAddYear,
    calendarAddMonth,
    calendarAddDate
  };
}
//将数据插入日历
export function insertDataToCalendar(value, calendarList, dateProp) {
  if (!value.length || !(value instanceof Array)) {
    return;
  }
  for (let i = 0; i < value.length; i++) {
    let date = value[i][dateProp];
    // console.log(date)
    if (
      typeof date !== "string" &&
      typeof date === "string" && !date &&
      typeof date !== "number" &&
      !(date instanceof Date)
    ) {
      //非时间可能的数据格式，或者明确时间没有值，跳过
      continue;
    }
    if (typeof date === "number" && date.length < 10) {
      console.error(`日期${date}格式错误,请使用正确的时间戳格式，例如：1593669468000`);
      continue;
    }
    if (typeof date === "string" && date) {
      //传递过来的时间格式时字符串，此处不可以用parseInt，因为parseInt会将类似2020-02-02解析为2020
      if (!/-/.test(date) && !/\//.test(date && !Number(date))) {
        console.error(
          `日期${date}格式错误,请使用正确的字符串日期格式，例如：2020-06-06，或2020/06/06`
        );
        continue;
      }
      if (!/-/.test(date) && !/\//.test(date) && Number(date)) {
        date = Number(date);
      }
    }
    let caldarTimeResult = getNewDateFun(date);
    if (!caldarTimeResult) return;
    let { calendarAddYear, calendarAddMonth, calendarAddDate } = caldarTimeResult;
    value[i] = { ...value[i], calendarAddYear, calendarAddMonth, calendarAddDate };
  }
  for (let i = 0; i < calendarList.length; i++) {
    let filterCalendarList = value.filter(item => item.calendarAddYear === calendarList[i].year); //先筛选出当前年的
    filterCalendarList = filterCalendarList.filter(
      item => item.calendarAddMonth === calendarList[i].month
    ); //再筛选出当前月的
    filterCalendarList = filterCalendarList.filter(
      item => item.calendarAddDate === calendarList[i].day
    ); //最后筛选出当前天的
    // console.log(filterCalendarList)
    if (!filterCalendarList.length) {
      // 没有值，跳过
      continue;
    }
    // 将传过来的数据插入原日历数据
    calendarList.splice(i, 1, { ...calendarList[i], ...filterCalendarList[0], hasData: true });
  }
}
