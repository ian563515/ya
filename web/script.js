// 當文件載入完成後執行
document.addEventListener("DOMContentLoaded", function() {
    // 綁定登入表單的 submit 事件
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // 阻止表單提交的預設行為
      var username = document.getElementById("loginUsername").value;
      var password = document.getElementById("loginPassword").value;
      // 做登入驗證的處理，例如發送請求到伺服器進行驗證
      // ...
  
      // 這裡只是一個簡單的示例
      if (username === "admin" && password === "admin") {
        alert("登入成功");
      } else {
        alert("登入失敗");
      }
    });
    

    window.location.href="index2.html";


    // 綁定註冊表單的 submit 事件
    document.getElementById("registerForm").addEventListener("submit", function(event) {
      event.preventDefault(); // 阻止表單提交的預設行為
      var username = document.getElementById("registerUsername").value;
      var password = document.getElementById("registerPassword").value;
      // 做註冊處理的處理，例如發送請求到伺服器進行註冊
      // ...
  
      // 這裡只是一個簡單的示例
      alert("註冊成功");
    });
  });
  