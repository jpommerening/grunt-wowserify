module.exports = {
  endswith: function endswith(str, end) {
    return str.substring(str.length - end.length) === end;
  }
};
