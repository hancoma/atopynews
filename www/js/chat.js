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

function make_room() {
  var uuid=device.uuid;
  UIkit.modal.prompt('방 제목', '', function(title){ 
    var title=title;
    if (!title) {
      alert_msg("경고","방제목을 입력 하지 않았습니다.");
     
    } else {
    console.log(member_srl+ " "+title+" "+uuid);
    chat_room_make(title,member_srl,uuid);
    }
  });

}

function chat_room_make(title,member_srl,uuid){
  var title=title;
  var member_srl=member_srl;
  var uuid=uuid;
    $.post("http://atopynews.co.kr/make_room.php",
   {
    title:title,
    member_srl:member_srl,
    uuid:uuid
       },
   function(data){
    chat_show();
    alert_msg("알림","대화방이 생성되었습니다.");
    
   });
}

function open_chat_room (no) {
$("#chat_room_modal").addClass('active');
  var no=no;
  var uuid=device.uuid;
   console.log(member_srl);
 $.post("http://atopynews.co.kr/chat_list_app.php",
   {
    no:no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
$("#chat_body").html(data);
console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

  

}
function chat_page_top() {
  $(document).ready(function(){
  htop=$('#chat_body').height();
  console.log("h"+htop);
  $('.content').scrollTop(htop); 
  });
}
