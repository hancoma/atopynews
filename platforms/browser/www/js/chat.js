function open_chat (no) {




   var no=no;
 $.post("http://gallerybear.com/chat_list_app.php",
   {
    no:no
    
       },
   function(data){
$("#chat_body").html(data);
   });
 	$("#room_no").val(no);

    var modal = UIkit.modal("#modal_chat", {center: true});


    modal.show();

}
function save_chat() {
  console.log(memberuid);
	var room_no=$("#room_no").val();
	var chat_msg=$("#chat_msg").val();
	if (!chat_msg){
		alert_msg("msg","no comment !!");
		exit;
	}

		$.post("http://gallerybear.com/chat_save_app.php",
   {
   	room_no:room_no,
   	memberuid:memberuid,
   	chat_msg:chat_msg
    
       },
   function(data){
	open_chat(room_no);
	$("#chat_msg").val('');
   });
}
function gotop() {
  console.log("top");
   
}