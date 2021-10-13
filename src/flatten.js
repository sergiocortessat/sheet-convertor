export const flatten = (data) => {
     const result = {};
    const recurse = (cur, prop) => {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for (const i = 0, l = cur.length; i < l; i++)
          recurse(cur[i], prop + '[' + i + ']');
        if (cur.length === 0) result[prop] = [];
      } else {
        let isEmpty = true;
        for (let p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + '.' + p : p);
        }
        if (isEmpty && prop) result[prop] = {};
      }
    }
    recurse(data, '');
    return result;
  };
  
  export const unflatten = (data) => {
    if (Object(data) !== data || Array.isArray(data)) return data;
    const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
      resultHolder = {};
    for (const p in data) {
      let cur = resultHolder,
        prop = '',
        m;
      while ((m = regex.exec(p))) {
        cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
        prop = m[2] || m[1];
      }
      cur[prop] = data[p];
    }
    return resultHolder[''] || resultHolder;
  };
  
  let customerObject = {
    Email: 'peterduey@gmail.com',
    Customer_Name: {
      display_value: 'Peter Duey',
      prefix: '',
      last_name: 'Duey',
      suffix: '',
      first_name: 'Peter',
    },
    Phone_Number: '18686563590',
    ID: '4229008000000058297',
  };
  
//   const flattenedObj = flatten(customerObject);
//   const unFlattenedObj = unflatten(flattenedObj);
  
//   console.log('flattenedObj', flattenedObj);
//   console.log('unFlattenedObj', unFlattenedObj);