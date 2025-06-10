<section>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">SvelteKit + DaisyUI template</h1>
                <p class="py-6">
                    Check out the documentation to start coding your next
                    project.
                </p>
                <div class="flex flex-row flex-wrap justify-center gap-4">
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
                    <a href="/examples" class="link link-success w-44">
                        Personal Examples
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
