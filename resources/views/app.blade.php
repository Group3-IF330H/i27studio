<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Welcome to Studio I27, where innovative design meets precision engineering to transform visions into timeless structures that inspire and elevate the art of architecture. Since 2012 we have served all kinds of design plans from developers and custom projects throughout Indonesia, and are still continuing to this day. explore our projects and discover a world where creativity and precision converge to redefine architectural possibilities">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="canonical" href="https://studioi27.com" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
