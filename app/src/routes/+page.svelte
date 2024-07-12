<script lang="ts">
    
    function openDaisyUI() {
        window.open('https://daisyui.com/components', '_blank');
    }
</script>

<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">SvelteKit + DaisyUI template</h1>
            <p class="py-6">
                Check out the DaisyUI components to start coding your next project.
            </p>
            <button class="btn btn-primary" on:click={openDaisyUI}>Get Started</button>
        </div>
    </div>
</div>