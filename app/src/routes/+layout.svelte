<script>
    // Import our global CSS
    import "$lib/global.css";
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-l">Change me</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <li><a href="/">Item #1</a></li>
            <li><a href="/item_2">Item #2</a></li>
        </ul>
    </div>
</div>

<slot></slot>