<script lang="ts">
    type Props = {
        title: any;
        content: any;
        actions: any | undefined;
        expanded: boolean;
    };

    let { title, content, actions,  expanded = true } = $props<Props>();
</script>

<div class="card card-bordered bg-base-100 shadow p-2 w-full">
    <div class="collapse collapse-arrow">
        <input type="checkbox" bind:checked={expanded} />
        <div class="collapse-title">
            {@render title()}
        </div>
        <div class="collapse-content overflow-auto whitespace-normal">
            {@render content()}
            {@render actions?.()}
        </div>
    </div>
</div>
