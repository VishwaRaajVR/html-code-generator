function generateCode() {
  const idea = document.getElementById('userIdea').value.toLowerCase();
  let code = '';

  if (idea.includes('e-commerce') && idea.includes('ebook')) {
    code = \`<!DOCTYPE html>
<html>
<head>
  <title>eBook Store</title>
</head>
<body>
  <h1>Welcome to eBook Store</h1>
  <p>Explore and purchase amazing eBooks</p>
</body>
</html>\`;
  } else {
    code = 'No template found for your idea.';
  }

  document.getElementById('outputCode').innerText = code;
}
