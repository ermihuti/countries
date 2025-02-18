export async function load({ params }) {
    let response = await fetch('https://restcountries.com/v3.1/name/' + params.commonName);
    let content = await response.json();

    return {
        content
    }
}