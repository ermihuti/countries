<script>
    let { data } = $props();
</script>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 16px;
    }

    .country-card {
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: white;
        border-radius: 16px;
        padding: 24px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .country-card:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }

    .country-name {
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .country-capital {
        font-size: 1.3em;
        opacity: 0.9;
    }
</style>

<div class="container">
    {#each data.content as country}
        <div class="country-card">
            <p class="country-name">{country.name.common}</p>
            <p class="country-capital">Capital: {country.capital}</p>
        </div>
    {/each}
</div>
