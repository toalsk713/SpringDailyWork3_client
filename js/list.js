

	function searchBook(){
		//입력상자에 키가 입력되면 무조건 호출
		//우리가 원하는 건 enter key를 입력했을 때 서버와 통신
		if(event.keyCode == 13){
		//사용자가 입력한 ISBN번호를 가져와서
		//AJAX로 서버프로그램을 호출
		
			$.ajax({
				url : "http://localhost:7070/book/bookList",
				type : "GET",
				dataType : "jsonp",
				jsonp : "callback",
				data : {
					keyword : $("#place").val()
				},
				success : function(result){

						for(var i = 0; i<result.length; i++) {

							var tr = $("<tr></tr>").attr("data-isbn",result[i].isbn);

							var titleTd = $("<td></td>").text(result[i].title);
							var authorTd = $("<td></td>").text(result[i].author);
							var priceTd = $("<td></td>").text(result[i].price);
							var img = $("<img/>").attr("src", result[i].img);
							img.css("width","140px");
							var imgTd = $("<td></td>").append(img);

							tr.append(imgTd);
							tr.append(titleTd);
							tr.append(authorTd);
							tr.append(priceTd);

							$("tbody").append(tr);
						}
				},
				error : function(){
					alert("뭔가 이상함");
				}
					
			});
		}
	}



	function mySort() {
		var rows = $("table").find("tbody > tr").get();

		rows.sort(function (x, y) {

			var key1 = $(x).children("td").eq(3).text();
			var key2 = $(y).children("td").eq(3).text();

			if(key1 < key2) 
				return -1;
			if(key1 > key2) 
				return 1;

			return 0;
		});

		$.each(rows, function (idx, row) {
			$("table").children("tbody").append(row);

		});
	}







