<?php
    $userName = $_POST['username'];
    $message = $_POST['message'];
    $userEmail = $_POST['useremail'];

    //$function = $_POST['function'];
    
    $servername = "localhost";
    $database = "u980889998_sweatchat";
    $username = "u980889998_sweatchatuser";
    $password = "jimharley1";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }


    //Switch Function

    $function = $_POST['function'];

    switch($function) {
        case('update'):
            $result = mysqli_query($conn, "SELECT * FROM messages");

            $data = array();
            while ($row = mysqli_fetch_object($result))
            {
                array_push($data, $row);
            }
            break;
        
        case('send') :
            $sql = "INSERT INTO messages (username, message) VALUES ('$userName', '$message')";
            if (mysqli_query($conn, $sql)) {
                //echo "New record created successfully";
            } else {
                //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
            break;

        case('addEmail') :
            $sql = "INSERT INTO mailinglist (emailaddress) VALUES ('$userEmail')";
            if (mysqli_query($conn, $sql)) {
                //echo "New record created successfully";
            } else {
                //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }


        }

        //if (!$conn) {
        //    die("Connection failed: " . mysqli_connect_error());
        //}
    
        //function updateCounter() {
        //    $sql = "UPDATE visits SET visitors = visitors+1 WHERE id = 1";
        //    $conn->query($sql);
    //
        //    $sql = "SELECT visitors FROM Counter WHERE id = 1";
        //    $visitcount = $conn->query($sql);
    //
        //    //echo($result);
        //}
    //
        //updateCounter();
    
        
        //$sql = "INSERT INTO `mailinglist` (`emailid`, `timestamp`, `emailaddress`) VALUES (NULL, current_timestamp(), 'kgkgkgk')";
        //if (mysqli_query($conn, $sql)) {
            //echo "New record created successfully";
        //} else {
            //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        //}



        //function postMessage () {
        //    $userName = $_POST['username'];
        //    $message = $_POST['message'];
        
            //$sql = "INSERT INTO messages (username, message) VALUES ('Hill', 'Yo whatsup dog?')";
            //consloe.log(posted);

        //}

        //if ($function == 'send') {
        //    postMessage();
            //$function = 'update';
        //}

        

    

    //$sql = "INSERT INTO messages (username, message) VALUES ('$userName', '$message')";
    //if (mysqli_query($conn, $sql)) {
        //echo "New record created successfully";
    //} else {
        //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    //}
    //mysqli_close($conn);
    

    //$result = mysqli_query($conn, "SELECT * FROM messages");
    //
    //$data = array();
    //while ($row = mysqli_fetch_object($result))
    //{
    //    array_push($data, $row);
    //}

    echo json_encode($data);
    //echo json_encode($visitcount);

exit();