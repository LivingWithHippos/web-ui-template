<script lang="ts">
    import CollapsableCard from "$lib/components/CollapsableCard.svelte";
    import Toast from "$lib/components/Toast.svelte";

    let toast: Toast;
</script>

<div class="flex flex-col place-items-center gap-x-4 gap-y-8 p-4">
    <section class="flex flex-col max-w-lg gap-4 rounded-md bg-base-300 border-base-100 p-4">
        <h1 class="text-xl font-bold">Toasts!</h1>
        <p>
            This will use a small component to display toasts. The component
            can be placed in the layout.svelte file to have a single
            toast for the whole app.
        </p>

        <button
            class="btn btn-soft btn-success"
            onclick={() => toast.callToast("Hello, World!")}
            >Default toast</button
        >

        <button
            class="btn btn-soft btn-error"
            onclick={() => toast.callToast("Hello, Cruel World!", "error")}
            >Error toast</button
        >

        <button
            class="btn btn-soft btn-info"
            onclick={() =>
                toast.callToast("Looong Looooong Woooooorld!", "info", 10000)}
        >
            Long toast
        </button>
    </section>

    <section class="flex flex-col max-w-lg gap-4 rounded-md bg-base-300 border-base-100 p-4">
        <CollapsableCard expanded={true}>
            {#snippet title()}
                <h2 class="card-title flex justify-center">
                    Collapsable card
                </h2>
            {/snippet}
            {#snippet content()}

                <div class="card-body text-center place-items-center">
                    <div class="max-w-md">
                        This is a collapsable card, it can be collapsed by default. Useful to quickly hide sections of the page.
                        Click on its top!
                    </div>
                </div>
            {/snippet}
            {#snippet actions()}
                <div role="alert" class="alert alert-success alert-outline">
                  <span>This is an optional actions slot</span>
                </div>
            {/snippet}
        </CollapsableCard>
    </section>
</div>

<Toast bind:this={toast} />
