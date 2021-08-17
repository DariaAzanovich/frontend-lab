(function() {
    "use strict"

    const DAYS_IN_A_YEAR = 365;
    const MS_IN_A_DAY = 1000 * 60 * 60 * 24;
    
    function OneMoment(date = new Date()) {
        this.date = new Date(date);
    
        this.format = function(format) {
            let dash = '';
            const year = this.date.getFullYear();
            const month = ('0' + (this.date.getMonth() + 1)).slice(-2);
            if(format === 'YYYY/MM/DD') {
                dash = '/';
                const day = ('0' + (this.date.getDate())).slice(-2);
    
                return `${year}${dash}${month}${dash}${day}`;
            } else if(format === 'MM-YYYY') {
                dash = '-';
                return `${month}${dash}${year}`;
            }   else {
                return `Can't find format: ${format}!`;
            }
        }
    
        this.fromNow = function() {
            const now = new Date();
            let gapMs = now - this.date;
            let past = true;
            if(gapMs < 0) {
                gapMs = Math.abs(gapMs);
                past = !past;
            }
    
            const gapDays = Math.round(gapMs / MS_IN_A_DAY);
            const gapYears = Math.round(gapDays / DAYS_IN_A_YEAR);
    
            let result = '';
    
            if(past === true) {
                result = gapDays < 365 ? `${gapDays} days ago` : `${gapYears} years ago`;
            } else {
                result = gapDays < 365 ? `in ${gapDays} days` : `in ${gapYears} years`;
            }
    
            return result;
        }
        
        this.toDate = function() {
            return (this.date instanceof Date) ? this.date : new Date(this.date);
        }
    
    }

    OneMoment.parse = function(date, format) {
        let parsedDate = new Date();
        let dateArr = [],
            formatArr = [];

        if(format.search(/\/|\-/) !== -1) {
            dateArr = date.split(/\/|\-/);
            formatArr = format.split(/\/|\-/);

            formatArr.forEach((elem, ind) => {
                if(elem === 'YYYY') {
                    parsedDate.setFullYear(dateArr[ind]);
                } else if(elem === 'MM') {
                    const month = dateArr[ind] - 1;
                    parsedDate.setMonth(month);
                } else if(elem === 'DD') {
                    parsedDate.setDate(dateArr[ind]);
                }
            })
        } else {
            const monthIndex = format.indexOf('MM'),
                  dayIndex = format.indexOf('DD'),
                  yearIndex = format.indexOf('YYYY');

            const month = date.slice(monthIndex, monthIndex + 2),
                  day = date.slice(dayIndex, dayIndex + 2),
                  year = date.slice(yearIndex, yearIndex + 4);
                  
            const monthDateShift = month - 1;

            parsedDate.setMonth(monthDateShift); 
            parsedDate.setDate(day);
            parsedDate.setFullYear(year);
        }

        return new OneMoment(parsedDate);
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = OneMoment;
    }
    else {
        window.OneMoment = OneMoment;
    }
})();

