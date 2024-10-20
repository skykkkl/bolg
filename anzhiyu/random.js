var posts=["2024/10/19/51LA网站统计/","2024/10/19/CS中using语句两种用法/","2024/10/19/Geek高效卸载工具/","2024/10/18/Typora安装破解/","2024/10/19/Windows科学上网/","2024/10/02/测试样式文章test/","2024/10/19/Everything高效搜索工具/","2024/10/03/站点说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };