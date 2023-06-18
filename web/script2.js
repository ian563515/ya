// 當文件載入完成後執行
document.addEventListener("DOMContentLoaded", function() {
    var members = []; // 存放會員資料的陣列
  
    // 綁定新增會員表單的 submit 事件
    document.getElementById("addMemberForm").addEventListener("submit", function(event) {
      event.preventDefault(); // 阻止表單提交的預設行為
  
      var name = document.getElementById("nameInput").value;
      var email = document.getElementById("emailInput").value;
  
      // 建立新的會員物件
      var member = {
        name: name,
        email: email
      };
  
      // 將新的會員物件加入到會員清單
      members.push(member);
  
      // 清空表單輸入欄位的值
      document.getElementById("nameInput").value = "";
      document.getElementById("emailInput").value = "";
  
      // 更新會員清單的表格
      updateMemberTable();
    });
  
    // 更新會員清單的表格
    function updateMemberTable() {
      var table = document.getElementById("memberTable");
  
      // 清空表格內容
      table.innerHTML = "";
  
      // 重新建立表頭
      var headerRow = document.createElement("tr");
      var headers = ["編號", "姓名", "電子郵件", "動作"];
      for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.textContent = headers[i];
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);
  
      // 依序建立每個會員的資料列
      for (var j = 0; j < members.length; j++) {
        var member = members[j];
        var row = document.createElement("tr");
  
        var numberCell = document.createElement("td");
        numberCell.textContent = j + 1;
        row.appendChild(numberCell);
  
        var nameCell = document.createElement("td");
        nameCell.textContent = member.name;
        row.appendChild(nameCell);
  
        var emailCell = document.createElement("td");
        emailCell.textContent = member.email;
        row.appendChild(emailCell);
  
        var actionsCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "刪除";
        deleteButton.dataset.index = j; // 使用 data-* 屬性存放索引值
        deleteButton.addEventListener("click", deleteMember);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);
  
        table.appendChild(row);
      }
    }
  
    // 刪除會員
    function deleteMember(event) {
      var index = event.target.dataset.index;
      members.splice(index, 1); // 從陣列中移除該會員
  
      // 更新會員清單的表格
      updateMemberTable();
    }
  });
  