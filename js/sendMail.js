$(document).ready(function(){
	if (Cookies.get('prismapubli') == "formm sent") {
		console.log(Cookies.get('prismapubli'));
		$("#send").click(function(e){
			 e.preventDefault();
		});
	} else {
		$("#send").click(function(e){
			 e.preventDefault();
			 mail = $("#mail").val();
			 name = $("#name").val();
			 text = $("#text").val();
			 subject = $("#subject").val();
			 if (mail == "" && name == "" && text == "" && subject == "") {
			 	$("#missing").removeClass("hidden");
			 	$("#missing").addClass("missing"); 
			} else {
			 	 $("missing").addClass("hidden");
				 $.ajax({
				  type: "POST",
			      url: "https://mandrillapp.com/api/1.0/messages/send.json",
				  data:
				  {
				      "key": "3pJCe4nkpH3Yhvq_1pWivw",
				      "message": {
				          "text": text,
				          "subject": subject,
				          "from_email": mail,
				          "from_name": name,
				          "to": [
				              {
				                  "email": "annel@prismapubli.com",
				                  "name": "Annel Mancilla",
				                  "type": "to"
				              }
				          ],
				          "headers": {
				              "Reply-To": mail
				          }
				      }
				  }
				})
				.done(function(e) {})
			$("#send").prop('disabled', true);
			$(".loading").removeClass("hidden");
			setTimeout(function(){
				$(".loading").addClass("hidden");
				$("#send").addClass("disabled");
				$("#send").val("Listo")
			}, 3000);
			Cookies.set('prismapubli', "form sent", { expires: 1 });
			}
		});
	}
});