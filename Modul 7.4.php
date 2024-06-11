<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5dc;
            color: #333;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #537188;
            background: white;
            padding: 10px;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input[type="text"], input[type="password"], button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #537188;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #415a74;
        }
        .message {
            text-align: center;
            padding: 10px;
            margin: 10px 0;
        }
        .success {
            background-color: #dff0d8;
            color: #3c763d;
        }
        .error {
            background-color: #f2dede;
            color: #a94442;
        }
        .warning {
            background-color: #fcf8e3;
            color: #8a6d3b;
        }
    </style>
</head>
<body>
    <h1>Login Page</h1>
    <form method="post" action="">
        <input type="text" name="username" placeholder="Masukkan Username" required>
        <input type="password" name="password" placeholder="Masukkan Password" required>
        <button type="submit">Login</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Contoh ID dan password yang valid
        $valid_username = "admin";
        $valid_password = "password123";

        if (empty($username) || empty($password)) {
            echo "<div class='message warning'>Input tidak lengkap</div>";
        } else if ($username == $valid_username && $password == $valid_password) {
            echo "<div class='message success'>Login sukses</div>";
        } else {
            echo "<div class='message error'>Login gagal</div>";
        }
    }
    ?>
</body>
</html>
