$(document).ready(function(){
	if (Cookies.get('charlotte') == "form sent") {
		console.log(Cookies.get('charlotte'));
		$("#send").click(function(e){
			 e.preventDefault();
		});
	} else {
		$("#send").click(function(e){
			 e.preventDefault();
			 mail = $("#mail").val();
			 name = $("#name").val();
			 number = $("#number").val();
			 text = $("#text").val()
			 if (mail == "" && name == "" && text == "" && text == "") {
			 	$("#missing").removeClass("hidden");
			 	$("#missing").addClass("missing");
			} 
			else {
			 	 $("#missing").addClass("hidden");
				 $.ajax({
				  type: "POST",
			      url: "https://mandrillapp.com/api/1.0/messages/send.json",
				  data:
				  {
				      "key": "wjhmzD_iZFoLUKo7911Gxw",
				      "message": {
				          "text": text,
				          "subject": "Mail from the webpage",
				          "from_email": mail,
				          "from_name": name,
				          "to": [
				              {
				                  // "email": "charlotteturnbull@gmail.com",
				                  "email": "sebastian@turninternational.co.uk",
				                  "name": "Charlotte Turnbull",
				                  "type": "to"
				              }
				          ],
				          "headers": {
				              "Reply-To": mail
				          }
				      }
				  }
				})
				.done(function(e, r) {
					if (e[0].reject_reason == null) {
		                console.log("sent");
		                $("#send").prop('disabled', true);
		                Cookies.set('charlotte', "form sent", { expires: 1 });
		                console.log("Cookie set");
    					location.reload();
		            } else {
		            	console.log(e[0].reject_reason);
		            }
				})
			}
		});
	}
});