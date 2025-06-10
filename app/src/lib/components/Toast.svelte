<script lang="ts">
    let message = $state("");
    let alertType = $state("info");
    let timeoutId: number;

    export function callToast(
        msg: string,
        type?: string | undefined,
        milliseconds: number = 1500,
    ) {
        if (timeoutId) {
            message = "";
            clearTimeout(timeoutId);
        }

        alertType = type ?? "info";
        message = msg;

        timeoutId = setTimeout(() => {
            message = "";
        }, milliseconds);
    }
</script>

<!-- trick to avoid dynamic classes not being loaded -->
<div class="alert-info alert-success alert-warning alert-error" hidden></div>

{#if message}
    <div class="toast">
        <div
            class="alert"
            class:alert-info={alertType === "info"}
            class:alert-success={alertType === "success"}
            class:alert-warning={alertType === "warning"}
            class:alert-error={alertType === "error"}
        >
            <span>{message}</span>
        </div>
    </div>
{/if}
