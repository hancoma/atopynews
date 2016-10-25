<ul class="table-view">
  <li class="table-view-cell table-view-divider">LEFT MENU</li>
  <li class="table-view-cell">
    <a class="navigate-right" id="map_menu">
      MAP
    </a>
     <ul class="table-view" id="map_sub_menu">
     <?php
 include "db_config_map.php";
  
              $Sql_kind="select * from kind_menu  order by number asc ";
            $_company_result=mysql_query($Sql_kind); 
    $_i=0; 
    while($data=mysql_fetch_array($_company_result)) { 
    	?>
    <li class="table-view-cell"><?=$data[kind];?></li>
    <?php }

     include "db_config_app.php";
      ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right"  id="self_camera_menu">
      SELF CAMERA
    </a>
     <ul class="table-view" id="self_camera_sub_menu">
     <?php

  $parent=81;
$count=0;
              $Sql2= "select * from rb_s_menu where hidden=0 and depth=2 and parent=".$parent." and hidden=0 order by gid asc  ";
              $_MENUS2=mysql_query($Sql2); 
              while($_M2=mysql_fetch_array($_MENUS2)) {
              	$count=$count+1;
              	?>
    <li class="table-view-cell"><?php echo $_M2['name']?></li>
    <?php } ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right" id="freeboard_menu">
      FREE BOARD
    </a>
      <ul class="table-view" id="freeboard_sub_menu">
     <?php

  $parent=6;
$count=0;
              $Sql2= "select * from rb_s_menu where hidden=0 and depth=2 and parent=".$parent." and hidden=0 order by gid asc  ";
              $_MENUS2=mysql_query($Sql2); 
              while($_M2=mysql_fetch_array($_MENUS2)) {
              	$count=$count+1;
              	?>
    <li class="table-view-cell"><?php echo $_M2['name']?></li>
    <?php } ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right" id="parade_menu">
      LET'S DRIVE
    </a>
    <ul class="table-view" id="parade_sub_menu">
     <?php

  $parent=239;
$count=0;
              $Sql2= "select * from rb_s_menu where hidden=0 and depth=2 and parent=".$parent." and hidden=0 order by gid asc  ";
              $_MENUS2=mysql_query($Sql2); 
              while($_M2=mysql_fetch_array($_MENUS2)) {
              	$count=$count+1;
              	?>
    <li class="table-view-cell"><?php echo $_M2['name']?></li>
    <?php } ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right" id="sns_menu">
      CONCERN CHAT 
    </a>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right" id="sns_menu">
      JOB CHAT
    </a>
    <ul class="table-view" id="sns_sub_menu">
     <?php

  $parent=3;
$count=0;
              $Sql2= "select * from rb_s_menu where hidden=0 and depth=2 and parent=".$parent." and hidden=0 order by gid asc  ";
              $_MENUS2=mysql_query($Sql2); 
              while($_M2=mysql_fetch_array($_MENUS2)) {
              	$count=$count+1;
              	?>
    <li class="table-view-cell"><?php echo $_M2['name']?></li>
    <?php } ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right">
      FRIEND
    </a>
  </li>
   <li class="table-view-cell">
    <a class="navigate-right" id="global_menu">
      GLOBAL
    </a>
        <ul class="table-view" id="global_sub_menu">
     <?php

  $parent=3;
$count=0;
              $Sql2= "select * from rb_s_menu where hidden=0 and depth=2 and parent=".$parent." and hidden=0 order by gid asc  ";
              $_MENUS2=mysql_query($Sql2); 
              while($_M2=mysql_fetch_array($_MENUS2)) {
              	$count=$count+1;
              	?>
    <li class="table-view-cell"><?php echo $_M2['name']?></li>
    <?php } ?>
  </ul>
  </li>
  <li class="table-view-cell">
    <a class="navigate-right" id="premium_menu">
      PREMIUM
    </a>
    <ul class="table-view" id="premium_sub_menu">
    <li class="table-view-cell">PREMIUM 1</li>
    <li class="table-view-cell">PREMIUM 2</li>
    <li class="table-view-cell">PREMIUM 3</li>
    <li class="table-view-cell">PREMIUM 4</li>
  </ul>
  </li>
</ul>
<style>
	#map_sub_menu {
		display: none;
	}
	#freeboard_sub_menu {
		display: none;
	}
	#self_camera_sub_menu {
		display: none;
	}
	#parade_sub_menu {
		display: none;
	}	
	#sns_sub_menu{
		display: none;
	}
  #global_sub_menu {
    display: none;
  }
#premium_sub_menu {
    display: none;
  }
</style>
<script>
	$("#map_menu").click(
		function () {
			$("#map_sub_menu").toggle(500);
			// body...
		})
	$("#freeboard_menu").click(
		function () {
			$("#freeboard_sub_menu").toggle(500);
			// body...
		})
	$("#self_camera_menu").click(
		function () {
			$("#self_camera_sub_menu").toggle(500);
			// body...
		})
	$("#parade_menu").click(
		function () {
			$("#parade_sub_menu").toggle(500);
			// body...
		})
	$("#sns_menu").click(
		function () {
			$("#sns_sub_menu").toggle(500);
			// body...
		})
  $("#global_menu").click(
    function() {
      $("#global_sub_menu").toggle(500);
    })
  $("#premium_menu").click(
    function() {
      $("#premium_sub_menu").toggle(500);
    })
</script>