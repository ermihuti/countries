<script>
    let { data } = $props();
</script>

<style>
    .country-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
    }

    .country-item {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        transition: transform 0.2s;
        flex: 1 1 200px;
        max-width: 200px;
    }

    .country-item:hover {
        transform: scale(1.05);
    }

    .country-link {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }

    .country-link:hover {
        color: #007BFF;
    }
</style>

<div class="country-list">
    {#each data.content as country}
        <div class="country-item">
            <a class="country-link" href={"/" + country.name.common}>{country.name.common}</a>
        </div>
    {/each}
</div>