import NaturalDateBuilder from "./NaturalDateBuilder";
import IDate from "./IDate";

class NaturalDate extends Date {
  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ) {
    const o: IDate = NaturalDateBuilder.new()
      .year(year)
      .month(month)
      .date(date)
      .hours(hours)
      .minutes(minutes)
      .seconds(seconds)
      .milliseconds(ms)
      .get();
    super(o.year, o.month, o.date, o.hours, o.minutes, o.seconds, o.ms);
  }

  getMonth(): number {
    return super.getMonth() + 1;
  }
}

export default NaturalDate;
