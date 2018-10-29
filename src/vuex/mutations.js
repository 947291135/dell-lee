export default {
  handleClick: function (ctx, city) {
    // 当用户点击后改变state中city值，并且将city存储到本地的localStorage中
    ctx.city = city
    try {
      localStorage.city = city
    } catch (e) { }
  }
}
