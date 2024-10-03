var posts=["2024/10/01/站点公告/","2024/10/01/hello-world/","2024/10/02/测试样式文章test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };