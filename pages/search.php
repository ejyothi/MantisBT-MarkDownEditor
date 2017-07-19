<?php
access_ensure_global_level( REPORTER );

$f_term	  = gpc_get_string( 'term' );

$t_query = "SELECT username FROM {user} WHERE (username LIKE '%".$f_term. "%' OR realname LIKE '%".$f_term."%') AND enabled=1";
$t_result = db_query( $t_query );

$t_users = array();
while( $t_row = db_fetch_array( $t_result ) ) {
    $t_users[] = $t_row['username'];
}

$t_user_count = count( $t_users );

echo json_encode($t_users);
