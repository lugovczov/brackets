module.exports = function check(str, bracketsConfig) {
  arr = str.split('');



    for (let i = 0; i <=arr.length; i++) {
        if (arr.length === 0) {
            return true;
        } else if ( ( arr.length > 1 ) & ( arr[i] =='{') && (arr[i+1]=='}')) {
            arr.splice(i, 2) & (i = 0) ;
        } else if ( ( arr.length > 1 ) & (arr[i]=='(') & (arr[i+1]==')') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='[') & (arr[i+1]==']') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='|') & (arr[i+1]=='|') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='1') & (arr[i+1]=='2') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='3') & (arr[i+1]=='4') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='5') & (arr[i+1]=='6') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='7') & (arr[i+1]=='7') ) {
            arr.splice(i, 2) & (i = 0);
        } else if ( ( arr.length > 1 ) & (arr[i]=='8') & (arr[i+1]=='8') ) {
            arr.splice(i, 2) & (i = 0);
        } 
    }

  dell(arr);

  function dell(arr) {
    if (arr[0] == '(' & arr.length > 1 ) {
        a = arr.findIndex(el => el == ')');
        b = arr.slice(1, a );

        if (b.length % 2 == 0) {
            arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
        }
    } else if (arr[0] == '[' & arr.length > 1 ) {
        a = arr.findIndex(el => el == ']');
        b = arr.slice(1, a );
        
        if (b.length % 2 == 0) {
            arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
        }
    } else if (arr[0] == '{' & arr.length > 1) {
        a = arr.findIndex(el => el == '}');
        b = arr.slice(1, a );

        if (b.length % 2 == 0) {
            arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
        }
    } else if (arr[0] == '|' & arr.length > 1) {
        arr.shift();
        a = arr.findIndex(el => el == '|');
        b = arr.slice(0, a );

        if (b.length % 2 == 0) {
            arr.splice(a -1, 1) & dell(arr);
        }
    } else if (arr[0] == '1' & arr.length > 1) {
        a = arr.findIndex(el => el == '2');
        arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
    } else if (arr[0] == '3' & arr.length > 1) {
        a = arr.findIndex(el => el == '4');
        arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
    } else if (arr[0] == '5' & arr.length > 1) {
        a = arr.findIndex(el => el == '6');
        arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
    } else if (arr[0] == '7' & arr.length > 1) {
        a = arr.findIndex(el => el == '7');
        arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
    } else if (arr[0] == '8' & arr.length > 1) {
        a = arr.findIndex(el => el == '8');
        arr.splice(arr[0] - 1, 1) & arr.splice(a -1, 1) & dell(arr);
    } 
  }

  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
