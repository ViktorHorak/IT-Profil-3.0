<?php
// Step 2: Load and decode data
$jsonData = file_get_contents('profile.json');
$profile = json_decode($jsonData, true);

// Fallback in case decoding fails
if (!$profile) {
    die("Error: Could not load profile data.");
}

$name = $profile['name'];
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($name); ?> | IT Profil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><?php echo htmlspecialchars($name); ?></h1>
        </header>

        <section class="skills">
            <h2>Dovednosti</h2>
            <ul>
                <?php foreach ($profile['skills'] as $skill): ?>
                    <li><?php echo htmlspecialchars($skill); ?></li>
                <?php endforeach; ?>
            </ul>
        </section>
    </div>
</body>
</html>
