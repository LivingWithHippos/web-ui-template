<script lang="ts">
    // Import our global CSS
    import "$lib/global.css";
    import {onMount} from "svelte";

    function switchTheme(themeName: string) {
        document.documentElement.setAttribute('data-theme', themeName);
    }

    // This ensures the function is available after the component is mounted
    onMount(() => {
        const themeOptions = document.querySelectorAll('[data-set-theme]');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => switchTheme(option.getAttribute('data-set-theme')));
        });
    });
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-l">Template</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <li class="place-content-center">
                <a href="/">Home</a>
            </li>
            <li>
                <div class="dropdown dropdown-bottom dropdown-end">
                    <label tabindex="0" class="btn m-1 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        Theme
                    </label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-set-theme="cupcake"><a>cupcake</a></li>
                        <li data-set-theme="corporate"><a>corporate</a></li>
                        <li data-set-theme="dark"><a>dark</a></li>
                        <li data-set-theme="business"><a>business</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>

<slot></slot>