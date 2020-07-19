// export default {
//   myName: '小明'
// }

// export default '小明'; // export 使用純值匯出

export default {
  myName: '小明',
  fn: function() {
    console.log(this.myName);
  }
}