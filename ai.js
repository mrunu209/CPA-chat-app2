document.getElementById("askAI").addEventListener("click", async () => {
    let query = document.getElementById("aiInput").value;
    let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer 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`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ model: "gpt-3.5-turbo", messages: [{ role: "user", content: query }] })
    });
    let result = await response.json();
    document.getElementById("aiResponse").innerText = result.choices[0].message.content;
});
