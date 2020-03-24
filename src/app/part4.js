export const normalize = (num) => {
    if(num === 0) {
        return '';
    }

    let count = 0;
    const arrayType = ['()', '{}', '[]'];
    let rezult = [];

    for(let i = 0; i < num; i++) {
        rezult.push(arrayType[count]);
        count + 1 === arrayType.length ? count = 0 : ++count;
    }

    count = 0;

    return rezult.reduce((acc, value) => {
        switch(count) {
            case 0:
                acc = acc + value;
                count++;
                return acc;
            case 1:
                acc = acc.slice(0, acc.length / 2) + value + acc.slice(acc.length / 2, acc.length);
                count++;
                return acc;
            case 2:
                acc = value.slice(0, value.length / 2) + acc + value.slice(value.length / 2, value.length);
                count = 0;
                return acc;
        }
    }, '');
};

export const validateNormalize = (str) => {
    if(str.length < 2) {
        return false;
    }

    let typeStart1 = 0;
    let typeEnd1 = 0;
    let typeStart2 = 0;
    let typeEnd2 = 0;
    let typeStart3 = 0;
    let typeEnd3 = 0;

    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case '(':
                typeStart1 += 1;
                break;

            case ')':
                typeEnd1 += 1;
                if(typeEnd1 > typeStart1) {
                    return false;
                }

                break;

            case '{':
                typeStart2 += 1;
                break;

            case '}':
                typeEnd2 += 1;
                if(typeEnd2 > typeStart2) {
                    return false;
                }

                break;

            case '[':
                typeStart3 += 1;

                break;

            case ']':
                typeEnd3 += 1;
                if(typeEnd3 > typeStart3) {
                    return false;
                }

                break;

            default:
                return false;
        }
    }

    return typeStart1 == typeEnd1 && typeStart2 == typeEnd2 && typeStart3 == typeEnd3;
};