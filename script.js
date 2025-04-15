async function generateCode() {
  const idea = document.getElementById("idea").value;
  const output = document.getElementById("output");
  output.textContent = "Generating code...";

  try {
    const response = await fetch("https://eoo6kgr27643tgh.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: idea })
    });

    const result = await response.json();
    output.textContent = result.generated_code || "No code returned.";
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }
}
