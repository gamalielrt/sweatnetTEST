<?php
    $servername = "localhost";
    $database = "u980889998_sweatchat";
    $username = "u980889998_sweatchatuser";
    $password = "jimharley1";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    $count = $_POST['count'];

    
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "UPDATE visits SET visitors = visitors+1 WHERE id = 1";
    $conn->query($sql);
    
    $visitresult = mysqli_query($conn, "SELECT * FROM visits");
    $visitdata = array();
    
    while ($row = mysqli_fetch_object($visitresult))
    {
        array_push($visitdata, $row);
    }


    echo json_encode($visitdata);





exit();

