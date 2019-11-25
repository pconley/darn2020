// import { helper } from '@ember/component/helper';

// export default helper(function isActive(params/*, hash*/) {
//   return params;
// });

import { helper } from '@ember/component/helper';

export function isActive([index, current, ...rest]) {
  return index==current ? "true" : "false";
}

export default helper(isActive);