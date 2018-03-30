// export function paramDecorator(target: Object, key: string, index: number) {
//   const meta = `myParam`;
//   if (Array.isArray(target[meta])) {
//     target[meta].push(index);
//   }
//   else {
//     target[meta] = [index];
//   }
//   // console.log(target); --> myParam: [ 0 ]
// }

// export function methodDecorator(target: Object, key: string, descriptor: PropertyDescriptor) {
//   let oldValue = descriptor.value;
//   descriptor.value = function(...args: any[]) {
//     const metadataKey = `myParam`;
//     let indexes = target[metadataKey]; // get myParam
//     for (var i = 0; i < args.length; i++) {
//       if (indexes.includes(i)) {
//         if (args[i] === 'Batman') {
//           args[i] = 'Bruce Wayne';
//         }
//       }
//     }
//     return oldValue.apply(this, args);
//   }
//   return descriptor;
// }