<script lang="ts">
    import {themeChange} from "theme-change";
    import {onMount} from "svelte";
    onMount(() => {
        themeChange(false);
    });
</script>

<section>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-lg">
                <h1 class="text-5xl font-bold">SvelteKit + DaisyUI template</h1>
                <p class="my-6">
                    Check out the documentation to start coding your next
                    project.
                </p>
                <select data-set-theme class="select mb-6">
                    <option selected disabled value="default">Pick a theme</option>
                    <option value="corporate">Corporate</option>
                    <option value="cupcake">Cupcake</option>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="dark">Dark</option>
                    <option value="emerald">Emerald</option>
                    <option value="lofi">Lo-Fi</option>
                </select>
                <div class="flex flex-row flex-wrap justify-center gap-4">

                    <button
                            class="btn btn-primary w-44"
                            onclick={() =>
                            window.open(
                                "https://svelte.dev/docs/kit/introduction",
                                "_blank",
                            )}
                    >
                        SvelteKit
                    </button>
                    <button
                            class="btn btn-primary w-44"
                            onclick={() =>
                            window.open(
                                "https://daisyui.com/components",
                                "_blank",
                            )}
                    >
                        DaisyUI
                    </button>

                    <button
                            class="btn btn-primary w-44"
                            onclick={() =>
                            window.open("https://tailwindcss.com/", "_blank")}
                    >
                        Tailwind
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
