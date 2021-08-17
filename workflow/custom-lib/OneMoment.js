(function() {
    "use strict"
    
    function OneMoment(date = new Date()) {
        this.date = new Date(date);
    
        this.format = function(format) {
            let dash = '';
            let year = this.date.getFullYear();
            let month = ('0' + (this.date.getMonth() + 1)).slice(-2);
            if(format === 'YYYY/MM/DD') {
                dash = '/';
                let day = ('0' + (this.date.getDate())).slice(-2);
    
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
    
            const gapDays = Math.round(gapMs / (1000 * 60 * 60 * 24));
            const gapYears = Math.round(gapDays / 365);
    
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
        } else {
            parsedDate.setMonth(date.slice(format.indexOf('MM'), format.indexOf('MM') + 2) - 1); 
            
            parsedDate.setDate(date.slice(format.indexOf('DD'), format.indexOf('DD') + 2));

            parsedDate.setFullYear(date.slice(format.indexOf('YYYY'), format.indexOf('YYYY') + 4));
            
            return new OneMoment(parsedDate);
        }

        formatArr.findIndex((elem, ind) => {
            if(elem === 'YYYY') {
                parsedDate.setFullYear(dateArr[ind]);
            } else if(elem === 'MM') {
                let month = dateArr[ind] - 1;
                parsedDate.setMonth(dateArr[ind] - 1);
            } else if(elem === 'DD') {
                parsedDate.setDate(dateArr[ind]);
            }
        })

        return new OneMoment(parsedDate);
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = OneMoment;
    }
    else {
        window.OneMoment = OneMoment;
    }
})();

